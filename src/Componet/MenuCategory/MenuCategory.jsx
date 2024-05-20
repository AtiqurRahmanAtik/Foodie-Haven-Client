import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import Cover from "../../Pages/Shared/Cover/Cover";


const MenuCategory = ({item,title,img}) => {


    return (
        <div>
            {title &&  <Cover img={img} title={title}></Cover>}

            <div className="grid grid-cols-2 gap-5">
            {
                item.map((item) => <MenuItem 
                key={item._id}
                item={item}
                
                ></MenuItem>)
            }
        </div>

        <Link to={`/order/${title}`}> <button className="btn btn-outline border-y-4 btn-success">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;