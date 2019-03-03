import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Silvitko from './components/Silvitko';
import About from './components/About';

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header />

                <Home>
                    <Silvitko />
                </Home>
                <About />


                <div className="content">
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
