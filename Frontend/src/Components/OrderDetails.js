// // // import React, { useEffect, useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // const OrderDetails = () => {
// // //   const [orderDetails, setOrderDetails] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     console.log('Fetching order details...');
// // //     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
// // //     fetch('http://localhost:4444/user/place-orderdetails', {
// // //       method: 'GET',
// // //       headers: {
// // //         'Authorization': `${token}`
// // //       }
// // //     })
// // //       .then(response => {
// // //         console.log('Received response:', response);
// // //         if (!response.ok) {
// // //           throw new Error('Network response was not ok');
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => {
// // //         console.log('Received data:', data.data);
// // //         setOrderDetails(data.data);
// // //         setLoading(false);
// // //       })
// // //       .catch(error => {
// // //         console.log('Error fetching data:', error);
// // //         setError(error);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   const handlePayment = (orderId) => {
// // //     // Redirect to payment page or trigger payment process
// // //     navigate(`/payment?orderId=${orderId}`);
// // //   };

// // //   if (loading) {
// // //     return <p>Loading...</p>;
// // //   }

// // //   if (error) {
// // //     return <p>Error: {error.message}</p>;
// // //   }

// // //   return (
// // //     <div style={{ backgroundImage: 'url(/images/orderdetailsavif.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
// // //     <div className="container mt-5">
// // //       <h1 className="text-center mb-4">Order Details</h1>
// // //       <div className="row">
// // //         {orderDetails.map(order => (
// // //           <div className="col-md-4 mb-4" key={order.order_id}>
// // //             <div className="card h-100">
// // //               <div className="card-body">
// // //                 <p className="card-text">Total Amount: ₹{order.total_amount}</p>
// // //                 <p className="card-text">Order Status: {order.order_status}</p>
// // //                 <p className="card-text">Created At: {new Date(order.created_at).toLocaleDateString()}</p>
// // //                 <button className="btn btn-primary mt-3" onClick={() => handlePayment(order.order_id)}>Make Payment</button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //     </div>
// // //   );
// // // }

// // // export default OrderDetails;

// // import React, { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';

// // const OrderDetails = () => {
// //   const [orderDetails, setOrderDetails] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const location = useLocation();
// //   const orderDetailsFromState = location.state?.orderDetails;

// //   useEffect(() => {
// //     if (orderDetailsFromState) {
// //       setOrderDetails(orderDetailsFromState);
// //       setLoading(false);
// //     } else {
// //       console.log('Fetching order details...');
// //       const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
// //       fetch('http://localhost:4444/user/place-orderdetails', {
// //         method: 'GET',
// //         headers: {
// //           'Authorization': `${token}`
// //         }
// //       })
// //         .then(response => {
// //           if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //           }
// //           return response.json();
// //         })
// //         .then(data => {
// //           setOrderDetails(data.data);
// //           setLoading(false);
// //         })
// //         .catch(error => {
// //           console.error('Error fetching data:', error);
// //           setError(error);
// //           setLoading(false);
// //         });
// //     }
// //   }, [orderDetailsFromState]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error) {
// //     return <p>Error: {error.message}</p>;
// //   }

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Order Details</h1>
// //       <div className="row">
// //         {orderDetails.map(order => (
// //           <div className="col-md-4 mb-4" key={order.order_id}>
// //             <div className="card h-100">
// //               <div className="card-body">
// //                 <p className="card-text">Total Amount: ₹{order.total_amount}</p>
// //                 <p className="card-text">Order Status: {order.order_status}</p>
// //                 <p className="card-text">Created At: {new Date(order.created_at).toLocaleDateString()}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default OrderDetails;

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const OrderDetails = () => {
//   const [orderDetails, setOrderDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const orderDetailsFromState = location.state?.orderDetails;

//   useEffect(() => {
//     if (orderDetailsFromState) {
//       setOrderDetails(orderDetailsFromState);
//       setLoading(false);
//     } else {
//       console.log('Fetching order details...');
//       const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
//       fetch('http://localhost:4444/user/place-orderdetails', {
//         method: 'GET',
//         headers: {
//           'Authorization': `${token}`
//         }
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           setOrderDetails(data.data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setError(error);
//           setLoading(false);
//         });
//     }
//   }, [orderDetailsFromState]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div style={{ backgroundImage: 'url(/images/orderdetailsavif.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
//       <div className="container mt-5">
//         <h1 className="text-center mb-4">Order Details</h1>
//         <div className="row">
//           {orderDetails.map(order => (
//             <div className="col-md-4 mb-4" key={order.order_id}>
//               <div className="card h-100">
//                 <div className="card-body">
//                   <p className="card-text">Total Amount: ₹{order.total_amount}</p>
//                   <p className="card-text">Order Status: {order.order_status}</p>
//                   <p className="card-text">Created At: {new Date(order.created_at).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetailsFromState = location.state?.orderDetails;

  useEffect(() => {
    if (orderDetailsFromState) {
      setOrderDetails(orderDetailsFromState);
      setLoading(false);
    } else {
      console.log('Fetching order details...');
      const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
      fetch('http://localhost:4444/user/place-orderdetails', {
        method: 'GET',
        headers: {
          'Authorization': `${token}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setOrderDetails(data.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [orderDetailsFromState]);

  const handleRemoveOrder = (order_id) => {
    const token = sessionStorage.getItem('token');
    console.log(`Removing order with order_id: ${order_id}`);
    fetch(`http://localhost:4444/user/order/${order_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Order with order_id: ${order_id} removed successfully`);
        // Remove the order from the state
        setOrderDetails(orderDetails.filter(order => order.order_id !== order_id));
      })
      .catch(error => {
        console.error('Error removing order:', error);
      });
  };

  const handlePayment = (order_id) => {
    // Redirect to payment page or trigger payment process
    navigate(`/payment?orderId=${order_id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ backgroundImage: 'url(/images/orderdetailsavif.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Order Details</h1>
        <div className="row">
          {orderDetails.map(order => (
            <div className="col-md-4 mb-4" key={order.order_id}>
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">Total Amount: ₹{order.total_amount}</p>
                  <p className="card-text">Order Status: {order.order_status}</p>
                  <p className="card-text">Created At: {new Date(order.created_at).toLocaleDateString()}</p>
                  <button className="btn btn-danger mt-3" onClick={() => handleRemoveOrder(order.order_id)}>Remove</button>
                  <button className="btn btn-primary mt-3" onClick={() => handlePayment(order.order_id)}>Make Payment</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;