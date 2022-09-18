import ProductItem from './../../product-item';
import { ProductTypeList } from '../../../../types';
import React from 'react'

// import Swiper core and required components
import { Swiper, SwiperSlide } from 'swiper/react';


let slidesPerView = 1;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if(window.innerWidth > 768) {
    slidesPerView = 2;
    spaceBetween = 35;
    centeredSlides = true;
  }
  if(window.innerWidth > 1024) {
    slidesPerView = 2;
    spaceBetween = 65;
    centeredSlides = true;
  }
}

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      
      <Swiper 
      
      spaceBetween={spaceBetween} 
      loop={true} 
      navigation={true}
      centeredSlides={centeredSlides} 
      watchOverflow={true} 
      slidesPerView={slidesPerView} 
      className="swiper-container">
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          </SwiperSlide>
          
        ))}
      </Swiper>
      
    </div>
  )
}

export default ProductsCarousel