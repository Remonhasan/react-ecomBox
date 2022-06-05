import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Backend/Pages/Layout/Header';
import Login from './Frontend/Pages/Login';
import Register from './Frontend/Pages/Register';
import AddProduct from './Backend/Pages/Product/AddProduct';
import UpdateProduct from './Backend/Pages/Product/UpdateProduct';

export const Main = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  )
}
