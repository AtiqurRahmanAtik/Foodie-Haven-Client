import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photo_1 from "../../../assets/home/01.jpg";
import photo_2 from "../../../assets/home/02.jpg";
import photo_3 from "../../../assets/home/03.png"
import photo_4 from "../../../assets/home/04.jpg"
import photo_5 from "../../../assets/home/05.png"
import photo_6 from "../../../assets/home/06.png"


const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={photo_1} />
               
                </div>
                <div>
                    <img src={photo_2} />
                  
                </div>
                <div>
                    <img src={photo_3} />
                 
                </div>
                <div>
                    <img src={photo_4} />
                   
                </div>
                <div>
                    <img src={photo_5} />
                  
                </div>
                <div>
                    <img src={photo_6} />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;