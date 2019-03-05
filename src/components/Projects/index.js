import React from 'react';
import './styles.scss';

const Projects = ({children}) => {
    return (
        <div className="projects" id="projects">  
            <div className="text-projects">Check out some of my other work!</div>
            <div className="projects-items">
                <div className="projects-items__box"></div>
                <div className="projects-items__box"></div>
                <div className="projects-items__box"></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Projects