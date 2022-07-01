import React from 'react';
import Login from "./Components/Login";
import AddCategory from './Components/AddCategory';
import Categorylist from './Components/CategoryList';
import EditCategory from './Components/EditCategory';
import Navbar from './Components/navbar';
import Logout from './Components/logout';  
import Register from './Components/Register';
import Profile from './Components/Profile';
import { BrowserRouter, Switch,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className="App">
      <h2>Store Room</h2>
    <BrowserRouter>
      <Navbar />
         <br />
        <Routes>
          <Route exact path='/Register' element={<Register/>} ></Route>
          <Route exact path='/profile' element={<Profile/>} ></Route>
          <Route exact path='/Logout' element={<Logout/>} ></Route>
          <Route exact path='/Login' element={<Login/>} ></Route>
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
