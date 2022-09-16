

import React from "react";

const Modal=()=>{
 
return(
    <>


  <div className="container">  
 <button type="button" className="btn active btn-primary modalBtn" data-toggle="modal" data-target="#exampleModal">
  Checkout Latest Offers
</button>  
</div>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Exclusive Deals for New Customers!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Checkout our Exclusive Deals!! <button className="btn active btn-primary btn-sm"><a href="/destinations" className="tooltip-test" title="Tooltip">Take Me There.</a></button>
      </div>
      <div className="modal-body">
        Get in Touch Today!! <button className="btn active btn-primary btn-sm"><a href="/contact" className="tooltip-test" title="Tooltip">Contact Us.</a></button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn active btn-secondary btn-sm" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </>
)
}

export default Modal;