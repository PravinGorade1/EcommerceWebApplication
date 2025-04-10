import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Component/Footer';
import Admin from './Component/Admin';
import SellerDashboard from './Component/SellerDashboard';
import BuyerDashboard from './Component/BuyerDashboard';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Buyer" element={<BuyerDashboard />} />
      <Route path="/Seller" element={<SellerDashboard />} />
    </Routes>
    <Footer/>
  </Router>
);

export default App;
