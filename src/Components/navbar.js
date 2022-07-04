import React from 'react';
import {NavLink } from 'react-router-dom';
import '../CSS/navbar.css';
import LoginService from "../services/LoginService";

var user = LoginService.getUserProfile();

export default function Navbar() {
    return (
      // <nav className="navigation">
      //      <div >
      //        <NavLink to={"/AddCategory"} className="brand-name">Add Candidate</NavLink>
      //        <NavLink to={"/Categorylist"} className="brand-name">Candidate List</NavLink>
      //   </div>

      //   <div className="navigation-menu">
      //   {user == null && (
      //    <NavLink to={"/Login"} className="brand-name">Login</NavLink>
      //   )}
      //    {user != null && (
      //     <NavLink to={"/Profile"} className="brand-name">Profile</NavLink>
      //    )}
      //    <NavLink to={"/Logout"} className="brand-name">Logout</NavLink>
      //    <NavLink to={"/Register"} className="brand-name">Register</NavLink>
      //    </div>

      // </nav>
      <div></div>
    );
  }
