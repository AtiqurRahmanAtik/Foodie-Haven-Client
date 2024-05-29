
import { RiDeleteBin6Fill } from "react-icons/ri";
import useFetchSecure from "../../Componet/Hooks/useFetchSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useCart from "../../Componet/Hooks/useCart";
import { Link } from "react-router-dom";


const Cart = () => {

    const [cart,refetch] = useCart();

    const totalPrice =  cart.reduce((total, item) => total + item.price,0);
    
     
    const fetchSecure = useFetchSecure();

    //handlDelete
    const handlDelete = (id) => {
        // console.log(id);
      
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })

          .then((result) => {
            if (result.isConfirmed) {
           
                fetchSecure.delete(`/carts/${id}`)
                .then(res=>{
                    console.log(res)
                    if(res.data.deletedCount > 0){

                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
          }  
          refetch();
    })

    .catch(error=>{
        console.log(error);
   
    })
 }
});

        

        
    }

    return (
        <div >

        

            <div className="flex justify-around my-14">
            <h1 className="text-4xl text-orange-400 font-semibold"> Total Orders : {cart.length}</h1>
            <h1 className="text-4xl text-orange-400 font-semibold"> Total Price : ${totalPrice}
           
            </h1>

        {cart.length ? <Link to='/dashboard/payment'>    <button className="btn bg-blue-700 text-white"> Pay</button></Link> :      <button disabled className="btn bg-blue-700 text-white"> Pay</button>}

            </div>

            {/* table */}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th className="text-2xl font-bold text-red-400">NO .</th>
        <th className="text-2xl font-bold text-red-400">Image</th>
        <th className="text-2xl font-bold text-red-400" >Name</th>
        <th className="text-2xl font-bold text-red-400" >Price</th>
        <th className="text-2xl font-bold text-red-400" >Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {/* row 1 */}
        {
            cart.map((item, index) =>   <tr key={item._id}>

            <td>
             
             {index+1}
             
             </td>
        
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
             
              </div>
            </td>
            <td>
             
            {item.name}
            
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=> handlDelete(item._id)} className="btn btn-ghost btn-xs"> 
              <RiDeleteBin6Fill className="text-3xl"></RiDeleteBin6Fill>
               </button>
            </th>
          </tr>)
        }

    
   
    
    </tbody>
 
    
  </table>
</div>
            
        </div>
        
    );
};

export default Cart;