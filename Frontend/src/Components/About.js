import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {
  return (
    <div style={{ backgroundImage: 'url(/images/about.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', color: 'white' }}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100 p-3">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="text-center" style={{ maxWidth: '800px' }}>
          <p>
            Welcome to AgriManage, your number one source for all things agriculture. We're dedicated to providing you the very best of agricultural management, with an emphasis on efficiency, sustainability, and innovation.
          </p>
          <p>
            Founded in [Year] by [Founder's Name], AgriManage has come a long way from its beginnings. When [Founder's Name] first started out, their passion for sustainable farming drove them to start their own business.
          </p>
          <p>
            At AgriManage, we believe in the power of technology to transform agriculture. Our platform offers a range of tools and resources designed to help farmers optimize their operations, increase productivity, and ensure sustainability. From crop monitoring and soil health management to weather forecasting and market analysis, we provide comprehensive solutions to meet the diverse needs of modern agriculture.
          </p>
          <p>
            Our mission is to empower farmers with the knowledge and tools they need to succeed in an ever-changing agricultural landscape. We are committed to innovation and continuously strive to improve our platform to better serve our users. Whether you are a small-scale farmer or a large agricultural enterprise, AgriManage is here to support you every step of the way.
          </p>
          <p>
            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p>
            Sincerely,<br />
            [Founder's Name]
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;