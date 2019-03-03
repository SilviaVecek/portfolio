import React from 'react';
import './styles.scss';
import Skills from './skills.js';

const About = ({ children}) => {
    return (
        <div className="about">
            <div className="about-header" id="about">
                <img className="about-header__profile_picture" src="/images/Display_Pic.svg" />
                <img className="about-header__skyline" src="/images/Skyline_About.svg" />
            </div>
            <div className="about-content">
                <h1 className="text">I’m a Front End Developer located in Sydney. I love to <span className="text--code">code</span>, am passionate about<span className="text--design"> UI/UX design</span> and creating an intuitive and aesthically pleasing interface</h1>
                <Skills />
            </div>
            {children}
        </div>
    );
}

export default About;