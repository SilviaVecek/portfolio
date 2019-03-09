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
                <h1 className="text">I’m a Front End Developer located in Sydney. I love to <span className="text--code">code</span>, am passionate about<span className="text--design"> UI/UX design</span> and creating an intuitive and aesthically pleasing interface</h1>
                <Skills />
            <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default About;