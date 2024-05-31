import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useFetchSecure from "../../Componet/Hooks/useFetchSecure";
import useCart from "../../Componet/Hooks/useCart";
import useAuth from "../../Componet/Hooks/useAuth";


const CheckOutForm = () => {

    const [error, setError] = useState('');
    const [transitionId, setTransitionId] = useState(null);

    const fetchSecure = useFetchSecure();
    const [clientSecret, setClientSecret] = useState("");
    const {user} = useAuth();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item) => total +  item.price, 0 );
    const stripe = useStripe();
    const elements = useElements();

    //data load from server payment Intent
    
    useEffect(()=>{
        if(totalPrice)
        fetchSecure.post('/create-payment-intent', {price : totalPrice})
        .then(res =>{
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })

    },[fetchSecure,totalPrice])



    const hanldeSubmit = async(e) =>{

        e.preventDefault();

        if(!stripe || !elements){
            return ;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return ;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error){
            // console.log('payment error : ',error);
            setError(error.message);
        }
        else{
            // console.log('payment successful',paymentMethod);
            setError('');
        }


        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card : card,
                    billing_details: {
                        email: user?.email || 'anonimous',
                        name: user?.displayName || 'anonimous',
                    }
                }
            }

        )
        if(confirmError){
            // console.log('confirm error', confirmError);
        }

        else{
            // console.log('paymentIntent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                // console.log('transition Id : ',paymentIntent.id);
                setTransitionId(paymentIntent.id);
            }
        }
    }

    return (
       
       <form onSubmit={hanldeSubmit}>

    <CardElement
        options={{
          style: {
            base: {
              fontSize: '2rem',
              color: '#424770',
              '::placeholder': {
                color: 'black',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />


      {/* button */}
      <button className="bg-blue-800 text-white my-3 p-2 w-28 rounded-lg" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>

      <p className="text-red-600">{error}</p>
      <h2 className="text-2xl text-green-600 text-center">Your TansitionId :  {transitionId}</h2>

       </form>
    );
};

export default CheckOutForm;