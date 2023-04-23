import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from '../pages/Features'
import Home from '../pages/Home'
import Navbar from './Navbar'
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Connection from '../pages/Connection';
import TradeForm from '../pages/tradeform';

const Myrouter = () => {
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features' element={<Features />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/tradeform' element={<TradeForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/connection' element={<Connection />} />
        </Routes>
    </BrowserRouter>
</div>
  )
}

export default Myrouter