import { useQuery } from "@tanstack/react-query";
import useFetchSecure from "../../../Componet/Hooks/useFetchSecure";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUsers = () => {
      
   
    const fetchSecure = useFetchSecure();
    
    // show data from database
    const {data: users=[], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async ()=> {
            const res = await fetchSecure.get('/users');
            return res.data;
        }
    })


    //handleAdmin 
    const handleAdmin =( user) =>{
        console.log(user);

        fetchSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: ` ${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
           
        })

       
    }

    
    
    
    //handleDelete
    const handleDelete = (id) => {
       console.log(id);
       fetchSecure.delete(`/users/${id}`)
       .then(res=> {
        console.log(res.data);
        if(res.data.deletedCount > 0){
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

              refetch();
        }
       })
       .catch(error=> {
        console.log(error);
       })
    }


    return (
        <div >
            
           <div className="flex justify-evenly ">
          
          <div>
          <h1 className="text-3xl font-bold text-center text-red-500 my-9">All Users </h1>
          </div>

           <div>
           <h1 className="text-3xl font-bold text-center text-red-500  my-9">Total Users : {users.length}</h1>
           </div>

           </div>

         
          {/* table */}
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
         
        <th className="text-3xl font-bold text-black">
        No.
        </th>
        <th className="text-3xl font-bold text-black" >Name</th>
        <th className="text-3xl font-bold text-black" >Email</th>
        <th className="text-3xl font-bold text-black" >Role</th>
        <th className="text-3xl font-bold text-black" >Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
            users.map((item,index) =>  <tr key={item._id}>
        <th>
         {index +1}
        </th>
        <td>
         {item.name}
        </td>
        <td>
         {item.email}
          
        </td>

        <td>
        { item.role === 'admin' ? 'Admin' :  <button onClick={()=> handleAdmin(item)} className="btn  btn-lg"> 
            <FaUsers className="text-3xl text-red-500"></FaUsers>
            </button>}
        </td>

        <th>
        <button onClick={()=> handleDelete(item._id)} className="btn  btn-lg"> 
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

export default AllUsers;