import FoodCard from "../FoodCard/FoodCard";


const FoodTab = ({item}) => {
    return (
       
               <div className="grid gap-4 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
            item.map((item) => <FoodCard key={item._id} item={item}></FoodCard>)
        }
      </div>
       
    );
};

export default FoodTab;