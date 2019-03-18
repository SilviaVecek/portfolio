import React from 'react';
import './styles.scss';

const Projects = ({children}) => {
    return (
        <div className="projects" id="projects">  
            <h2 className="text-projects">Check out some of my other work!</h2>
            <div className="projects-items">
                <a href="https://goofy-beaver-c88cd1.netlify.com/" className="projects-items__box">
                    <div className="project-items__background project-items__background--memorise"></div>
                    <div className="project__text">
                        <h3 className="project__text--heading">Memory Game</h3>
                        <ul className="project__text-items">
                            <li>React</li>
                            <li>SCSS</li>
                            <li>High Fidelity Design (Sketch)</li>
                        </ul>
                    </div>
                </a>
                <a href="https://www.streamjokes.com/" className="projects-items__box" >
                    <div className="project-items__background project-items__background--stream-jokes"></div>
                    <div className="project__text">
                        <h3 className="project__text--heading">StreamJokes</h3>
                        <ul className="project__text-items">
                            <li>UX</li>
                            <li>Wireframe</li>
                            <li>High Fidelity Design (Sketch)</li>
                        </ul>
                    </div>
                </a>
            </div>
            <div className="silvitko-projects">
                {children}
            </div>
        </div>
    );
}

export default Projects