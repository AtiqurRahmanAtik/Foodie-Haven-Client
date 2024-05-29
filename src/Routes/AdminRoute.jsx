import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../Componet/Hooks/useAdmin";
import useAuth from "../Componet/Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    
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