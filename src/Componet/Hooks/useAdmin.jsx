import { useQuery } from "@tanstack/react-query";


import useFetchSecure from "./useFetchSecure";
import useAuth from "./useAuth";



const useAdmin = () => {
  
    const fetchSecure = useFetchSecure();
    const {user} = useAuth();

    const {data : isAdmin, isPending} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await fetchSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data.admin;
        }
        
    })

    return [isAdmin,isPending];
};

export default useAdmin;