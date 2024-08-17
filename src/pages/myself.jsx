import React from "react";
import {TypeAnimation} from 'react-type-animation';

const Myself = () => {
    return (
        <div className="introBox">
          <div className="imgbox">
            <img src={require('../images/profileimg.jpeg')} alt="" />
          </div>
          <div className="profiletext">
          <TypeAnimation className="h2"
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hi, I am',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
            cursor={false}
            />
            <TypeAnimation className="h1"
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Innovative Developer',
                800,
                'Enthusiastic Engineer',
                800,
                'Creative Problem Solver',
                800,
                'Shah Faisal Khan ',
                1000,
                 // wait 1s before replacing "Mice" with "Hamsters"
                
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
            // cursor={false}
            />
            <TypeAnimation className="h3"
            sequence={[
                // Same substring at the start will only be typed out once, initially
                11000,
                "I am a passionate Computer Science and Engineering student at IIT Gandhinagar with a knack for developing impactful solutions. Let's create something amazing together!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
            cursor={false}
            />
          </div>
        </div>
      );
};

export default Myself;
