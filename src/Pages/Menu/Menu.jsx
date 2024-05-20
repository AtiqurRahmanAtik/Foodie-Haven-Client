import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import image from '../../assets/home/banner.jpg';
import PopularMenu from '../PopularMenu/PopularMenu';
import desertImg from "../../assets/menu/dessert-bg.jpeg"
import TitleSection from "/src/Componet/TitleSection/TitleSection";
import UseMenu from '../../Componet/Hooks/UseMenu';
import MenuCategory from '../../Componet/MenuCategory/MenuCategory';

import pizzaImg from "../../assets/menu/pizza-bg.jpg"

import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [menu] = UseMenu();


    const salad = menu.filter((item) => item.category === 'salad')

    const dessert = menu.filter((item) => item.category === 'dessert')
    const soup = menu.filter((item) => item.category === 'soup')
    
    const pizza = menu.filter((item) => item.category === 'pizza')
    const offered = menu.filter((item) => item.category === 'offered')


    return (
        <div >
            
            <Helmet>

            <title>Bistro Boss | Menu</title>
            </Helmet>
            <h1>menu menu</h1>

            <Cover
            img={image}
            title={"OUR MENU"}
            para ={"Would you like to try a dish?"}
            ></Cover>

           <PopularMenu></PopularMenu>

            <TitleSection
            heading={"---Don't miss---"}
            subheading ={"TODAY'S OFFER"}
            ></TitleSection>
            
            {/* offer item */}
            <MenuCategory item={offered} ></MenuCategory>


            {/* Desert item */}
        
            <MenuCategory item={dessert}
            img={desertImg}
            title={"DESSERTS"}
            ></MenuCategory>


            {/* Pizza item */}
           

            <MenuCategory item={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

            <MenuCategory item={salad} title={"salad"} img={saladImg}></MenuCategory>

            <MenuCategory item={soup} title={"Soup"} img={soupImg}></MenuCategory>

           
        </div>
    );
};

export default Menu;