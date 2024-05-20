
import { Helmet } from "react-helmet-async";
import CeffRecomentdent from "../../../Componet/Ceff_Recomendent/CeffRecomentdent";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FormMenu from "../FormMenu/FormMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>

                
            <Helmet>

            <title>Bistro Boss | Home</title>
            </Helmet>

           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
          <CeffRecomentdent></CeffRecomentdent>
          <FormMenu></FormMenu>
          <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;