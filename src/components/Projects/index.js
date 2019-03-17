import React from 'react';
import './styles.scss';

const Projects = ({children}) => {
    return (
        <div className="projects" id="projects">  
            <div className="text-projects">Check out some of my other work!</div>
            <div className="projects-items">
                <a href="https://goofy-beaver-c88cd1.netlify.com/" className="projects-items__box memorise" ><div className="memorise__text">Pexeso</div></a>
                <div className="projects-items__box"></div>
                <div className="projects-items__box"></div>
            </div>
            <div className="silvitko-projects">
                {children}
            </div>
        </div>
    );
}

export default Projects