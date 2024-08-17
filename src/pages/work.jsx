import React from "react";
import TopClip from "./topclip";
import { Link } from 'react-router-dom';
import Footer from "./footer";
// import './mainstyle.scss';

const Work = () => {
    return (
        <div className="Work">
            <div className="bgimg"><img src={require('../images/bg3.png')} alt="" /></div>
            <Link to={'/'}><TopClip /></Link>

            <div className="workdiv">
            <h2>Work Experience</h2>
            <div>
                <h3>Full Stack Web Developer</h3>
                <p><strong>Sahayak.co</strong> - December 2023</p>
                <div className="profile-image">
                <img src={require('../images/Shah_Faisal_Certificate_page-0001.jpg')} alt="Profile" />
                </div>
                <div className="para">
                <p>
                I designed and developed a user-friendly and visually engaging web app using <strong>ReactJS</strong>, complemented by a robust backend infrastructure built with <strong>FastAPI</strong>, which significantly enhanced performance and scalability. The project also involved orchestrating <strong>SQLite</strong> database integration to optimize data processes, resulting in efficient functionality. Additionally, I achieved seamless user experiences by implementing essential features such as authentication and database management.
                </p>

                </div>                
            </div>

            <div >
                <h3>Inventor</h3>
                <p><strong>Invention Factory at Maker Bhavan Foundation</strong> - June - July 2023</p>
                <div className="profile-image">
                <img src={require('../images/JSN_6737.JPG')} alt="Profile" />
                </div>
                <div className="para">
                <p>
                I secured a coveted internship position as one of just twenty selected from an applicant pool of over 500 students from all IITs and NITs. During the internship, I discovered a critical issue related to chalkboards in 67% of Indian schools. In response, I conceptualized and developed an innovative solution—the 'Dust Collecting Chalkboard Eraser'—within six weeks, effectively addressing the health hazards posed by chalk dust. Additionally, I initiated the filing process for a <strong>Provisional Patent Application</strong> to protect this innovation.
                </p>
                </div>
            </div>
            </div>
            
            <div className="projectsdiv">
            <h2>Projects</h2>
            <div >
                <h3>Firewalling and Traffic Control using eBPF</h3>
                <p><strong>Computer Networks, IITGN, 2023</strong></p>
                <div className="para">
                <p>
                I collaboratively researched and integrated <strong>eBPF-based solutions</strong> for network security. I constructed a simple firewall and implemented traffic control using <strong>eBPF</strong>, comparing its performance with tools like <strong>UFW</strong> and <strong>TC</strong>. Additionally, I evaluated the performance and efficiency of eBPF within custom network topologies in the <strong>Linux kernel</strong>.
                </p>
                </div>
            </div>

            <div >
                <h3>oCEO Activities Portal Management System</h3>
                <p><strong>Databases, IITGN, 2024</strong></p>
                <div className="para">
                <p>
                I engineered a comprehensive web application for managing oCEO activities, including user authentication, job applications, and approvals. I designed user interfaces and integrated a <strong>MySQL database</strong> with a <strong>Flask backend</strong>. Additionally, I collaborated with a team to deploy user authentication and routing.
                </p>
                </div>
            </div>

            <div >
                <h3>Movie Recommendation System Using EDA and Neural Networks</h3>
                <p><strong>Data Science, IITGN, 2024</strong></p>
                <div className="para">
                <p>
                I built a personalized movie recommendation system using data analysis and machine learning. I applied <strong>Exploratory Data Analysis (EDA)</strong> to identify patterns and select relevant features such as genre, runtime, and popularity. Additionally, I created neural networks capable of recommending movies in three different ways.
                </p>
                </div>
            </div>
            </div>
            
            <div className="pordiv">
            <h2>Positions of Responsibility</h2>
            <div >
                <h3>Secretary</h3>
                <p><strong>Abhinaya (Theatre and Dramatics Club), IITGN</strong> - May 2024 - Present</p>
                <div className="profile-image">
                <img src={require('../images/WhatsApp Image 2024-08-07 at 11.34.57 (2).jpeg')} alt="Profile" />
                </div>
                <div className="para">
                <p>
                I lead a team of 60+ members, delegating tasks and coordinating efforts to achieve our club goals. 
                I also handle the club's budget and allocate funds efficiently. 
                We connect with alumni networks, student clubs, and external organizations for collaborative events and also promote club events through social media and campus channels, enhancing participation.
                </p>
                </div>
            </div>

            <div >
                <h3>Student Guide</h3>
                <p><strong>IIT Gandhinagar</strong> - Aug 2023 - May 2024</p>
                <div className="profile-image">
                <img src={require('../images/WhatsApp Image 2024-08-10 at 12.40.35.jpeg')} alt="Profile" />
                </div>
                <div className="para">
                <p>
                I guided 10 first-year students, aiding their adaptation to IIT Gandhinagar. I also held regular meetings and extra sessions during crucial academic periods to support their progress. I promoted independence among my mentees while providing essential guidance to help them navigate their challenges effectively.
                </p>
                </div>
            </div>
            </div>
            
            {/* <div className="extradiv">
            <h2>Extracurricular Achievements</h2>
            <div >
                <h3>Mime Competition</h3>
                <ul>
                    <li><strong>Ranked 4th position</strong> in Mime Competition at Inter IIT Cultural Meet 5.0, 2023
                        <ul>
                            <li>The only team to be in the top 4 from IITGN.</li>
                            <li>Played the center role in a team of 9 members.</li>
                        </ul>
                    </li>
                    <li><strong>Ranked 2nd position</strong> in Mime at DAIICT Cultural Fest, 2023
                        <ul>
                            <li>Assumed the main role within a team comprising five backstage members and four actors.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div> */}
            
        <Footer></Footer>
        </div>
    );
}

export default Work;
