import React, { useState } from 'react';
import './Slider2.css'; 

const CoursesComponent = () => {
  const [isSocialPanelVisible, setSocialPanelVisibility] = useState(false);

  const toggleSocialPanel = () => {
    setSocialPanelVisibility(!isSocialPanelVisible);
  };

  const closeSocialPanel = () => {
    setSocialPanelVisibility(false);
  };

  return (
    <div>
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>Course</h6>
            <h2>JavaScript Fundamentals</h2>
            <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">6/9 Challenges</span>
            </div>
            <h6>Chapter 4</h6>
            <h2>Callbacks & Closures</h2>
            <button className="btn">Continue</button>
          </div>
        </div>
      </div>

      {/* SOCIAL PANEL */}
      <div className={`social-panel-container ${isSocialPanelVisible ? 'visible' : ''}`}>
        <div className="social-panel">
          <p>
            Created with <i className="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
          </p>
          <button className="close-btn" onClick={closeSocialPanel}><i className="fas fa-times"></i></button>
          <h4>Get in touch on</h4>
          <ul>
            <li><a href="https://www.patreon.com/florinpop17" target="_blank"><i className="fab fa-discord"></i></a></li>
            <li><a href="https://twitter.com/florinpop1705" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/in/florinpop17" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://facebook.com/florinpop17" target="_blank"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://instagram.com/florinpop17" target="_blank"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default CoursesComponent;
