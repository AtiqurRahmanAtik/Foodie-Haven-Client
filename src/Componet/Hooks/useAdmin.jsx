import { useQuery } from "@tanstack/react-query";
import useFetchSecure from "./useFetchSecure";
import UseAuth from "./UseAuth";


const useAdmin = () => {
  
    const fetchSecure = useFetchSecure();
    const {user} = UseAuth();

    const {data : isAdmin} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await fetchSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data.admin;
        }
        
    })

    return [isAdmin];
};

export default useAdmin;