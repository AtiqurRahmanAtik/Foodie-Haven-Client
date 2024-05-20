
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Testimonial = () => {

        const [item, setItem] = useState([]);
        const [rating, setRating] = useState(0);

        useEffect(()=> {
            axios('http://localhost:5000/review')
            .then(res => {
                setItem(res.data);
            })
            .catch(error => {
                console.log(error);
            })
        },[])



    return (
        <div className='my-11'>
            <h1 className="text-3xl font-bold text-center my-11">TESTIMONIALS : {item.length}</h1>

           


            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        parallax={true}

        navigation={true}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        
        <div  className="parallax-bg "   data-swiper-parallax="-23%">
            {
                
                item.map((item) =>  <SwiperSlide key={item._id}>
                    

                   <div className='flex flex-col items-center space-y-3 m-24'>

                   <Rating
      style={{ maxWidth: 180 }}
      value={item.rating}
      onChange={setRating}
      isRequired
    />

                   <p className='text-justify'>{item.details}</p>

                    <h2 className='text-2xl font-bold text-orange-400 text-center'>{item.name}</h2>

                   </div>
                    
                    </SwiperSlide>)
            }
        </div>
       
      </Swiper>

        </div>

    );
};

export default Testimonial;