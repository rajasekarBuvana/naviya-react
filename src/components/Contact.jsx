import React from 'react';
function Contact(){
    return(
        <div>
              <section className="contact section" id="contact">
            <div className="naviya-container">
               <div className="contact__data">
                  <h2 className="section-title">Contact us</h2>
                  <p className="contact__description text-center">If you have any questions or queries a member of staff will always be happy to help. Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.</p>
               </div>
               <div className="contact-box">
                  <div className="form-container">
                     <form>
                        <div className="row">
                           <div className="column">
                              <label for="name">Name</label>
                              <input type="text" id="name" placeholder="Enter Your name"/>
                           </div>
                           <div className="column">
                              <label for="email">Email</label>
                              <input type="email" id="email" placeholder="Enter Your email"/>
                           </div>
                        </div>
                        <div className="row">
                           <div className="column">
                              <label for="subject">Subject</label>
                              <input type="text" id="subject" placeholder="Your subject here"/>
                           </div>
                           <div className="column">
                              <label for="contact">Contact Number</label>
                              <input type="tel" id="contact" placeholder="Your phone number here"/>
                           </div>
                        </div>
                        <div className="row">
                           <div className="column">
                              <label for="issue">Describe your issue</label>
                              <textarea id="issue" placeholder="Describe your issue in detail here" rows="3"></textarea>
                           </div>
                        </div>
                        <button type="submit" className="btn-submit">Submit</button>
                     </form>
                  </div>
               </div>
               </div>
         </section>  
        </div>
    )
}
export default Contact;