import React from 'react';
import Underline from '../Utils/Underline';
import img from '../Assets/profile.JPG';
import './About.css';

const About = () => {
  return (
    <article className='about' id='About'>
      <div className='section-title'>
        <h3>About me</h3>
        <Underline />
      </div>
      <div className='about-center'>
        <div className='about-info'>
          <span className='about-me'>
            I am a passionate web developer especially interested in building
            responsive, charming and modern web applications with the
            technologies in demand in the industry.
            <button className='btn about-btn'>
              <a href='mailto:mustizena@gmail.com'>Hire me</a>
            </button>
          </span>
        </div>
        <div className='about-img-container'>
          <img src={img} alt='me' />
        </div>
      </div>
    </article>
  );
};

export default About;
