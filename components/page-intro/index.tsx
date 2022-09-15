import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import Link from 'next/link';


SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/background-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>One Trip is all takes.</h2>
                <Link href="/destinations">
                <a  className="btn-shop"><i className="icon-right"></i>Book now</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/background-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>The World is waiting.</h2>
                <Link href="/destinations">
                <a  className="btn-shop"><i className="icon-right"></i>Book now</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
};

export default PageIntro