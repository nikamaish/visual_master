import React, { useState } from 'react';
import './headsection.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeadSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>

   <div className="Lower_Section">
         <ul>Dynamic Data</ul>

       <ul className='vertical-line'>Easy Understandings</ul>

      <ul>Insights of Data</ul>
       </div>
    </div>
    
  );
};

export default HeadSection;

