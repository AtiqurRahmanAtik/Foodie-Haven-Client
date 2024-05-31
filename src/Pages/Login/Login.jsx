import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { authContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { singInUser,updateProfile,googleSingIn} = useContext(authContext);

    const [disable, setDisable] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // console.log(location.state);

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    },[])


    //handleLogin
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginUser = {email, password};
        // console.log(loginUser);


        //singIn User
        singInUser(email,password)
        .then(result => {
            // console.log(result.user);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Login has been Successfull",
                showConfirmButton: false,
                timer: 1500
              });
              
              navigate(from, { replace: true });

        })
        .catch(error =>{
            // console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
                
              });
        })
    } 



    //handleGoogle 
    const handleGoogle = () => {

        googleSingIn()
        .then(result =>{
            const googleUser = result.user;
            // console.log(googleUser);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Google SingIn has been Successfull",
                showConfirmButton: false,
                timer: 2000
              });

              navigate(from, { replace: true });
        })
        .catch(error => {
            // console.log(error);
        })
    }



    //handleCapture
    const handleCapture = (e) =>{

       const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);

        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }


    return (
        <div className="my-11">

<Helmet>

<title>Bistro Boss | Login</title>
</Helmet>
            <h2 className="text-3xl font-bold text-center"> Please Login Here</h2>


            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="w-1/2 text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>


        {/*   form  */}
    <div className="w-1/2 card  max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleLogin} className="card-body">


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleCapture} type="text" name="chatcha" placeholder="type text the above" className="input input-bordered" required />
          
        
        </div>




        <div className="form-control mt-6">
        
          <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
        </div>

        <div>
       <h1>New Here Please   <Link to='/register'> 
<button className="btn btn-link">Register</button></Link> </h1>
        </div>
      </form>


      {/* google button */}
     <div className=' mx-auto my-5 space-y-5'>

        <div>
            <h1 className='text-center text-2xl text-emerald-400 font-medium'>Sing in With</h1>
        </div>
        <hr />
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

export default Login;