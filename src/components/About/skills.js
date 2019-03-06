import React from 'react';


const SkillSet = ({ image, job, stack, items }) => (
    <div className="skill-set">
        <img className="skills-icon" src={image} />
        <h2 className="job">{job}</h2>
        <h3 className="stack">{stack}</h3>
        <ul className="skills-list">
            {items.map(item => <li key={item} className="skills-list__item">{item}</li>)}
        </ul>
    </div>
)


const Skills = () => {
    return (
        <div className="skills">
            <SkillSet image="/images/programming_icon.svg"
                job="Front End Developer" stack="Tech Stack:"
                items={["HTML", "CSS", "Javascript", "React"]}
            />
            <div className="divider"></div>
            <SkillSet className="skills-list__right"image="/images/designer_icon.svg" job="Designer" stack="Design Tools:"
                items={["Sketch", "Pen & Paper", "Balsamiq"]}
            />
        </div>
    );
}

export default Skills

