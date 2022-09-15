import ProductsCarousel from './carousel';
import useSwr from 'swr';
import React from 'react'
import Link from 'next/link';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/stays', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Exclusive Offers</h3>
          <Link href="/stays">
          <a  className="btn btn--rounded btn--border">Show All</a>
          </Link>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured