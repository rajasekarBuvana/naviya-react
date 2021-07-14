import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerlogo from '../images/Full_logo.svg';
function Footer(){
    return(
        <div>
      <footer className="footer section" id="footer">
         <div className="naviya-container">
            <div className="footer__container bd-grid">
               <div className="footer__content">
                  <a href="#" className="footer__logo"><img src={footerlogo}/></a>
               </div>
               <div className="footer__content">
                  <h3 className="footer__title">Useful Links</h3>
                  <ul>
                     <li><a href="#" className="footer__link"><FontAwesomeIcon icon="chevron-right"/> About us</a></li>
                     <li><a href="#" className="footer__link"><FontAwesomeIcon icon="chevron-right"/> We are Hiring</a></li>
                     <li><a href="#" className="footer__link"><FontAwesomeIcon icon="chevron-right"/> Why Naviya</a></li>
                     <li><a href="#" className="footer__link"><FontAwesomeIcon icon="chevron-right"/> Products</a></li>
                  </ul>
               </div>
               <div className="footer__content">
                  <h3 className="footer__title">Office Address</h3>
                  <p><FontAwesomeIcon icon="envelope"/>md@naviyagroup.com</p>
                  <p><FontAwesomeIcon icon="phone"/>(+91- 4587863456)</p>
                  <p><FontAwesomeIcon icon="FaMapMarkerAlt"/>THE CANOPY, Block - A , 2nd Floor, Paranur Railway Station Rd, Mahindra World City, Chengalpattu , Chennai, Tamil Nadu 603002</p>
                  <div className="social-links">
                     {/* <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                     <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                     <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a> */}
                  </div>
               </div>
            </div>
            <div className="footer__copy">
               &#169; Copyright 
               <strong>
                    2021
                  <span> Naviya Group</span>
               </strong>
               . All Rights Reserved
            </div>
         </div>
      </footer>
        </div>
    )
}
export default Footer;