// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// // const Cart = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     console.log('Fetching cart items...');
// //     const token = sessionStorage.getItem('token');
// //     fetch('http://localhost:4444/user/cart', {
// //       method: 'GET',
// //       headers: {
// //         'Authorization': `${token}`
// //       }
// //     }) // Ensure the API endpoint is correct
// //       .then(response => {
// //         console.log('Received response:', response);
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         console.log('Received data:', data);
// //         setCartItems(data.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //         setError(error);
// //         setLoading(false);
// //       });

// //     // Check if there's a selected product passed from the Products page
// //     if (location.state && location.state.selectedProduct) {
// //       setSelectedProduct(location.state.selectedProduct);
// //     }
// //   }, [location.state]);

// //   const handleRemoveItem = (cart_id) => {
// //     const token = sessionStorage.getItem('token');
// //     fetch(`http://localhost:4444/user/cart/${cart_id}`, {
// //       method: 'DELETE',
// //       headers: {
// //         'Authorization': `${token}`
// //       }
// //     })
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         // Remove the item from the state
// //         setCartItems(cartItems.filter(item => item.cart_id !== id));
// //       })
// //       .catch(error => {
// //         console.error('Error removing item:', error);
// //       });
// //   };

// //   const fetchProductDetails = (productId) => {
// //     return fetch(`http://localhost:4444/user/product/${productId}`) // Ensure the API endpoint is correct
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => data.data)
// //       .catch(error => {
// //         console.error('Error fetching product details:', error);
// //         throw error;
// //       });
// //   };

// //   useEffect(() => {
// //     const fetchAllProductDetails = async () => {
// //       try {
// //         const updatedCartItems = await Promise.all(
// //           cartItems.map(async (item) => {
// //             const productDetails = await fetchProductDetails(item.product_id);
// //             return { ...item, ...productDetails };
// //           })
// //         );
// //         setCartItems(updatedCartItems);
// //       } catch (error) {
// //         console.error('Error fetching all product details:', error);
// //       }
// //     };

// //     if (cartItems.length > 0) {
// //       fetchAllProductDetails();
// //     }
// //   }, [cartItems]);

// //   if (loading) {
// //     return <p>Loading...</p>;
// //   }

// //   if (error) {
// //     return <p>Error: {error.message}</p>;
// //   }

// //   return (
// //     <div style={{ backgroundImage: 'url(/images/cart3.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
// //       <div className="container mt-5">
// //         <h1 className="text-center mb-4">Cart</h1>
// //         <div className="row">
// //           {selectedProduct && (
// //             <div className="col-md-4 mb-4">
// //               <div className="card h-100">
// //                 <img src={"Backend/uploads/image.png"} className="card-img-top" alt={selectedProduct.name} />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{selectedProduct.name}</h5>
// //                   <p className="card-text">Description: {selectedProduct.description}</p>
// //                   <p className="card-text">Price: ₹{selectedProduct.price}</p>
// //                   <button className="btn btn-danger" onClick={() => handleRemoveItem(selectedProduct.cart_id)}>Remove</button>
// //                   <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Back to Cart</button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //           {cartItems.map(item => (
// //             <div className="col-md-4 mb-4" key={item.cart_id}>
// //               <div className="card h-100">
// //                 <img src={item.images} className="card-img-top" alt={item.name} />
// //                 <div className="card-body">
// //                   <h5 className="card-title">{item.name}</h5>
// //                   <p className="card-text">Description: {item.description}</p>
// //                   <p className="card-text">Price: ₹{item.price}</p>
// //                   <button className="btn btn-danger" onClick={() => handleRemoveItem(item.cart_id)}>Remove</button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <button className="btn btn-primary mt-4" onClick={() => navigate('/Product')}>Back to Products</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('Fetching cart items...');
//     const token = sessionStorage.getItem('token');
//     fetch('http://localhost:4444/user/cart', {
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
//         console.log('Received data:', data);
//         setCartItems(data.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setError(error);
//         setLoading(false);
//       });

//     // Check if there's a selected product passed from the Products page
//     if (location.state && location.state.selectedProduct) {
//       setSelectedProduct(location.state.selectedProduct);
//     }
//   }, [location.state]);

//   const handleRemoveItem = (cart_id) => {
//     const token = sessionStorage.getItem('token');
//     console.log(`Removing item with cart_id: ${cart_id}`);
//     fetch(`http://localhost:4444/user/cart/${cart_id}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `${token}`
//       }
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         console.log(`Item with cart_id: ${cart_id} removed successfully`);
//         // Remove the item from the state
//         setCartItems(cartItems.filter(item => item.cart_id !== cart_id));
//       })
//       .catch(error => {
//         console.error('Error removing item:', error);
//       });
//   };

//   const fetchProductDetails = (productId) => {
//     return fetch(`http://localhost:4444/user/product/${productId}`) // Ensure the API endpoint is correct
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => data.data)
//       .catch(error => {
//         console.error('Error fetching product details:', error);
//         throw error;
//       });
//   };

//   useEffect(() => {
//     const fetchAllProductDetails = async () => {
//       try {
//         const updatedCartItems = await Promise.all(
//           cartItems.map(async (item) => {
//             const productDetails = await fetchProductDetails(item.product_id);
//             return { ...item, ...productDetails };
//           })
//         );
//         setCartItems(updatedCartItems);
//       } catch (error) {
//         console.error('Error fetching all product details:', error);
//       }
//     };

//     if (cartItems.length > 0) {
//       fetchAllProductDetails();
//     }
//   }, [cartItems]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div style={{ backgroundImage: 'url(/images/cart3.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
//       <div className="container mt-5">
//         <h1 className="text-center mb-4">Cart</h1>
//         <div className="row">
//           {selectedProduct && (
//             <div className="col-md-4 mb-4">
//               <div className="card h-100">
//                 <img src={"Backend/uploads/image.png"} className="card-img-top" alt={selectedProduct.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{selectedProduct.name}</h5>
//                   <p className="card-text">Description: {selectedProduct.description}</p>
//                   <p className="card-text">Price: ₹{selectedProduct.price}</p>
//                   <button className="btn btn-danger" onClick={() => handleRemoveItem(selectedProduct.cart_id)}>Remove</button>
//                   <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Back to Cart</button>
//                 </div>
//               </div>
//             </div>
//           )}
//           {cartItems.map(item => (
//             <div className="col-md-4 mb-4" key={item.cart_id}>
//               <div className="card h-100">
//                 <img src={item.images} className="card-img-top" alt={item.name} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text">Description: {item.description}</p>
//                   <p className="card-text">Price: ₹{item.price}</p>
//                   <button className="btn btn-danger" onClick={() => handleRemoveItem(item.cart_id)}>Remove</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button className="btn btn-primary mt-4" onClick={() => navigate('/Product')}>Back to Products</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Fetching cart items...');
    const token = sessionStorage.getItem('token');
    fetch('http://localhost:4444/user/cart', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`
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
        console.log('Received data:', data);
        setCartItems(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });

    // Check if there's a selected product passed from the Products page
    if (location.state && location.state.selectedProduct) {
      setSelectedProduct(location.state.selectedProduct);
    }
  }, [location.state]);

  const handleRemoveItem = (cart_id) => {
    const token = sessionStorage.getItem('token');
    console.log(`Removing item with cart_id: ${cart_id}`);
    fetch(`http://localhost:4444/user/cart/${cart_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Item with cart_id: ${cart_id} removed successfully`);
        // Remove the item from the state
        setCartItems(cartItems.filter(item => item.cart_id !== cart_id));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  const fetchProductDetails = (productId) => {
    return fetch(`http://localhost:4444/user/product/${productId}`) // Ensure the API endpoint is correct
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.data)
      .catch(error => {
        console.error('Error fetching product details:', error);
        throw error;
      });
  };

  useEffect(() => {
    const fetchAllProductDetails = async () => {
      try {
        const updatedCartItems = await Promise.all(
          cartItems.map(async (item) => {
            const productDetails = await fetchProductDetails(item.product_id);
            return { ...item, ...productDetails };
          })
        );
        setCartItems(updatedCartItems);
      } catch (error) {
        console.error('Error fetching all product details:', error);
      }
    };

    if (cartItems.length > 0) {
      fetchAllProductDetails();
    }
  }, [cartItems]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ backgroundImage: 'url(/images/cart3.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', paddingTop: '10px' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Cart</h1>
        <div className="row">
          {selectedProduct && (
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={"Backend/uploads/image.png"} className="card-img-top" alt={selectedProduct.name} />
                <div className="card-body">
                  <h5 className="card-title">{selectedProduct.name}</h5>
                  <p className="card-text">Description: {selectedProduct.description}</p>
                  <p className="card-text">Price: ₹{selectedProduct.price}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(selectedProduct.cart_id)}>Remove</button>
                  <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Back to Cart</button>
                </div>
              </div>
            </div>
          )}
          {cartItems.map(item => (
            <div className="col-md-4 mb-4" key={item.cart_id}>
              <div className="card h-100">
              <img width={150} height={150} src={`http://localhost:4444/images/${item.images}`} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Description: {item.description}</p>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(item.cart_id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary mt-4" onClick={() => navigate('/Product')}>Back to Products</button>
      </div>
    </div>
  );
};

export default Cart;