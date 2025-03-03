

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // const ProductList = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     console.log('Fetching products...');
// //     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
// //     fetch('http://localhost:4444/user/product', {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `${token}`
// //       }
// //     })
// //       .then(response => {
// //         console.log('Received response:', response);
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         console.log('Received data:', data.data);
// //         setProducts(data.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.log('Error fetching data:', error);
// //         setError(error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   const handleAddToCart = (product) => {
// //     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
// //     const userId = 1; // Replace with actual user_id
// //     fetch('http://localhost:4444/user/place-order', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `${token}`
// //       },
// //       body: JSON.stringify({ userId, productId: product.product_id }) // Replace with actual user_id
// //     })
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         console.log('Product added to cart:', data);
// //         // Redirect to cart page with selected product details
// //         navigate('/cart', { state: { selectedProduct: product } });
// //       })
// //       .catch(error => {
// //         console.error('Error adding product to cart:', error);
// //       });
// //   };

// //   const handleBuyNow = (product) => {
// //     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
// //     const userId = 1; // Replace with actual user_id
// //     const orderDetails = {
// //       userId,
// //       total_amount: product.price,
// //       order_status: 'Pending',
// //       created_at: new Date().toISOString()
// //     };

// //     fetch('http://localhost:4444/user/place-orderitems', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `${token}`
// //       },
// //       body: JSON.stringify(orderDetails)
// //     })
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         console.log('Order placed:', data);
// //         const orderId = data.order_id; // Assuming the response contains the order_id

// //         // Place order items
// //         const orderItems = {
// //           orderId,
// //           productId: product.product_id,
// //           quantity: 1, // Assuming a quantity of 1 for simplicity
// //           price: product.price
// //         };

// //         fetch('http://localhost:4444/user/place-orderitems', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': `${token}`
// //           },
// //           body: JSON.stringify(orderItems)
// //         })
// //           .then(response => {
// //             if (!response.ok) {
// //               throw new Error('Network response was not ok');
// //             }
// //             return response.json();
// //           })
// //           .then(data => {
// //             console.log('Order items placed:', data.data);
// //             // Redirect to order details page with selected product details
// //             navigate('/OrderDetails', { state: { orderDetails: [orderDetails] } });
// //           })
// //           .catch(error => {
// //             console.error('Error placing order items:', error);
// //           });
// //       })
// //       .catch(error => {
// //         console.error('Error placing order:', error);
// //       });
// //   };

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error) {
// //     return <p>Error: {error.message}</p>;
// //   }

// //   return (
// //     <div style={{ backgroundImage: 'url(/images/image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', marginTop: '10px' }}>
// //       <div className="container mt-5">
// //         <h1 className="text-center mb-4" style={{ color: 'white' }}>Product List</h1>
// //         <div className="row">
// //           {products.map(product => (
// //             <div className="col-md-4 mb-4" key={product.product_id}>
// //               <div className="card h-100">
// //                 <img src={"http://localhost:3000/images/demo.png"} className="card-img-top" alt={product.name} />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{product.name}</h5>
// //                   <p className="card-text">Description: {product.description}</p>
// //                   <p className="card-text">Price: ₹{product.price}</p>
// //                   <p className="card-text">Stock: {product.stock}</p>
// //                   <p className="card-text">Created At: {new Date(product.created_at).toLocaleDateString()}</p>
// //                   <div className="d-flex justify-content-between">
// //                     <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
// //                     <button className="btn btn-success" onClick={() => handleBuyNow(product)}>Buy</button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductList;


// // filepath: /C:/Users/Sakshi Joshi/OneDrive/Desktop/React/pro/Agricultural_Management_System/React FrontEnd/frontend/src/Components/Products.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('Fetching products...');
//     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
//     fetch('http://localhost:4444/user/product', {
//       method: 'GET',
//       headers: {
//         'Authorization': `${token}`
//       }
//     })
//       .then(response => {
//         console.log('Received response:', response);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Received data:', data.data);
//         setProducts(data.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.log('Error fetching data:', error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
//     const userId = 1; // Replace with actual user_id
//     fetch('http://localhost:4444/user/place-order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `${token}`
//       },
//       body: JSON.stringify({ userId, productId: product.product_id }) // Replace with actual user_id
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Product added to cart:', data);
//         // Redirect to cart page with selected product details
//         navigate('/cart', { state: { selectedProduct: product } });
//       })
//       .catch(error => {
//         console.error('Error adding product to cart:', error);
//       });
//   };

//   const handleBuyNow = (product) => {
//     const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
//     const userId = 1; // Replace with actual user_id
//     const orderDetails = {
//       userId,
//       total_amount: product.price,
//       order_status: 'Pending',
//       created_at: new Date().toISOString()
//     };

//     fetch('http://localhost:4444/user/place-orderdetails', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `${token}`
//       },
//       body: JSON.stringify(orderDetails)
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Order placed:', data);
//         const orderId = data.order_id; // Assuming the response contains the order_id

//         // Redirect to order details page with selected product details
//         navigate('/OrderDetails', { state: { orderDetails: { ...orderDetails, orderId } } });
//       })
//       .catch(error => {
//         console.error('Error placing order:', error);
//       });
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div style={{ backgroundImage: 'url(/images/image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', marginTop: '10px' }}>
//       <div className="container mt-5">
//         <h1 className="text-center mb-4" style={{ color: 'white' }}>Product List</h1>
//         <div className="row">
//           {products.map(product => (
//             <div className="col-md-4 mb-4" key={product.product_id}>
//               <div className="card h-100">
//                 <img src={"http://localhost:3000/images/demo.png"} className="card-img-top" alt={product.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">Description: {product.description}</p>
//                   <p className="card-text">Price: ₹{product.price}</p>
//                   <p className="card-text">Stock: {product.stock}</p>
//                   <p className="card-text">Created At: {new Date(product.created_at).toLocaleDateString()}</p>
//                   <div className="d-flex justify-content-between">
//                     <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                     <button className="btn btn-success" onClick={() => handleBuyNow(product)}>Buy</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

// filepath: /C:/Users/Sakshi Joshi/OneDrive/Desktop/React/pro/Agricultural_Management_System/React FrontEnd/frontend/src/Components/Products.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Fetching products...');
    const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
    fetch('http://localhost:4444/user/product', {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
      .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data.data);
        
        setProducts(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
    const userId = 1; // Replace with actual user_id
    fetch('http://localhost:4444/user/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ userId, productId: product.product_id }) // Replace with actual user_id
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product added to cart:', data);
        // Redirect to cart page with selected product details
        navigate('/cart', { state: { selectedProduct: product } });
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  const handleBuyNow = (product) => {
    const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
    const userId = 3; // Replace with actual user_id
    const orderDetails = {
        userId,
        total_amount: product.price,
        order_status: 'Pending',
        created_at: '2025-02-11T10:35:00+05:30'
    };

    console.log('Order Details:', orderDetails); // Log order details for debugging
debugger;
    fetch('http://localhost:4444/user/place-orderdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderDetails)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Order placed:', data);
        const orderId = data.order_id; // Assuming the response contains the order_id
        // Redirect to order details page with selected product details
        navigate('/OrderDetails');
    })
    .catch(error => {
        console.error('Error placing order:', error);
    });
};



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ backgroundImage: 'url(/images/image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', marginTop: '10px' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ color: 'white' }}>Product List</h1>
        <div className="row">
          {products.map(product => (
            
            <div className="col-md-4 mb-4" key={product.product_id}>
              <div className="card h-100">
                <img width={150} height={150} src={`http://localhost:4444/image/${product.image}`} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Description: {product.description}</p>
                  <p className="card-text">Price: ₹{product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <p className="card-text">Created At: {new Date(product.created_at).toLocaleDateString()}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <button className="btn btn-success" onClick={() => handleBuyNow(product)}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;