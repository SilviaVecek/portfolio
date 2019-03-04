import React from 'react';
import './styles.scss';

const Projects = ({children}) => {
    return (
        <div className="projects" id="projects">
            <div className="projects-displayed"></div>
            <div className="projects-displayed"></div>
            <div className="projects-displayed"></div>
            {children}
        </div>
    );
}

export default Projects