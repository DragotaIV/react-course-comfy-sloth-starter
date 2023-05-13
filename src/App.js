import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage, AboutPage, PrivateRoute, SingleProductPage, ProductsPage, ErrorPage, CartPage, CheckoutPage } from './pages';
import { Navbar, Sidebar, Footer } from './components';
import styled from 'styled-components';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='products' element={<ProductsPage />} />
        <Route path='products/:id' element={<SingleProductPage />} />

        <Route path='cart' element={<CartPage />} />
        <Route path='checkout' element={<PrivateRoute><CheckoutPage/></PrivateRoute>} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
