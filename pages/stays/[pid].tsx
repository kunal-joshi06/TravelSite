import { GetServerSideProps } from 'next'
import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/stays/breadcrumb';
import ProductsFeatured from '../../components/stays/products-featured';
import Gallery from '../../components/stays/product-single/gallery';
import Content from '../../components/stays/product-single/content';
import Reviews from '../../components/stays/product-single/reviews';
import { server } from '../../utils/server'; 
import { ProductType } from 'types';



type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/stays/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb />
      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>
          <div className="product-single__info">
            <div className="product-single__info-btns">
               
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews</button>
            </div> 
             <Reviews product={product} show={showBlock === 'reviews'} /> 
           </div> 
        </div>
      
      
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
}

export default Product
