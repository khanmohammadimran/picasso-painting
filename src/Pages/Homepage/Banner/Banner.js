import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slider1 from '../../../images/slider1.png'
import slider2 from '../../../images/slider2.png'
import slider3 from '../../../images/slider3.png'
import slider4 from '../../../images/slider4.png'
import slider5 from '../../../images/slider5.png'
const Banner = () => {
    return (
        <>
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;