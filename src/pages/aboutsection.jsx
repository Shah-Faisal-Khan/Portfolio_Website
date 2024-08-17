import React from 'react';
// import './AboutSection.css';

const AboutSection = () => {
  return (
    <div id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src={require('../images/JSN_6654.JPG')} alt="Profile" />
        </div>
        <div className="about-text">
          <p>
            My journey in technology began with a keen interest in programming and problem-solving, which has now evolved into a pursuit of innovative solutions in software development and other areas .
          </p>
          <h3><img src={require('../images/Asset 1@4x.png')}alt="" />Education</h3>
          
            <h5>
              <span className='one'>
              B.Tech in Computer Science and Engineering
              </span>
              <br />
              <span>
              Indian Institute of Technology Gandhinagar
              </span>
            </h5>
            <h5>
              <span className='one'>Higher Secondary Education</span>
              <br />
              <span>
              Shri Tripura College, Latur
              </span>
              <br />
              <span>
              Percentage: 98.00%
              </span>
            </h5>
            <h5>
              <span className='one'>Secondary Education</span>
              <br />
              <span>
              St. Augustine School, Parbhani
              </span>
              <br />
              <span>Percentage: 95.80%</span>
            </h5>
          
          <p>
            I am deeply enthusiastic about leveraging technology to create impactful and efficient solutions. My interests span across full-stack development, android development, data analysis, and innovative project management. I believe in continuous learning and strive to stay updated with the latest trends and advancements in technology.
          </p>
        </div>
      </div>
      <div className='nextlink'>
        <h3>My Internships and Projects</h3>
        <img src={require('../images/nextarrow.png')} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
