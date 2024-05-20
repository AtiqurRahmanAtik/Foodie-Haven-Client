
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import photo_1 from "../../../assets/home/slide1.jpg";
import photo_2 from "../../../assets/home/slide2.jpg";
import photo_3 from "../../../assets/home/slide3.jpg";
import photo_4 from "../../../assets/home/slide4.jpg";
import photo_5 from "../../../assets/home/slide5.jpg";

import TitleSection from "/src/Componet/TitleSection/TitleSection";


const Category = () => {


    return (

        <section className='my-11'>

         
        <TitleSection  
        subheading={"ORDER ONLINE"}
        heading={"-----From 11:00am to 10:00pm-----"}
        > 
        </TitleSection>

       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='relative' src={photo_1} alt="" />
            <h1 className=' uppercase absolute text-center text-black font-bold -mt-24 '>Salads</h1>
        </SwiperSlide>

        <SwiperSlide className='uppercase text-center text-green-400 font-bold '><img src={photo_2} alt="" />
        
        <h1 className=' uppercase text-center text-green-400 font-bold -mt-24 '>Salads</h1>
        </SwiperSlide>

        <SwiperSlide className='uppercase text-center text-green-400 font-bold '><img src={photo_3} alt="" />
        
        <h1 className=' uppercase text-center text-green-400 font-bold -mt-24'>Salads</h1>
        </SwiperSlide>


        <SwiperSlide><img src={photo_4} alt="" />
        <h1 className=' uppercase text-center text-green-400 font-bold -mt-24 '>Salads</h1>
        </SwiperSlide>

        <SwiperSlide><img src={photo_5} alt="" />
        <h1 className=' uppercase text-center text-green-400 font-bold -mt-24 '>Salads</h1>
        </SwiperSlide>
       
      </Swiper>

       </section>
       
    );
};

export default Category;