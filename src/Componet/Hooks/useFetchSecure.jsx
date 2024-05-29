import axios from "axios";

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";




 const fetchSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useFetchSecure = () => {
    
    const navigate = useNavigate();
    const { singOut} = useAuth();
    //request 
    fetchSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token');
        console.log(token);
        config.headers.authorization = `Bearer ${token}`;
        return config; 
       
  },
   (error)=> {
    // Do something with request err return Promise.reject(error);
    return Promise.reject(error);
  })

        //response
    
        fetchSecure.interceptors.response.use(function(response){
            return response;
        },
         async(error)=> {

           console.log('error status', status);
            const status = error.response.status;
            
            if(status=== 401 || status === 403){
                await singOut();
                navigate('/login');
            }
            return Promise.reject(error);
          }
    )


    return fetchSecure;
    
};

export default useFetchSecure;