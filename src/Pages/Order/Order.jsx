import Cover from "../Shared/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import UseMenu from "../../Componet/Hooks/UseMenu";
import FoodCard from "../../Componet/FoodCard/FoodCard";
import FoodTab from "../../Componet/FoodTab/FoodTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";




const Order = () => {

    const categories = ['salad','pizza','soup','dessert','drinks'];

    const {category} = useParams();

    const initalIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initalIndex);

    const [menu] = UseMenu();

    const salad = menu.filter((item)=> item.category === 'salad');
    const pizza = menu.filter((item) => item.category === 'pizza');
    const soup = menu.filter((item) => item.category === 'soup');
    const dessert = menu.filter((item) => item.category === 'dessert');
    const drinks = menu.filter((item) => item.category === 'drinks');

    

    return (
        <div className="space-y-11">

                <Helmet>

            <title>Bistro Boss | Order</title>
            </Helmet>

            <Cover
            img={orderImg}
            title={"OUR SHOP"}
            para={"Would you like to try a dish?"}
            ></Cover>


            {/* tabs section */}

            <Tabs className="text-center" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

    <TabList>
      <Tab >Salad</Tab>
      <Tab>Pizza </Tab>
      <Tab>Soup</Tab>
      <Tab>Deserts</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
     
     <FoodTab item={salad} ></FoodTab>
    </TabPanel>

    <TabPanel>
        
       <FoodTab item={pizza}> </FoodTab>
    </TabPanel>

    <TabPanel>

        <FoodTab item={soup}></FoodTab>
    </TabPanel>

    <TabPanel>

        <FoodTab item={dessert}></FoodTab>
    </TabPanel>

    <TabPanel>

        <FoodTab item={drinks}></FoodTab>
    </TabPanel>


  </Tabs>


        </div>
    );
};

export default Order;