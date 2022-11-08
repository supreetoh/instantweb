import React from 'react'
// import Navbar from '../Navbar/Navbar.jsx'
import './Home.css'
import Typewriter from 'typewriter-effect';
import b from '../../assets/b.jpeg'
import x from '../../assets/x.jpeg'
import e from '../../assets/e.jpeg'
import a from '../../assets/a.jpeg'
import d from '../../assets/d.jpeg'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { generateSlides } from './generateSlides.js';
// import main from '../../assets/main.png'

const Splides = () => {
    const styleh3 = {
        textAlign: 'center',
        padding:'4vmax 0 0 0',
        fontFamily: 'Poppins',
        fontStyle: 'italic',
        color: '#4287f5',
        fontWeight: 500,
        justifyContent: 'center',
    }
    const options = {
        type         : 'loop',
        gap          : '1rem',
        arrows     : false,
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        height       : '20rem',
      };
    return (
        <Splide hasTrack={ false } aria-label="What We Do?" options={ options }>
        <SplideTrack>
            { generateSlides().map( slide => (
              <SplideSlide key={ slide.id } >
                <p style={styleh3}>{slide.text}</p>
                {/* <img src={slide.bgImage} alt="loading.."/> */}
              </SplideSlide>
            ) ) }
        </SplideTrack>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        {/* <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
        </div> */}
        </Splide>
    )
}


const Home = () => {

  return (
    <>
      <div className='container__main'>
        <div className='container__one'>
        <h1>Educating and Delivering
        <span><Typewriter
          options={{
            strings: ['Quality', 'Assurance', 'Service'] ,
            autoStart: true,
            loop: true,
          }}
        /></span></h1>
        </div>      
        <canvas className="background"></canvas>
      </div>
      <div className="wrapper">
            <div className="section1">
                <div className="left">
                    <div className="text-container">
                        <h1>Transforming The Agri Sector</h1>
                        <p>Through our mobile app we're trying to bring a change in the largest sector of India and change it in a big way.</p>
                        <div className="button">
                            <img src="https://i.ibb.co/TB2DVgK/learnmore.png" alt="loading.."/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={b} alt="loading.." />
                </div>
            </div>
            <div className="section2">
               
                <div className="right">
                    <img src={x} alt="loading..." />
                </div>
            </div>
            <div className='section0'>
            <div className='blur2'></div>
                {/* <h1>WHAT WE DO ?</h1> */}
                <div className='splide'>
                <Splides />
                </div>
            </div>
                    <div className="section4 examples">
                <div className="example-container">
                    <img src={e} alt="loading.."/>
                </div>
                <div className="example-container">
                    <img src={b} alt="loading.."/>
                </div>
                <div className="example-container">
                    <img src={a} alt="loading.."/>
                </div>
                <div className="example-container">
                    <img src={d} alt="loading.."/>
                </div>
            </div>
            
    </div>
    </>
  )
}

export default Home