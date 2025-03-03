import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Paymentsuccess = () => {
  const navigate = useNavigate();

  const handleGoToOrders = () => {
    navigate('/orderdetails'); // Navigate to the orders page or any other page you want
  };

  return (
    <div style={{ backgroundImage: 'url(/images/image4.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="mb-4">Payment Successful!</h1>
          <p className="lead">Your order has been placed successfully.</p>
          <button className="btn btn-primary mt-3" onClick={handleGoToOrders}>Go to My Orders</button>
        </div>
      </div>
    </div>
  );
}

export default Paymentsuccess;