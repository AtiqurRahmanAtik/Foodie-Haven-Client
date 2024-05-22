import axios from "axios";

 const fetchSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useFetchSecure = () => {
   
    return fetchSecure;
    
};

export default useFetchSecure;