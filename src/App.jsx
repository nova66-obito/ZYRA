import React from 'react';
import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Nav from './components/navbar/nav';
import Footer from "./components/footer/Footer";
import ShowCase from './pages/showcase';
import Login from './components/login/login';
import Signin from './components/signin/signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <>
      <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='onshop' element={<ShowCase/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path="/signup" element={<Signin/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
