import React from 'react';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsSection = () => {
  const skills = [
    { name: 'C++', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'C', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'Verilog (HDL)', level: 70 },
    { name: 'FastAPI', level: 65 },
    {name: 'Flutter', level: 55}
    // add more skills as needed
  ];

  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <CircularProgressbar value={skill.level} text={`${skill.level}%` } 
            styles={buildStyles({
              // Colors
              // pathColor: `#000000`,
              textColor: '#f88',
              // trailColor: '#000000',
              // backgroundColor: '#',
              // backgroundColor: ''
            })}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className='nextlink'>
        <h3>My Achivements</h3>
        <img src={require('../images/nextarrow.png')} alt="" />
      </div>
    </div>
  );
};

export default SkillsSection;
