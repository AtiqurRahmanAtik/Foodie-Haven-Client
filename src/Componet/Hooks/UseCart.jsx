import { useQuery } from "@tanstack/react-query";
import useFetchSecure from "./useFetchSecure";
import useAuth from "./useAuth";






const useCart = () => {
    
    const fetchSecure = useFetchSecure();
    const {user} = useAuth();

    const {data: cart= [] , refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetchSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
   
    return [cart, refetch];
    
};

export default useCart;