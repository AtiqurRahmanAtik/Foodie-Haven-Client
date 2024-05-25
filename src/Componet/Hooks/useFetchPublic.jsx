import axios from "axios";

const fetchPublic = axios.create({
    baseURL : 'http://localhost:5000'
})

const useFetchPublic = () => {
    return fetchPublic;
};

export default useFetchPublic;