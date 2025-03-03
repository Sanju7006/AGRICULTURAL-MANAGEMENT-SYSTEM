// import React, { useState } from 'react';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [contact, setContact] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Address:', address);
//     console.log('Contact:', contact);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url(/images/image1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div style={{ padding: '20px', width: '400px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', opacity: '0.8' }}>
//         <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email address</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="name@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address</label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Your Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px' }}>Contact Number</label>
//           <input
//             type="text"
//             id="contact"
//             placeholder="Your Contact Number"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//           <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: 'white', fontSize: '16px' }}>Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = {
      username,
      email,
      password,
      address,
      contact,
    };

    try {
      const response = await fetch('http://localhost:4444/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        // Handle success (e.g., display a success message, redirect, etc.)
      } else {
        console.error('Registration failed:', response.statusText);
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url(/images/image1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={{ padding: '20px', width: '400px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', opacity: '0.8' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="username"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email address</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address</label>
          <input
            type="text"
            id="address"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px' }}>Contact Number</label>
          <input
            type="text"
            id="contact"
            placeholder="Your Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: '#007bff', color: 'white', fontSize: '16px' }}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
