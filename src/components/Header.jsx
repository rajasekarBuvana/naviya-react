import React from 'react';
import {link} from 'react-scroll';
import logo from '../images/Naviya-Logo.png';
import heroimage from '../images/hero-img.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../script';
function Header(){
    return(
        <div id='main'>
                  <a href="#" class="scrolltop" id="scroll-top">
 <FontAwesomeIcon icon="arrow-alt-circle-up"/>
      </a>
  <header className="l-header" id="header">
         <nav className="nav naviya-container">
            <a href="#" className="nav__logo"><img src={logo} className="naviya-logo"/></a>
            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
            
                  <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                  <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                  <li className="nav__item"><a href="#whychoose" className="nav__link">Services</a></li>
                  <li className="nav__item"><a href="#products" className="nav__link">products</a></li>
                  <li className="nav__item"><a href="#contact" className="nav__link">Contact us</a></li>
               </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
      <FontAwesomeIcon icon="bars"/>
            </div>
         </nav>
      </header>
        
         <section className="home" id="home">
            <div className="home__container naviya-container bd-grid">
               <div className="home__data">
                  <h1 className="home__title text-gra">Naviya Tech</h1>
                  <h2 className="home__subtitle">Enhance and Optimise Your business with </h2>
                  <p>Naviya Tech is a multi-skilled group of determined and passionate team committed towards Software, Hardware Design and development solution.</p>
                  <a href="#" className="button btn-get-start">Get Started</a>
               </div>
               <img src={heroimage} alt="" className="home__img"/>
            </div>
         </section>

        </div>
    )
}
export default Header;

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
