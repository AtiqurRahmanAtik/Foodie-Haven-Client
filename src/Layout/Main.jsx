import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";


const Main = () => {

    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
           <div className="container mx-auto">
        
        {noHeaderFooter || <NavigationBar></NavigationBar>}
           <Outlet></Outlet>
           </div>
           
           <div className="my-11">
           {noHeaderFooter || <Footer></Footer>}
           </div>
        </div>
    );
};

export default Main;