import React from "react";
import "./navigation.css";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth.js'

const Navigation = () => {
    const logout = event => {
      event.preventDefault();
      Auth.logout();
    };

    return (

        <header className="navigation">
        
          <Link to="/">
          <h1 className="nav-logo">
            Flower Power
          </h1>
          </Link>

        <nav className="nav-links">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className="nav-item" to="/galleryList">The Garden</Link>
              <Link className="nav-item" to="/login">Login</Link>
              <Link className="nav-item" to="/signup">Signup</Link>

            </>
          )}
        </nav>
          

        </header>

    )
}

export default Navigation