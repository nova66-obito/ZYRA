import React from 'react';
import './cosreview.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Coreview = () => {
    const details = [
      {nam:"ram",con:"Best fitted white denim shirt more than expected crazy soft, flexible"},
      {nam:"priya",con:"Best fitted white denim shirt more than expected crazy soft, flexible"},
      {nam:"sam",con:"Best fitted white denim shirt more than expected crazy soft, flexible"},
      {nam:"rose",con:"Best fitted white denim shirt more than expected crazy soft, flexible"},
      {nam:"nova",con:"Best fitted white denim shirt more than expected crazy soft, flexible"},
    ]
  return (
    <div className="co-reviews col-center">
        <h1 className='heading'>We love good compliments</h1>
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="swiper_container"
        >
        {details.map((item,i)=>{
          return(
            <>
               <SwiperSlide>
                  <p className="heading">{item.con}</p>
                  <h2 className='heading'> &#x1F583; {item.nam}</h2>
               </SwiperSlide>
            </>
          )
        })}
        </Swiper>
      </div>
    </div>
  )
};

export default Coreview;