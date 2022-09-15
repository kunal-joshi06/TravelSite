import Link from 'next/link';
import React from 'react';


const ProductsContent = () => {
  return (
    <section className='contact--section'>
    <section className="container">
          
            <div className="container contactUs">
             
              <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5">
                <h5 className="d-inline-block text-uppercase border-bottom border-5 Heading">Any Questions?</h5>
                <h1 className="display-4 Heading2">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center subHead" >
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4">
                            <i className="fa fa-2x fa-location-arrow text-white" ></i>
                        </div>
                        <h6 className="mb-0">Address : </h6>
                        <h6 className="mb-0">H-33A, Kalkaji, New Delhi 110019</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center subHead" >
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" >
                            <i className="fa fa-2x fa-phone text-white"></i>
                        </div>
                        <h6 className="mb-0">Phone : </h6>
                        <h6 className="mb-0 ">+91 9354878069</h6>
                    </div>
                </div>
                <div className="col-lg-4 subHead">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" >
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" >
                            <i className="fa fa-2x fa-envelope-open text-white" ></i>
                        </div>
                        <h6 className="mb-0">Email : </h6>
                        <h6 className="mb-0">kunaljoshi0603@gmail.com</h6>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-12" >
                    <div className="position-relative h-100">
                        <iframe width="1125" height="300"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                             aria-hidden="false"
                           ></iframe>
                    </div>
                </div>
            </div> */}
            <div className="row justify-content-center position-relative" >
                <div className="col-lg-8 entry_field formContainer">
                    <div className="bg-white rounded p-5 m-5 mb-0 detailForm">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0 messageBox"  placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <Link href='/under'>
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
              
              </div> 
      
    </section>
    </section>
  );
};
  
export default ProductsContent