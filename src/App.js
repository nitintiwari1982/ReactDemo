import React, { useEffect } from 'react';
import Login from "./Components/Users/Login";
import AddCategory from './Components/Category/AddCategory';
import Categorylist from './Components/Category/CategoryList';
import EditCategory from './Components/Category/EditCategory';
//import Navbar from './Components/navbar';
import Logout from './Components/Users/logout';  
import Register from './Components/Users/Register';
import Profile from './Components/Users/Profile';
import { BrowserRouter, Switch,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from './Components/ErrorPage';
import {NavLink } from 'react-router-dom';
import './CSS/navbar.css';
import LoginService from "./services/LoginService";


var user=null;

function App() {

  return (
    <div className="App">
      <h2>Store Room</h2>
    <BrowserRouter>
      {/* <Navbar /> */}
      <nav className="navigation">
           <div >
             <NavLink to={"/AddCategory"} className="brand-name">Add Candidate</NavLink>
             <NavLink to={"/Categorylist"} className="brand-name">Candidate List</NavLink>
        </div>

        <div className="navigation-menu">
        {user == null && (
         <NavLink to={"/Login"}  className="brand-name">Login</NavLink>
        )}
         {user != null && (
          <NavLink to={"/Profile"} className="brand-name">Profile</NavLink>
         )}
         <NavLink to={"/Logout"} className="brand-name">Logout</NavLink>
         <NavLink to={"/Register"} className="brand-name">Register</NavLink>
         </div>
      </nav>

         <br />
        <Routes>
          <Route exact path='/Register' element={<Register/>} ></Route>
          <Route exact path='/profile' element={<Profile/>} ></Route>
          <Route exact path='/Logout' element={<Logout/>} ></Route>
          <Route exact path='/Login'  element={<Login/>} ></Route>
          <Route exact path='/AddCategory' element={<AddCategory/>} ></Route>
          <Route  path='/EditCategory/:catid' element={<EditCategory />}></Route>
          <Route path='/Categorylist' element={<Categorylist/>} ></Route>
          <Route path="*" element={<ErrorPage/>} ></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
