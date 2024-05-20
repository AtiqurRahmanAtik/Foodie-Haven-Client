

const FoodCard = ({item}) => {

    const {name, image, recipe, category,price} = item;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl relative" />
    <p className="absolute top-14 right-16 bg-black text-green-600 p-2"> ${price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Name : {name}</h2>
    <p> Recipe :  {recipe.slice(0,150)}</p>
    <div className="card-actions">
      
      <button className="btn btn-outline border-y-4 btn-success"> Add To Card</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;