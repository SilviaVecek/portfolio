import React from 'react';
import './styles.scss';

const Home = ({ children }) => {
    return (
        <div className="home">
            <img className="home__sky" src="/images/Sky.svg" />
            <div className="home__text">
                {/* <h1 className="home__heading">Silvia Feng's Portfolio</h1> */}
                <h2 className="home__intro">
                    Hi, I'm <span className="home__intro-name">Silvia Feng</span><br /><span className="home__intro-front-end">I'm a Front End Developer</span>
                </h2>
            </div>
            <div className="home__seagull-flying">
                <div className="home__seagull-flapping"></div>
            </div>
            <img className="home__skyline" src="/images/Skyline.svg"/>
            {children}
        </div>
    );
}


export default Home;