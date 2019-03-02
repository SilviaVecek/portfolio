import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header />

                <div className="graphics">
                    <img className="sky" src="/images/Sky.svg" />
                    <h1 className="greetings">
                        Hi, I'm <span className="my-name">Silvia Feng</span><br /><span className="front-end">I'm a Front End Developer</span>
                    </h1>
                    <div className="flying">
                        <div className="seagull"></div>
                    </div>
                    <div className="skyline"></div>
                    {/* <img className="skyline" src="/images/Skyline.svg" /> */}
                    <div className="ocean"></div>
                    <footer className="footer">
                        <div className="moving">
                            <div className="paddling"></div>
                        </div>
                    </footer>
                </div>

                <div className="content">
                    <div className="about" id="about"></div>
                    <div className="about-header">
                        <img className="profile_pic" src="/images/Display_Pic.svg" />
                        <img className="skyline_about" src="/images/Skyline_About2.svg" />
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
                    <div className="flying flying_about">
                        <div className="seagull"></div>
                    </div>
                    <div className="moving">
                        <div className="paddling"></div>
                    </div>
                </div>


                <div className="projects" id="projects">
                    <div className="projects-displayed"></div>
                    <div className="projects-displayed"></div>
                    <div className="projects-displayed"></div>
                </div>

                <div className="contact" id="contact">
                    <form className="contact-form" action="email.php" method="get">
                        <h2 className="question">Have a question or want to work together?</h2>
                        <input className="input" type="text" name="name" placeholder="Name" required />
                        <input className="input" type="email" name="email" placeholder="Email" required />
                        <input className="input message-box" name="message" type="message" placeholder="Message" required />
                        <input className="input submit" type="submit" value="Submit" />
                    </form>
                    <h2 className="contact-alternative">Or feel free to drop me a line or email</h2>
                    <div className="contact-options">
                        <img className="contact-icon" src="/images/phone.svg" />
                        <div className="contact-choice-box phone-box">
                            <h3 className="contact-choices">Phone:</h3>
                            <h4 className="contact-details">0416188951</h4>
                        </div>
                        <img className="contact-icon" src="/images/email.svg" />
                        <div className="contact-choice-box">
                            <h3 className="contact-choices">Email:</h3>
                            <h4 className="contact-details">silvia.vf.92@gmail.com</h4>
                        </div>
                    </div>
                    <img className="skyline_contact" src="/images/skyline_contact.svg" />
                </div>
            </div>
        );
    }
}

export default App;
