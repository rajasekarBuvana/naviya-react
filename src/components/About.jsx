import React from 'react';
import aboutimg from '../images/about.png';
function About(){
    return(
        <div>
                    <section className="about section naviya-container" id="about">
            <div className="about__container  bd-grid">
               <div className="about-img">
                  <img src={aboutimg} alt="" className="about__img"/>
               </div>
               <div className="about__data">
                  <h2 className="section-title about__initial">About Naviya Tech Group</h2>
                  <p className="about__description">Naviya Tech is a multi-skilled group of determined and passionate team committed towards Software, Hardware Design and development solution provider in distributing the cutting-edge technology solutions on Multimedia & Video systems. Armed with the Industry’s brightest, most seasoned designers, Software & Hardware team. Our management team comprises of veterans and industry pioneers with many decades of expertise in the areas of Set Top Boxes, Android Set Top Boxes, OTT Streaming Devices, IoT, Multimedia and Video Broadcasting Technologies, Advanced security and Image processing, Artificial Intelligence AI based IP Cameras and Machine Learning technologies.</p>
                  <a href="#" className="button">Read More</a>
               </div>
         
        </div>
        </section>
        </div>
    )
}
export default About;