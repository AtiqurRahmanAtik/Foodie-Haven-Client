import { RiDeleteBin6Fill } from "react-icons/ri";
import UseMenu from "../../Componet/Hooks/UseMenu";
import TitleSection from "../../Componet/TitleSection/TitleSection";
import Swal from "sweetalert2";
import useFetchSecure from "../../Componet/Hooks/useFetchSecure";
import { FaRegEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";


const ManageItem = () => {

    const [menu] = UseMenu([]);
    const fetchSecure = useFetchSecure();

  
     //handleDelete
     const handleDelete = (id) => {

        fetchSecure.delete(`/menu/${id}`)
        .then(res=> {
            console.log(res.data);
            if(res.data.deletedCount){

                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            }
        })

     
      
      
     };
       


    //  handleUpdate
    const handleUpdate = (id)=>{
        // console.log(id);
    }

    return (
        <div className="my-5">
            
            <div>
                <TitleSection 
                heading={'MangeAll Item '}
                subheading={'Herry Up'}
                ></TitleSection>
            </div>

            <div>
            <h1 className="text-3xl text-center"> {menu.length}</h1>

            {/* table */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         No.
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        

            {
                menu.map((item,index) =>   <tr key={item._id}>
                <td> {index + 1} </td>
             
                <td>
                  <div className="flex items-center gap-3">
        
                  <div className="avatar">
                    
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  
                  
                  </div>
                </td>
                <td>
                {item.name}
                </td>

                <td> ${item.price}</td>
        
                <td>
                <button onClick={()=> handleUpdate(item._id)} className="btn  btn-lg"> 
              <FaRegEdit className="text-3xl text-blue-600"></FaRegEdit>
               </button>
                </td>

                <td>
                <button onClick={()=> handleDelete(item._id)} className="btn  btn-lg"> 
              <RiDeleteBin6Fill className="text-3xl text-red-600"></RiDeleteBin6Fill>
               </button>
                </td>
              </tr>
             )
            }
   
    </tbody>
  
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;