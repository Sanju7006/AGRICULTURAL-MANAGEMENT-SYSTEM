// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const orderId = new URLSearchParams(location.search).get('orderId');
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

//   const handlePayment = () => {
//     // Implement payment logic here
//     console.log(`Processing payment for order ID: ${orderId} using ${selectedPaymentMethod}`);
    
//     // Redirect to a payment gateway or display a form based on the selected payment method
//     switch (selectedPaymentMethod) {
//       case 'Credit/Debit Card':
//         navigate(`/payment/credit-debit-card?orderId=${orderId}`);
//         break;
//       case 'UPI':
//         navigate(`/payment/upi?orderId=${orderId}`);
//         break;
//       case 'Net Banking':
//         navigate(`/payment/net-banking?orderId=${orderId}`);
//         break;
//       case 'Wallet':
//         navigate(`/payment/wallet?orderId=${orderId}`);
//         break;
//       default:
//         console.error('Unknown payment method');
//     }
//   };

//   return (
//     <div style={{ backgroundImage: 'url(/images/payment.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
//       <div className="container mt-5">
//         <h1 className="text-center mb-4">Payment for Order ID: {orderId}</h1>
//         <div className="row">
//           <div className="col-md-6 mb-4">
//             <div className="card h-100" onClick={() => setSelectedPaymentMethod('Credit/Debit Card')}>
//               <div className="card-body">
//                 <h5 className="card-title">Credit/Debit Card</h5>
//                 <p className="card-text">Pay using your credit or debit card.</p>
//                 <img src="/images/credit-card.png" alt="Credit/Debit Card" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 mb-4">
//             <div className="card h-100" onClick={() => setSelectedPaymentMethod('UPI')}>
//               <div className="card-body">
//                 <h5 className="card-title">UPI</h5>
//                 <p className="card-text">Pay using UPI (Unified Payments Interface).</p>
//                 <img src="/images/upi.png" alt="UPI" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 mb-4">
//             <div className="card h-100" onClick={() => setSelectedPaymentMethod('Net Banking')}>
//               <div className="card-body">
//                 <h5 className="card-title">Net Banking</h5>
//                 <p className="card-text">Pay using net banking.</p>
//                 <img src="/images/net-banking.png" alt="Net Banking" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 mb-4">
//             <div className="card h-100" onClick={() => setSelectedPaymentMethod('Wallet')}>
//               <div className="card-body">
//                 <h5 className="card-title">Wallet</h5>
//                 <p className="card-text">Pay using your wallet balance.</p>
//                 <img src="/images/wallet.png" alt="Wallet" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {selectedPaymentMethod && (
//           <div className="text-center mt-4">
//             <h4>Selected Payment Method: {selectedPaymentMethod}</h4>
//             <button className="btn btn-success mt-3" onClick={handlePayment}>Proceed to Payment</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Payment;
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = new URLSearchParams(location.search).get('orderId');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    console.log(`Processing payment for order ID: ${orderId} using ${selectedPaymentMethod}`);
    
    // Simulate successful payment
    setTimeout(() => {
      navigate('/paymentsuceess');
    }, 1000); // Simulate a delay for the payment process
  };

  return (
    <div style={{ backgroundImage: 'url(/images/payment.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Payment for Order ID: {orderId}</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100" onClick={() => setSelectedPaymentMethod('Credit/Debit Card')}>
              <div className="card-body">
                <h5 className="card-title">Credit/Debit Card</h5>
                <p className="card-text">Pay using your credit or debit card.</p>
                <img src="/images/credit-card.png" alt="Credit/Debit Card" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100" onClick={() => setSelectedPaymentMethod('UPI')}>
              <div className="card-body">
                <h5 className="card-title">UPI</h5>
                <p className="card-text">Pay using UPI (Unified Payments Interface).</p>
                <img src="/images/upi.png" alt="UPI" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100" onClick={() => setSelectedPaymentMethod('Net Banking')}>
              <div className="card-body">
                <h5 className="card-title">Net Banking</h5>
                <p className="card-text">Pay using net banking.</p>
                <img src="/images/net-banking.png" alt="Net Banking" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100" onClick={() => setSelectedPaymentMethod('Wallet')}>
              <div className="card-body">
                <h5 className="card-title">Wallet</h5>
                <p className="card-text">Pay using your wallet balance.</p>
                <img src="/images/wallet.png" alt="Wallet" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {selectedPaymentMethod && (
          <div className="text-center mt-4">
            <h4>Selected Payment Method: {selectedPaymentMethod}</h4>
            <button className="btn btn-success mt-3" onClick={handlePayment}>Proceed to Payment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;