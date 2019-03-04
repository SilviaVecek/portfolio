import React from 'react';


const SkillSet = ({ image, job, stack, item1, item2, item3 }) => (
    <div className="skill-set">
        <img className="skills-icon" src = {image}/>
        <h2 className="job">{job}</h2>
        <h3 className="stack">{stack}</h3>
        <ul className="skills-list">
            <li><span>{item1}</span></li>
            <li><span>{item2}</span></li>
            <li><span>{item3}</span></li>
        </ul>
    </div>
)


const Skills = () => {
    return (
        <div className="skills">
            <SkillSet image="/images/programming_icon.svg" job="Front End Developer" stack="Tech Stack:" 
            item1="HTML" item2="CSS" item3="Javascript" />
            <div className="divider"></div>
            <SkillSet image="/images/designer_icon.svg" job="Designer" stack="Design Tools:" 
            item1="Sketch" item2="Pen &amp; Paper" item3="Balsamiq" />
        </div>
    );
}

export default Skills

