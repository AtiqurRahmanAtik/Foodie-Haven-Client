import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <>  <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></>
    }

    if(user){
       return children;
    }

    return <Navigate to='/login' state={{from: location}} replace > </Navigate>
};

export default PrivateRoute;