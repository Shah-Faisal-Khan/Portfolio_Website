import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <div className="footer-section-links">
          <h3>Quick Links</h3>
            <h5>
                <a href="">Website Home</a>
            </h5>
            <h5>
                <a href="">My Resume</a>
            </h5>
        </div>
        <div className="footer-section-social">
          <h3>Connect</h3>
            <h5>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
            </h5>
            <h5>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">LinkedIn</a>
            </h5>
            <h5>
                <a href="https://www.instagram.com/your-instagram-handle/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </h5>
        </div>
        <div className="footer-section-contact">
          <h3>Contact</h3>
          <p>shahpathan@iitgn.ac.in</p>
          <p>salahuddin.khan9952@gmail.com</p>
          <p>+91 9890838681</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shah Faisal Khan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
