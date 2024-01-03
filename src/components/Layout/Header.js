import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";


const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.toggle('dark');
  };

  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container py-2">
            <Link style={{ color: "#000 !important", fontSize: "17px"}} className="navbar-brand" to="/">Ever <span style={{color:"green"}}>Green</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* means */}
            <div className="collapse navbar-collapse align-middle" id="navbarNav">
                <ul className="navbar-nav ms-auto nav_ul align-items-center">
                   <li className="nav-item">
                       <NavLink to="/" className="nav-link "> Home</NavLink>
                   </li>
                   <li className="nav-item">
                       <NavLink to="/contact" className="nav-link "> Contact Us</NavLink>
                   </li>
                   <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="btn2">
                    Sign Up
                    </NavLink>
                  </li>
                  <li  className="nav-item text-light">
                    <NavLink to="/login"  className="btn1">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )} 
              <li  className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge   style={{backgroundColor:"green"}} count={cart?.length} showZero offset={[10, -5]}>
                  <i style={{color:'green'}} className="fa-solid fa-cart-shopping fa-bounce fa-xl"></i>
                  </Badge>
                </NavLink>
              </li>
              {darkTheme ? (
            <div style={{marginLeft:'30px'}}
              className="theme-light hidden"
              onClick={handleTheme}
              onKeyDown={handleTheme}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-moon" />
            </div>
          ) : (
            <div style={{marginLeft:'30px'}}
              className="theme-dark"
              onClick={handleTheme}
              onKeyDown={handleTheme}
              role="button"
              tabIndex={0}
            >
              <i className="fa-solid fa-sun" />
            </div>
          )}
                </ul>
            </div> <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </div>
    </nav>
</>
   
  );
};

export default Header;


