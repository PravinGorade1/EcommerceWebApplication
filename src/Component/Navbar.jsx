import React from 'react';
import { logouts } from '../API/Auth';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert('No user logged in.');
      return;
    }

    try {
      const response = await logouts(userId);
      alert(response.data);
      localStorage.removeItem('userId');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#274472' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Ecom Store</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
      🏠︎
     </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger nav-link text-white" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
