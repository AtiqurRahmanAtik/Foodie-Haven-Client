

const MenuItem = ({item}) => {
        const {name,recipe,image,price} = item;

    return (
        <div className="grid grid-cols-3 gap-3 my-11">
            <img style={{borderRadius: '200px 0px 200px 200px'}} className="w-36 rounded-[0px 200px 200px 200px;]" src={image} alt="" />

            <div className="space-y-3">
                <h3>Name : {name}----------</h3>
                <p>Recipice :  {recipe}</p>
            </div>

            <div>
                <h3 className="text-[#BB8506]"> Price : {price}</h3>
            </div>

        </div>
    );
};

export default MenuItem;