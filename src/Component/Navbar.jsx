import images1 from '../Assets/images1.jpg';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartButton from '../Context/CartButton';
import { SearchContext } from '../Context/SearchContext';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem('user');
  let user = null;

  if (token) {
    user = JSON.parse(token); // Assuming 'user' contains name, email, etc.
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== '/') {
      navigate('/home'); // redirect to home so filtering is visible
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // ✅ Clear login data
    navigate('/');        // 🔁 Redirect to login page
  };

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 mt-3">
        <Link className="navbar-brand d-flex align-items-center text-light" to="/home">
          <img
            src={images1}
            alt="Cinema"
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
          <span style={{ fontWeight: "bold", marginLeft: "10px" }}>RMM CINEMAS</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  flex-column flex-lg-row" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#abcde">Streaming</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#abcde">Showtimings</a>
            </li>
          </ul>

  <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-1 mt-lg-0 text-start">
   
           {/* Search Bar*/}
            <input
              type="text"
              placeholder="SearchText..."
              className="form-control form-control-sm w-auto ms-5 p-2 mb-0"
              value={searchTerm}
              onChange={handleSearchChange}
            />
           <CartButton />
            <button className="btn btn-success btn-outline-dark ms-3" onClick={handleLogout}>
              Logout
            </button>

            
          </div>
        </div>
         
      </nav>
    </>
  );
};

export default Navbar; 


