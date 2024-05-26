import { useQuery } from "@tanstack/react-query";

import UseAuth from "./UseAuth";
import useFetchSecure from "./useFetchSecure";



const useAdmin = () => {
  
    const fetchSecure = useFetchSecure();
    const {user} = UseAuth();

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