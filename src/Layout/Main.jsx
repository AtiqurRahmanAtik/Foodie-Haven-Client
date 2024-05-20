import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
           <div className="container mx-auto">
            <NavigationBar></NavigationBar>
           <Outlet></Outlet>
           </div>
           
           <div className="my-11">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;