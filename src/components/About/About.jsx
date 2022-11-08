import React from "react";
// import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
import './About.css'
import about from '../../assets/about.jpeg'
import ProfileUi from 'react-profile-card';

const About = () => {
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}

      <div class="about-section">
        <img src={about} alt="" />
        <div class="inner-container">
            <h1>About Us</h1>
            {/* <span class="des"></span> */}
            <p class="text">
                We are the first agriculture-educational technology, where both agri and Agri-Education through
                technology, one to one solution is provided for the farmers, from the day of seed sowing to harvesting
                and with the post market analysis with current bid. An application in work with the process. 
            </p>
            <div class="skills">
                <span>Explore</span>
                <span>Educate</span>
                <span>Enhance</span>
            </div>
        </div>
    </div>
      <div class="section3 testimonials">
        <h1>Our Team</h1>
        <div class='clients'>
        <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='Susheel Shetty' 
          designation='DSCE, Bengaluru' 
          />
          <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='Supreet Dey' 
          designation='DSCE, Bengaluru'
          />
          <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='Mohd Owais' 
          designation='KIIT, Bhubaneswar' 
          />
          </div>
          <div class='clients-2'>
          <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='Ratna Deep' 
          designation='IIT Madras' 
          />
          <ProfileUi 
          imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg' 
          name='Vishal' 
          designation='NIT Suratkhal' 
          />
          </div>
      </div>
    </>
  );
};

export default About;
