
import images1 from '../Assets/images1.jpg';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartButton from '../Context/CartButton';
import { SearchContext } from '../Context/SearchContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const token = localStorage.getItem('user');
  let user = null;

  if (token) {
   user = JSON.parse(token); // For manual login

    // user.name, user.email, etc.
  }
  { user ? <span>Welcome, {user.name}</span> : <Link to="/">Login</Link> }


  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (location.pathname !== '/') {
      navigate('/home'); // redirect to home so filtering is visible
    }
  };
  const isLoggedIn = localStorage.getItem('user');

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

        {/* Toggler Button */}
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

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-5">
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


          <div className="ms-auto d-flex align-items-center gap-3">

            {/* Search Bar */}
            <input
              type="text"
              placeholder='SearchText...'
              className="form-control form-control-sm w-auto ms-5 p-2  mb-0"
              value={searchTerm}
              onChange={handleSearchChange}
            />

          </div>

          <CartButton />
          <button className="btn btn-success btn-outline-dark ms-3" onClick={handleLogout}>
            Logout</button>
</div>

      </nav>
    </>
  );
};



export default Navbar;
