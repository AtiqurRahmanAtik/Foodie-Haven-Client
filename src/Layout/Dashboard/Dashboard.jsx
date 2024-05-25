import { NavLink, Outlet } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import {  FaCalendarAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { RiArmchairFill } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";
import UseCart from "../../Componet/Hooks/UseCart";
import { MdPermContactCalendar } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



const Dashboard = () => {
    const [cart] = UseCart();
    //Todo
    const isAdmin = true;

    return (
        <div className="flex gap-4">
            
            {/* dashboard left side navbar*/}
            <div className="w-64 min-h-screen bg-orange-400">
            
            {/* Admin */}
            {
                isAdmin ? <>  <ul className="menu m-2 space-y-1">
                
                <li> <NavLink to='/dashboard/adminHome'> <button className="btn btn-active btn-primary"> <IoHome className="text-2xl"></IoHome>  AdminHome</button> </NavLink> </li>

                <li > <NavLink to='/dashboard/addItems'> <button className="btn btn-outline btn-success w-full"> 
                <FaUtensils className="text-2xl"></FaUtensils>
                AddItems ({cart.length})</button>  </NavLink> </li>


                <li> <NavLink to='/dashboard/reservation'> <button className="btn btn-active btn-primary"> <FaCalendarAlt className="text-2xl"></FaCalendarAlt>  Reservation</button> </NavLink> </li>


                <li> <NavLink to='/dashboard/manageItem'> <button className="btn btn-active btn-primary">  <FaList className="text-2xl"></FaList> MangeItem</button> </NavLink> </li>

                <li> <NavLink to='/dashboard/mangeBooking'> <button className="btn btn-active btn-primary"> <FaBook className="text-2xl"></FaBook>  Manage Booking</button> </NavLink> </li>

                <li> <NavLink to='/dashboard/allUser'> <button className="btn btn-active btn-primary"> <FaUsers className="text-2xl"></FaUsers> All Users</button> </NavLink> </li>
                
            </ul></> :
                
                // normal user
                <>
                <ul className="menu m-2 space-y-1">
                    <li > <NavLink to='/dashboard/cart'> <button className="btn btn-outline btn-success w-full"> 
                    <IoMdCart className="text-2xl"></IoMdCart>
                    MyCart ({cart.length})</button>  </NavLink> </li>


                    <li> <NavLink > <button className="btn btn-active btn-primary"> <IoHome className="text-2xl"></IoHome>  UserHome</button> </NavLink> </li>


                    <li> <NavLink to='/dashboard/reservation'> <button className="btn btn-active btn-primary"> <FaCalendarAlt className="text-2xl"></FaCalendarAlt>  Reservation</button> </NavLink> </li>


                    <li> <NavLink to='/dashboard/cart'> <button className="btn btn-active btn-primary">  <MdReviews className="text-2xl"></MdReviews> Add a Review</button> </NavLink> </li>

                    <li> <NavLink to='/dashboard/cart'> <button className="btn btn-active btn-primary"> <RiArmchairFill className="text-2xl"></RiArmchairFill>  My Booking</button> </NavLink> </li>
                    
                </ul>
                </>
            }
               

                
                
                {/* client side */}
                <div className="divider"></div> 


                <ul className="menu m-2 space-y-1">

                <li> <NavLink to='/'> <button className="btn btn-outline btn-success w-full"> <IoHome className="text-2xl"></IoHome>Home</button> </NavLink> </li>


                    <li > <NavLink to='/order/salad'> <button className="btn btn-outline btn-success w-full"> 
                    <IoMenuSharp className="text-2xl"></IoMenuSharp>
                    Menu</button>  </NavLink> </li>

                    <li > <NavLink to='/order/contact'> <button className="btn btn-outline btn-success w-full"> 
                    <MdPermContactCalendar className="text-2xl"></MdPermContactCalendar>
                   Contact</button>  </NavLink> </li>

                  </ul>  

            </div>

                {/* right side main content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;