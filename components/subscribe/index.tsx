import Link from 'next/link';
import React from 'react';


const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
          <h4>Subscribe to our newsletter and receive exclusive offers every week</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <Link href="/under">
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe