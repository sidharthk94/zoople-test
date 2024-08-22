import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RiMore2Line } from "react-icons/ri";
import NavMore from "../navMore/NavMore";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="navbar">
      <h3 style={{color:"blue"}}>EKart</h3>

      <div className="search_bar">
        <HiOutlineMagnifyingGlass className="search_icon" />
        <input
          type="search"
          placeholder="Search for Product,Brands and More"
          className="search_box"
        />
      </div>

      <NavLink to="/" className="navLink">
        <div className="homee">
          <span>Home</span>
        </div>
      </NavLink>

      <NavLink to="products" className="navLink">
        <div className="prodd">
          <span>Products</span>
        </div>
      </NavLink>

      <div className="login">
        <span>Login</span>
      </div>

      <div
        className="nav_more"
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}
      >
        <div className="nav_more_">
          <RiMore2Line className="nav_more_icon" />
        </div>
        {showMore ? (
          <div className="nav_more_options">
            <NavMore />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
