import React from 'react';
import styles from './ContactBox.module.scss'; // Import the styles

function ClickBox({ onClose }) {
    return (
        <div className={styles.contactbox}> {/* Apply the styles */}
            <div>
                <h3>Contact Information</h3>
                <p>Email: shahpathan@iitgn.ac.in</p>
                <p>Alternate Email: salahuddin.khan9952@gmail.com</p>
                <p>Phone: +91 9890838681</p>
                <p>Resume: <a href="">Shah Faisal Khan</a></p>
            </div>

            <button onClick={onClose}>
                &times;
            </button>
        </div>
    );
}

export default ClickBox;
