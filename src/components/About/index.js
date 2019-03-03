import React from 'react';
import './styles.scss';

const About = () => {
    return (
        <div className="content">
            <div className="about" id="about"></div>
            <div className="about-header">
                <img className="profile_pic" src="/images/Display_Pic.svg" />
                <img className="skyline_about" src="/images/Skyline_About.svg" />
            </div>
            <div className="content-about">
                <h1 className="about-text">I’m a Front End Developer located in Sydney. I love to <span className="about-code">code</span>, am passionate about<span className="about-design"> UI/UX design</span> and creating an intuitive and aesthically pleasing interface</h1>
                <div className="about-rectangle">
                    <div className="content-details about-programming">
                        <img className="icon" src="/images/programming_icon.svg" />
                        <h2 className="job">Front End Developer</h2>
                        <h3 className="skills">Tech Stack:</h3>
                        <ul className="skills_list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="content-details about-designer">
                        <img className="icon" src="/images/designer_icon.svg" />
                        <h2 className="job">Designer</h2>
                        <h3 className="skills">Design Tools:</h3>
                        <ul className="skills_list">
                            <li>Sketch</li>
                            <li>Pen &amp; Paper</li>
                            <li>Balsamiq</li>
                        </ul>
                    </div>
                    <img className="designer-icon" />
                </div>
            </div>
        </div>
    );
}

export default About;