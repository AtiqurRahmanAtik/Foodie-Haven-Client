import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useFetchSecure from "../Hooks/useFetchSecure";
import UseCart from "../Hooks/UseCart";



const FoodCard = ({item}) => {

    const {name, image, recipe, category,price, _id} = item;

    const {user} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const fetchSecure = useFetchSecure();

    const [,refetch] = UseCart();


    const handleCart = (food) =>{
        console.log(food, user.email);
      

        if(user && user.email){
            //send to data in mongodb
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }

           fetchSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` ${name} has been saved`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                }

                //reload page auto
                refetch();
            })
            .catch((error)=> {
                console.log(error);
              });

        }
        else{
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please login and Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn!"
              })
              .then((result) => {
                if (result.isConfirmed) {
                navigate('/login' ,{state: {from: location}});
                }
              });
        }


    }



    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl relative" />
    <p className="absolute top-14 right-16 bg-black text-green-600 p-2"> ${price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Name : {name}</h2>
    <p> Recipe :  {recipe.slice(0,150)}</p>
    <div className="card-actions">
      
      <button 
       onClick={()=> handleCart(item)}
      className="btn btn-outline border-y-4 btn-success"> Add To Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;