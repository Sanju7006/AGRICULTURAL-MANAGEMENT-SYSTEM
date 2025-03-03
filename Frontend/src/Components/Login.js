// // import React, { useState } from 'react';
// // import '../Styles/Login.css'; // Import the CSS file for custom styles

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle login logic here
// //     console.log('Email:', email);
// //     console.log('Password:', password);
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="container mt-5">
// //         <h1>Login</h1>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label htmlFor="email" className="form-label">Email</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               id="email"
// //               placeholder="name@example.com"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">Password</label>
// //             <input
// //               type="password"
// //               className="form-control"
// //               id="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary">Login</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'url(/images/image4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="card p-4" style={{ width: '400px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
//         <h1 className="text-center mb-4">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//         <div className="mt-3 text-center">
//           <p>If you do not have an account, please <Link to="/register">register here</Link>.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
  
    fetch('http://localhost:4444/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Login successful:', data);
        debugger;
        // Save authentication state (e.g., using local storage)
        localStorage.setItem('user', JSON.stringify(data));
        sessionStorage.setItem('token', data.data.token);
        // Redirect to the Products component
        navigate('/Product');
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError(error.message);
      });
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'url(/images/image4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card p-4" style={{ width: '400px', background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
        <h1 className="text-center mb-4">Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <p>If you do not have an account, please <Link to="/register">register here</Link>.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
