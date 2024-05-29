import { useForm } from "react-hook-form";
import TitleSection from "../../Componet/TitleSection/TitleSection";
import { FaUtensils } from "react-icons/fa";
import useFetchPublic from "../../Componet/Hooks/useFetchPublic";
import useFetchSecure from "../../Componet/Hooks/useFetchSecure";
import Swal from "sweetalert2";

const Image_Hosting_Key = import.meta.env.VITE_IMAGE_HOST_API;
const Image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Key}`;

const AddItem = () => {

    const fetchPublic = useFetchPublic();
    const fetchSecure = useFetchSecure();


    const {
        register, handleSubmit,watch,reset, formState: { errors }, } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data);

        const imageFile = { image : data.image[0]};

        //post api image hosting
       const res = await fetchPublic.post(Image_Hosting_Api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
            }
            }
        );
        console.log(res.data);
        if(res.data.success){
            // send to the server side api
            const itemData = {
                name: res.data.name,
                recipe : res.data.recipe,
                category: res.data.category,
                price : parseFloat(res.data.price),
                image : res.data.data.display_url
            }

            //post data to server menu api
            fetchSecure.post('/menu', itemData)
            .then(res=> {
                console.log(res.data);
                if(res.data.insertedId){
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Successfully Add",
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
            })
            
        }

       
    
      }
      console.log(watch("example")) 

    return (
        <div className="my-7">

        <div>
            <TitleSection 
            heading={"What's new "}
            subheading={"Add An Item"}
            > </TitleSection>
        </div>


        {/* form */}
        <div className="bg-teal-500 p-7">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipies Name</span>
          </label>

          <input type="text"  {...register("name", { required: true })} placeholder="email" className="input input-bordered"  />

          {errors.name && <span className="text-red-400">This field is required</span>}
        </div>
        
     
     <div className="flex gap-3">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
         

      

        <select defaultValue={'default'} {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
        <option disabled value={'default'}>select a Item</option>
        <option value="salad">salad</option>
        <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="desert">deserts</option>
        <option value="drink">drink</option>
        
        </select>

          {errors.category && <span className="text-red-400">This field is required</span>}
     
        </div>

        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text"  {...register("price", { required: true })}  placeholder="price" className="input input-bordered"  />

          {errors.price && <span className="text-red-400">This field is required</span>}
        </div>
        </div>

        <div>
        <label className="form-control">
  <div className="label">
   
   <label>
   <span className="label-text">Recipe Details</span>
   </label>
   
  </div>
  <textarea  {...register("recipe", { required: true })}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  {errors.recipe && <span className="text-red-400">This field is required</span>}
 
</label>
        </div>

      <div>
      <input {...register("image", { required: true })}  type="file" className="file-input file-input-bordered w-full max-w-xs" />
      {errors.image && <span className="text-red-400">This field is required</span>}

      </div>

     
      <button className="btn bg-orange-400" type="submit">
    Add Item
     <FaUtensils></FaUtensils>
      </button>
    </form>

        </div>
        </div>
    );
};

export default AddItem;