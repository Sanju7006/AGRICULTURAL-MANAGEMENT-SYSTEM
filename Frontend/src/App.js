import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import Product from './Components/Products';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Yojana from './Components/Yojana';
import Cart from './Components/Cart';
import SearchResults from './Components/SearchResults';
import OrderDetails from './Components/OrderDetails';
import Payment from './Components/Payment';
import CreditDebitCardPayment from './Components/CreditDebitCardPayment';
import Paymentsuccess from './Components/Paymentsuccess';


const App = () => {
  return (
    <Router>
      <div style={{ backgroundImage: 'url(/images/image5.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'lightblack' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/images/plant logo.jpg" alt="AgriManage Logo" style={{ height: '40px', marginRight: '10px' }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/product">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/yojna">Yojna</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div className="d-flex ms-3">
                <a className="btn btn-outline-primary me-2" href="/login">Sign In</a>
                <a className="btn btn-outline-danger" href="/logout">Sign Out</a>
              </div>
            </div>
          </div>
        </nav>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/yojna" element={<Yojana />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SearchResults" element={<SearchResults />} />
            <Route path="/OrderDetails" element={<OrderDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/CreditDebitCardPayment" element={<CreditDebitCardPayment />} />
            <Route path="/paymentsuceess" element={<Paymentsuccess />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;