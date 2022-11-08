import React from 'react'
// import Navbar from '../Navbar/Navbar'
import './Services.css'
import s1 from '../../assets/s1.jpeg'
import s2 from '../../assets/s2.jpeg'
import s3 from '../../assets/s3.jpeg'
import s4 from '../../assets/s4.jpeg'
import Carousal from './Carousal';

const Services = () => {
  return (
    <>
    {/* <div>
      <Navbar />
    </div> */}
    <div className="main">
      
         <h1>Services we offer</h1>
         <span className="des"></span>

         <div className="item1">
            <div className="svg"><img src={s1} alt="loading.." /></div>
             <div className="content">
                 <h2>CROP ADVISORY & CONSULTANCY</h2>
                 <p>The farmers still practice …….. method of practice, lack of regular information every year ……. Of the crop yield and the farmers loss due to bad practices and unscientific solutions for growing crops and lack of timely based information. But even farmers lack government ….. and schemes, a large communication and advisory gap is seen currently and only 5% of the farmers take advisory  other 95% are cut-out from this part of scientific and specific resources and facts which causes a huge loss to them.</p>
             </div>
         </div>
         <div className="item2">
            <div className="svg"><img src={s2} alt="loading.."/></div>
             <div className="content">
                 <h2>AGRI-MACHINERY AND INPUTS</h2>
                 <p>Small and marginal farmers lack the machinery aspect due to which harvest losses occur. Every year 60% of the farmers lack machinery advantage which causes 10% productivity loss.
                  12% profit loss is due to improper machinery use.
                  64% farmers need small machinery but 56% of the space is unbranded, low quality,…. As there is no assurance, service for small machinery, the entire industry operate on about 30-40% high margin increasing input cost of farmer…..
                  </p>
             </div>
         </div>
         <div className="item3">
            <div className="svg"><img src={s3} alt="loading.."/></div>
             <div className="content">
                 <h2>TECHNOLOGY ADOPTION AND TIMELY BASED INFORMATION.</h2>
                 <p>Farmers couldn't use technology in farms due to lack of infrastructure, by which no timely based information, poor connection to the scientific solutions, the information acces to the market linkage and quality management, they don't even receive the weather prediction. Thus no technology has kept farmers away from many solutions, by such will drop the productivity and earning farmers growth in both aspects, timely based information could save the crops from weather, middleman infection which is 6-10% of productivity covering 20%of the total income.
                 </p></div>
         </div>
         <div className="item2">
            <div className="svg"><img src={s4} alt="loading.."/></div>
             <div className="content">
                 <h2>PESTICIDES AND WEEDICIDES.</h2>
                 <p>Pesticides and weedicides are crop medicines and productivity saviours, if weedicides is not addressed could loss INR1050 billion productivity loss every year. And pesticides is medicine, but in India 85% of farmers use them without diagnosis method as they just go to fertilizers and buy it, as the person even don't knows the disease and farm data which could create the solution, he just give as per they apply it which will unknowingly decrease the yield and product loss farmer thinks it's due to weather. The 35% of the pesticides are fake it's growing 20% year on year, overall loss of 4% yield, which of 10.6 million tonnes of food loss over $8 billion and at a risk of export quality of$26 billion. TAM of pesticides market in India INR 232 billion, comprising fake market TAM :- INR 81.2 billion, at CAGR 20% may reach to INR 110 billion by 2025</p>
             </div>
         </div>
     </div>
         <Carousal />
    </>
  )
}

export default Services