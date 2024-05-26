import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Componet/Hooks/UseAuth";
import useAdmin from "../Componet/Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const [user,loading] = UseAuth();
    
    const[isAdmin,isPending] =useAdmin(); 
    
    let location = useLocation();


    if(loading || isPending){
        return <>
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        </>
    }

    if(user && isAdmin){
        return children;
    }

     return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;