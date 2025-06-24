import React from 'react';
import { CartProvider } from './Context/CartContext';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Home from './Component/Home';
import MovieDetail from './Component/MovieDetail';
import CartItems from './Context/CartItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SearchProvider} from './Context/SearchContext';
import ProtectedRoute from './Component/ProtectedRoute'
import Loginpage from './Component/Login/Loginpage';




function App() {
  return (
    <>
     <SearchProvider>
    <CartProvider>

<Routes>
        <Route path="/" element={<Loginpage />} /> 
        <Route path="/home" element={  <ProtectedRoute><Home /></ProtectedRoute>} /> 
       <Route path="/movie/:_id" element={ <ProtectedRoute><MovieDetail /></ProtectedRoute>} />
        <Route path ="/cart" element={   <ProtectedRoute><CartItems/></ProtectedRoute>}/>
        
</Routes>
<ToastContainer position="top-right" autoClose={2000} />


</CartProvider>
 </SearchProvider>
</>
  );
}

export default App;
