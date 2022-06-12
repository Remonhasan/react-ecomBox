import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Frontend/Pages/Login';
import Register from './Frontend/Pages/Register';
import AddProduct from './Backend/Pages/Product/AddProduct';
import UpdateProduct from './Backend/Pages/Product/UpdateProduct';
import Protected from './Protected';

export const Main = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected PassComponent={AddProduct} />} />
          <Route path="/update" element={<Protected PassComponent={UpdateProduct} />} />
        </Routes>
      </Router>
    </div>
  )
}
