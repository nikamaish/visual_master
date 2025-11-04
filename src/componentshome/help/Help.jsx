import React from 'react';
import './help.css';

const Help = () => {
    return (
            <div className="help-section">
                <div className="help-inner">
                    <h2 className="help-heading">How We Help You</h2>

                    <div className="help">
                        <div className="help-box">
                            <h3 className="sub-heading">Accurate Insights</h3>
                            <p className="help-para">
                                We provide reliable stock data and AI-powered forecasts.
                            </p>
                            <a href="#" className="link">Learn More</a>
                        </div>

                        <div className="help-box">
                            <h3 className="sub-heading">Visual Analytics</h3>
                            <p className="help-para">
                                Interactive graphs help you understand trends quickly.
                            </p>
                            <a href="#" className="link">Explore</a>
                        </div>

                        <div className="help-box">
                            <h3 className="sub-heading">Smart Tools</h3>
                            <p className="help-para">
                                Use AI-powered tools to enhance your market decisions.
                            </p>
                            <a href="#" className="link">Try Now</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Help;
