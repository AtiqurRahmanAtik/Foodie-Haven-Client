import { useContext } from "react";
import { Link, NavLink, } from "react-router-dom";
import { authContext } from "../../../Provider/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";

const NavigationBar = () => {

      const {user,  singOut ,count} = useContext(authContext);
      

      //logout
      const handleLogOut = () =>{

        singOut()
        .then(() => {
         console.log('logOut SuccessFull');
        }).catch((error) => {
          console.log(error);
        });

      }



        const links = <>
        
      <NavLink to='/'>   <li><a>Home</a></li></NavLink>
     
    <NavLink to='/menu'>   <li><a>Menu</a></li></NavLink>

    <NavLink to='/order/salad'>   <li><a> OrderFood</a></li></NavLink>
    <NavLink to='/secrate'>   <li><a>Secreate</a></li></NavLink>

      <NavLink to='/'>  

      <button className="btn">
      <RiShoppingCartFill className="text-3xl"></RiShoppingCartFill>
      <div className="badge badge-secondary">+{count}</div>
      </button>

      </NavLink>


    
      {
        user ? <>  <button  onClick={handleLogOut} className="btn btn-primary"> Log Out</button> 
        {/* <span> {user.email}</span> */}
        </> : 
        <> <NavLink to='/login'>   <li><a> Login</a></li></NavLink></> 
      }
     
        </>

    return (
       
            <div className="navbar container fixed z-10 bg-orange-300 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
            {links}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"> Bistro Boss <br /> 
   Restaurants </Link>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
       
    );
};

export default NavigationBar;