import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser, updateProfileUser} = useContext(authContext);
    const navigate = useNavigate();

    const {register,handleSubmit,reset, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data);


        //Create User
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            reset();
            navigate("/");
              
        })
        .catch(error =>{
            console.log(error);
        })

    }

    

    return (

        <div>

             <Helmet>

                <title>Bistro Boss | Register</title>
                </Helmet>

            <h2 className="text-3xl font-bold text-center"> Please Register Here</h2>


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="w-1/2 text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>


        {/*   form  */}
    <div className="w-1/2 card  max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleSubmit(onSubmit)} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"   {...register("name", { required: true })}  placeholder="Enter the name" className="input input-bordered" />

          {errors.name && <span className="text-red-500">This field is required</span>}

        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"   {...register("photoURL", { required: true })}  placeholder="Enter the Photo url" className="input input-bordered" />

          {errors.photoURL && <span className="text-red-500">This field is required</span>}


        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"   {...register("email", { required: true })}  placeholder="email" className="input input-bordered"  />

          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input type="password"   {...register("password", { required: true,  minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})}  placeholder="password" className="input input-bordered"  />

       

          {errors.password?.type === "required" && (
        <p className="text-red-400">Password is required</p>
      )}

          {errors.password?.type === "minLength" && (
        <p className="text-red-400">minimum 6 character</p>
      )}

        {errors.password?.type === "pattern" && (
        <p className="text-red-400">Patter  is required</p>
      )}


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


      
        <div className="form-control mt-6">
        
          <input  className="btn btn-primary" type="submit" value="Registration" />
        </div>


        <div>
            <h1>Already Have An Account  <Link to='/login'>
        <button className="btn btn-link">Login</button> </Link> </h1>
        </div>
      </form>

    </div>


  </div>
</div>
        </div>
      
    );
};

export default Register;