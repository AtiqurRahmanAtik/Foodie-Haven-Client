import axios from "axios";

const fetchPublic = axios.create({
    baseURL : 'foodie-haven-server.vercel.app'
})

const useFetchPublic = () => {
    return fetchPublic;
};

export default useFetchPublic;