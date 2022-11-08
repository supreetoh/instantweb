import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import service1 from '../../assets/service1.jpeg'
import service3 from '../../assets/service3.jpeg'
import service2 from '../../assets/service2.jpeg'
import './Carousal.css'

const IndividualIntervalsExample = () => {
  return (
    <Carousel variant="dark" className='h-100'>
      <Carousel.Item interval={2000}>
        <img style={{filter: 'blur(4px)'}}
          className="d-block w-100 h-100"
          src={service1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='styleh1'>The Education...</h3>
          <p className='stylep'>The right information about fertilizer and a chain link towards solving the problems by expertise 
            methods.<br></br><br></br>
            <b>Right decisions right product</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img style={{filter: 'blur(4px)'}}
          className="d-block w-100"
          src={service2}
          alt="Second slide"
        />
        <Carousel.Caption>
                <h2 className='styleh1'>The Educating</h2>
                 <p className='stylep'>Educating farmers by technology penetration and many commercial farming with directive 
                    information benefits and processing field
                    <br></br><br></br>
                  <b>Right Education leads to excellent results.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img style={{filter: 'blur(4px)'}}
          className="d-block w-100"
          src={service3}
          alt="Third slide"
        />
        <Carousel.Caption>
                <h2 className='styleh1'>And also...</h2>
                 <p className='stylep'>We do convert brands on categories of consumption and the nutritive food supply chain on 
                    keeping nutritive health, to be the agri brand of india.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  

const Carousal = () => {
  return (
    <>
      <IndividualIntervalsExample />
    </>
    
  )
}

export default Carousal




