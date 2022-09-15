import Link from 'next/link';
import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>One</span>Trip</h6>
            <p>One Trip is Nurtured from the seed of a single great idea - to empower the traveller - OneTrip is a pioneer in India's online travel industry. Founded in the year 2022 by Kunal Joshi.</p>
            <ul className="site-footer__social-networks">
              <li><Link href="https://www.facebook.com/"><a ><i className="icon-facebook"></i></a></Link></li>
              <li><Link href="https://twitter.com/"><a ><i className="icon-twitter"></i></a></Link></li>
              <li><Link href="https://in.linkedin.com/"><a ><i className="icon-linkedin"></i></a></Link></li>
              <li><Link href="https://www.instagram.com/"><a ><i className="icon-instagram"></i></a></Link></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Booking online</li>
              
              <li><Link href="/destinations"><a >Locations</a></Link></li>
              <li><Link href="/transport"><a >Commute</a></Link></li>
              <li><Link href="/accomodation"><a >Hotels</a></Link></li>
            </ul>

            <ul>
              <li>Contact</li>
              <li>kunaljoshi0603@gmail.com</li>
              <li>Hotline: +91 9354878069</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY KUNAL JOSHI - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer