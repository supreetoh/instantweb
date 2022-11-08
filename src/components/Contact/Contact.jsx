import React from 'react'
import './Contact.css'
// import Navbar from '../Navbar/Navbar'

const Contact = () => {
  return (
    <>
    {/* <div>
      <Navbar />
    </div> */}
      <section id="section">
    <br></br>
        <div className="container">
           
            <div className="contactInfo">
                <div>
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span>Bengaluru, India</span>
                        </li>
                        <li>
                            <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <span>agrispot22@gmail.com</span>
                        </li>
                        <li>
                            <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <span>+919741670371</span>
                        </li>
                    </ul>
                </div>

            </div>
            <form action=''>
            <br></br>
            <div className="contactForm">
               
                <h2>Send a Message</h2>
                <div className="formBox">
                    <div className="inputBox w50">
                        <input type="text" required placeholder="First Name" />
                    </div>
                    <div className="inputBox w50">
                        <input type="text" required placeholder="Last Name" />
                    </div>
                    <div className="inputBox w50">
                        <input type="email" required placeholder="Email Address" />
                    </div>
                    <div className="inputBox w100">
                        <textarea required placeholder="Write your message here..."></textarea>
                    </div>
                    <div className="inputBox w100">
                        <input type="submit" value="Send" />
                    </div>
                </div>
          </div>
            </form>
            </div>
    </section>
    </>
  )
}

export default Contact