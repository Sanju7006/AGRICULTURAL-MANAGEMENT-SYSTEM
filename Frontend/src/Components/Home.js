import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <div className="container text-white text-center mt-5">
      <h1 className="container text-white text-center mt-5"style={{ color: 'white' }}>Welcome to AgriManage</h1>
      <h5 className="container text-white text-center mt-5">
        AgriManage is your trusted partner in modern agriculture. We provide innovative tools and resources to help you optimize your farming practices and achieve sustainable growth.
      </h5>
      <blockquote className="blockquote text-center mt-4">
        <p className="mb-3">"The future of agriculture is not just about growing crops, but about growing communities and fostering innovation."</p>
        <footer className="blockquote-footer">AgriManage Team</footer>
      </blockquote>
    </div>
  );
}

export default Home;