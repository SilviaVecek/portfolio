import React from 'react';
import './styles.scss';
import Skills from './skills.js';

const About = ({ children}) => {
    return (
        <div className="about" id="about">
            <div className="about-header">
                <img className="about-header__skyline" src="/images/Skyline_About.svg" />
            </div>
            <img className="about-header__profile_picture" src="/images/Display_Pic.png" />
            <div className="about-content">
                <h1 className="text padding-mobile">I’m a self taught Front End Developer based in Sydney. I like to <span className="text--design">doodle and draw</span> my ideas down and bring them to life through <span className="text--code">coding</span> and Sketch</h1>
                <Skills />
                {/* <div>
                    {children}
                </div> */}
            </div>
        </div>
    );
}

export default About;