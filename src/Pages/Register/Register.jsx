import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import useFetchPublic from "../../Componet/Hooks/useFetchPublic";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, profileUpdate, googleSingIn } = useContext(authContext);
  const navigate = useNavigate();
  const fetchPublic = useFetchPublic();

  const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log(location.state);


  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Create User
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      // Update Profile
      await profileUpdate(data.name, data.photo);

      // Store user data to the database
      const registerInfo = {
        name: data.name,
        email: data.email
      };

      const res = await fetchPublic.post('/users', registerInfo);
      console.log(res);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        reset();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

    
     //handleGoogle 
    const handleGoogle = () => {

        googleSingIn()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser);

            const registerUser = {
                email : result.user.email,
                name : result.user.displayName
            }

            //fetch axios
            fetchPublic.post('/users',registerUser)
            .then(res=>{
                console.log(res.data);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Google SingIn has been Successfull",
                    showConfirmButton: false,
                    timer: 2000
                  });

                  navigate(from, { replace: true });

            })
       
        })
        .catch(error => {
            console.log(error);
        })
    }



  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">Please Register Here</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="w-1/2 card max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="Enter the name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photo", { required: true })} placeholder="Enter the Photo URL" className="input input-bordered" />
                {errors.photo && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="Password" className="input input-bordered" />
                {errors.password?.type === "required" && <p className="text-red-400">Password is required</p>}
                {errors.password?.type === "minLength" && <p className="text-red-400">Minimum 6 characters</p>}
                {errors.password?.type === "pattern" && <p className="text-red-400">Pattern is required</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
              <div>
                <h1>Already Have An Account <Link to='/login'>
                  <button className="btn btn-link">Login</button></Link></h1>
              </div>
            </form>

            <div className="divider"></div>

                {/* google button */}
     <div className=' mx-auto my-2 space-y-5'>

<div>
    <h1 className='text-center text-2xl text-emerald-400 font-medium'>Sing in With</h1>
</div>

<button onClick={handleGoogle} className='btn btn-accent w-full'>
<FcGoogle className='text-3xl mr-2'></FcGoogle>
 Google</button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
