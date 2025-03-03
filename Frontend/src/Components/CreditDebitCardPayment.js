import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CreditDebitCardPayment = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    console.log(`Processing credit/debit card payment for order ID: ${orderId}`);
    console.log(`Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Credit/Debit Card Payment for Order ID: {orderId}</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="text"
                  className="form-control"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  className="form-control"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              <button className="btn btn-success mt-3" onClick={handlePayment}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditDebitCardPayment;