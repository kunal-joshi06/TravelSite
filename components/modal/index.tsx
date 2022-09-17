import Link from 'next/link';
import React from 'react';


const Modal = () => {
  return (
<>
    

{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button> */}


<div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Contact Us!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="row justify-content-center position-relative" >
                <div className="entry_field formContainer">
                    <div className="bg-white rounded p-3 modalForm">
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
                                    
                                    <button className="btn btn-primary w-100 py-3" type="submit" data-dismiss="modal">Send Message</button>
                              
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    
    </div>
  </div>
</div>
</>
  );
};
  
export default Modal