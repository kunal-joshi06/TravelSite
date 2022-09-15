import { GetServerSideProps } from 'next'
import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/transport/breadcrumb';
import Gallery from '../../components/destinations/product-single/gallery';
import Content from '../../components/destinations/product-single/content';
import Reviews from '../../components/destinations/product-single/reviews';
import { server } from '../../utils/server'; 
import { ProductType } from 'types';



type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/transport/${pid}`);
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
      <Footer />
    </Layout>
  );
}

export default Product
