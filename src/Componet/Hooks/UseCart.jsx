import { useQuery } from "@tanstack/react-query";
import useFetchSecure from "./useFetchSecure";
import UseAuth from "./UseAuth";





const UseCart = () => {
    
    const fetchSecure = useFetchSecure();
    const {user} = UseAuth();

    const {data: cart= [] , refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetchSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
   
    return [cart, refetch];
    
};

export default UseCart;