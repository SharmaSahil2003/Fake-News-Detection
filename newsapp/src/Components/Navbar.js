import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">RealityTimes</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/product" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/news" className="nav-item nav-link">
              News
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          {user ? (
            <div className="d-flex align-items-center">
              <Link to="/" className="btn btn-secondary me-2">
                <i className="fas fa-user"></i>
              </Link>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signup" className="btn btn-primary py-2 px-4">
              Login/Signup
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
