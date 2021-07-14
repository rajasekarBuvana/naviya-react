import React from 'react' ;
import webcam from '../images/webcam.png';
import tv from '../images/tv.png';
import ipcamera from '../images/ipcamera.png';
function Products(){
    return(
<div>
<section className="section" id="products">
            <div className="naviya-container">
               <h2 className="section-title text-white">Our Products & Solutions</h2>
               <div className="box-area">
                  <div className="single-box">
                     <div className="img-text">
                        <span className="header-text"><strong>Web Camera</strong></span>
                     </div>
                     <div className="img-area">
                        <img src={webcam} className="service-img"/>
                     </div>
                  </div>
                  <div className="single-box">
                     <div className="img-text">
                        <span className="header-text"><strong>Television</strong></span>
                     </div>
                     <div className="img-area">
                        <img src={tv} className="service-img"/>
                     </div>
                  </div>
                  <div className="single-box">
                     <div className="img-text">
                        <span className="header-text"><strong>IP Camera</strong></span>
                     </div>
                     <div className="img-area">
                        <img src={ipcamera} className="service-img"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
</div>
    )
}

export default Products;