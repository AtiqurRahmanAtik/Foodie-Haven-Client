
import TitleSection from "/src/Componet/TitleSection/TitleSection";
import MenuItem from "../../Componet/MenuItem/MenuItem";
import UseMenu from "../../Componet/Hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter((item)=> item.category === 'popular');


  

    return (
        <section >
         
         <TitleSection
         heading={"---Check it out---"}
         subheading={"FROM OUR MENU"}
         
         >
        </TitleSection>


        <h1>Popular section : {menu.length}</h1>

        <div className="grid grid-cols-2 gap-5">
            {
                popular.map((item) => <MenuItem 
                key={item._id}
                item={item}
                
                ></MenuItem>)
            }
        </div>

        </section>
    );
};

export default PopularMenu;