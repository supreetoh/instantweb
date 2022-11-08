import React from "react";
import about from "../../assets/about.jpeg";
import "../About/About.css";

const About2 = () => {
  return (
    <>
      <div class="about-section">
        <img src={about} alt="" />
        <div class="inner-container">
          <h1>Fertilizer Calculator</h1>
          {/* <span class="des"></span> */}
          <p class="text">
          the N P K value of the soil with respect to the crop varies with it, farmers spray without keeping the value of the crop which results in the  increase in input cost and the loss in the crop productivity due to excess in use of fertilizer, we solve through preffering the certain amount of the fertilizer by calculative index of the both and keeping the soils healthy, so that the yield is good and droping down the input cost of the farmers.
          </p>
          <div class="skills">
            <span>Explore</span>
            <span>Educate</span>
            <span>Enhance</span>
          </div>
        </div>
      </div>
      <div class="about-section">
        <img src={about} alt="" />
        <div class="inner-container">
          <h1>Our Community</h1>
          {/* <span class="des"></span> */}
          <p class="text">
          as farmers dont have a professional platform to share the views, as the communication gap in the sector is clearly visible,we build a community where the farmers can clearly engage with farmers and can share the views and even the solution to the each other so that a content creation of the same is visible to all other farmers through whuch the engagement in the platforms booms and much more solutyions are brought by the farmers.
          </p>
          <div class="skills">
            <span>Explore</span>
            <span>Educate</span>
            <span>Enhance</span>
          </div>
        </div>
      </div>
      <div class="about-section">
        <img src={about} alt="" />
        <div class="inner-container">
          <h1>E-Commerce</h1>
          {/* <span class="des"></span> */}
          <p class="text">
         The margin and products in the  agri input has 30% alteration and profit 40% as we could do go with D2C where could give the technical assured products and could make farmers more profitable and ordewr productb just on a one click as accessable as they  can.
          </p>
          <div class="skills">
            <span>Explore</span>
            <span>Educate</span>
            <span>Enhance</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
