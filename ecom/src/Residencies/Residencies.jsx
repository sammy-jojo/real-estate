import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css'
import slider from '../utils/slider.json';
import { sliderSettings } from '../utils/common';
// import { HiShieldCheck } from "react-icons/hi";
// import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
// import "swiper/css"
// import './Residencies.css'

const Residencies = () => {
  return (  
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span>Popular Residencies</span>  
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons />
            {slider.map((slide, index) => (       
              <SwiperSlide key={index}>
                <div className="flexColStart r-card">
                  <img src={slide.image} alt="home" />
                  <div className="r-price secondaryText"> 
                    <span style={{ color: 'var(--orange)' }}>$</span>
                    <span>{slide.price}</span>
                  </div>
                  <div className="name primaryText">{slide.name}</div>
                  <div className="detail secondaryText">{slide.detail}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>        
    </div>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="slider-buttons">
      <button onClick={() => swiper.slidePrev()} className="slider-button">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="slider-button">
        &gt;
      </button>
      
    </div>
  );
}