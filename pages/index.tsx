import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/destinations/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featuredDestination.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Exotic Destinations.</h3>
              <Link href="/destinations">
              <a className="btn btn--rounded">Take Me There</a>
              </Link>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featuredTransport.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Check out Deals on Flights!</h3>
              <Link href="/transport">
              <a className="btn btn--rounded">Take Me There</a>
              </Link>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featuredHotel.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Premium Stays.</h3>
              <Link href="/accomodation" >
              <a className="btn btn--rounded">Take Me There</a>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-home"></i>
              <div className="data-item__content">
                <h4>Free Stays</h4>
                <p>Yes, we offer free stays on our Selected Exclusive Destinations.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Premium Service</h4>
                <p>We provide best-in-class services in our business.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage