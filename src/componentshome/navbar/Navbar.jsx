// Navbar.js
import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the sign out icon
import { useAuth } from '../../AuthContext';
import Ai from '../../ai/AI'

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-logo" to="/"><img src="./icons/logo.jpeg"  style={{width:'100px', height:'auto'}} alt="img" /></Link>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CryptoOneDay">Dashboard</Link>
            </li>
    
            <li>
              {/* <Link to="/ai">Chankya AI</Link> */}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {user ? (
              <li>
                 <Link to="/signout">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/signup">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
