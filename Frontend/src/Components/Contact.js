// filepath: /C:/Users/Sakshi Joshi/OneDrive/Desktop/React/pro/Agricultural_Management_System/React FrontEnd/frontend/src/Components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4444/user/contacts', formData);
      console.log(response.data);
      alert('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div className="container mt-5">
      <h1 style={{ color: "white" }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label style={{ color: "white" }} htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label style={{ color: "white" }} htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label style={{ color: "white" }} htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;