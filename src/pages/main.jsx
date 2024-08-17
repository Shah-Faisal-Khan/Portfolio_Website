import React, { useState } from "react";
import { Link } from 'react-router-dom';
import TopClip from "./topclip";
import Sidepanel from "./sidepanel";
import Myself from "./myself";
import SkillsSection from "./skills";
import AboutSection from "./aboutsection";
import Footer from "./footer";
import ClickBox from "./contactbox";

const Main = () => {
    const [showContactBox, setShowContactBox] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleContactBox = () => {
        setShowContactBox(!showContactBox);
    };

    return (
        <div className="maindiv">
            <div className="bgimg"><img src={require('../images/bg3.png')} alt="" /></div>
            <TopClip onClick={scrollToTop} />
            <div className="navbar">
                <h4 onClick={scrollToTop}>Home</h4>
                <h4 onClick={() => scrollToSection('about')}>About</h4>
                <Link to="/work" style={{ textDecoration: 'none', color: 'inherit' }}><h4>Work</h4></Link>
                <h4 onClick={() => scrollToSection('skills')}>Skills</h4>
                <h4>Achievements</h4>
                <h4 onClick={toggleContactBox}>Contact</h4> {/* Clickable Contact section */}
            </div>
            <div className="mainbox">
                <Myself />
                <Sidepanel />
            </div>
            <AboutSection id="about" /> {/* Add id */}
            <SkillsSection id="skills" /> {/* Add id */}
            <Footer />

            {/* Render the card when showContactBox is true */}
            {showContactBox && (
                <ClickBox onClose={toggleContactBox} />
            )}
        </div>
    );
}

export default Main;
