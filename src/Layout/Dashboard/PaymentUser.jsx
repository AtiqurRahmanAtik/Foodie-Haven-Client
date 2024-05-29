import { loadStripe } from "@stripe/stripe-js";
import TitleSection from "../../Componet/TitleSection/TitleSection";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePomise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentUser = () => {
    return (
        <div>
            <TitleSection heading={'Payment'} subheading={'payment to eat'}></TitleSection>


            {/* create stript  */}
            <Elements stripe={stripePomise}>

             <CheckOutForm></CheckOutForm>
             
            </Elements>
        </div>
    );
};

export default PaymentUser;