import React from 'react';
import './Review.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { FiArrowUpLeft } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

const Reviews = (val) => {
    const {images} = val
    console.log(images)
    return (
        <>
            <div className="reviews">
                <div>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        // pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Navigation]}
                        className="swiper_container"
                    >
                       {images.map((item,i)=>{
                          return(
                              <SwiperSlide>
                                 <img src={item.image} alt='dress different' />
                              </SwiperSlide>
                          )
                       })}
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                               <p><FiArrowUpLeft /></p>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                               <p><FiArrowUpRight /></p>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
};

export default Reviews;
