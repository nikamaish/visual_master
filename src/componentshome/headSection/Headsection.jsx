import React, { useState } from 'react';
import './headsection.css';

const HeadSection = () => {
return (
    <section className="intro">
      <div className="intro-content">
        <h1 className="intro-title">
          Welcome to <span>VisualMaster</span>
        </h1>
        <p className="intro-subtitle">
          A modern platform to explore the world of finance with clarity and confidence.
        </p>
        <button className="intro-button">Get Started</button>
      </div>
    </section>
    )
};

export default HeadSection;

