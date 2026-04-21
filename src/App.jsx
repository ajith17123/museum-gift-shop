import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route,HashRouter} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import Order from './components/Order';
import Login from './components/Login';
import About from './components/About';

function App() {
     useEffect(
        () => {
          AOS.init ({
            duration: 1000,
            once: false,
          })
        } , []
     );
  return (
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/product" element={<Product/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
      )
}

export default App
