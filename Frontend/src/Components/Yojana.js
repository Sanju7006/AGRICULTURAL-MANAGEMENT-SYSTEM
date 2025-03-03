import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Yojana = () => {
  const [yojanas, setYojanas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching yojanas...');
    fetch('http://localhost:4444/user/yojna') // Ensure the API endpoint is correct
      .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data);
        setYojanas(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleYojanaClick = (yojana) => {
    // Replace the URL with the actual Google Form link
    const googleFormUrl = 'https://pmkisan.gov.in/';
    window.open(googleFormUrl, '_blank');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ backgroundImage: 'url(/images/farmer.avif)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', minWidth: '100%', color: 'white' }}>
      <h1 className="text-center mb-4">Farmer Yojanas for 2025</h1>
      <div className="list-group mb-4">
        {yojanas.map(yojana => (
          <div
            className="list-group-item list-group-item-action"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            key={yojana.id}
            onClick={() => handleYojanaClick(yojana)}
          >
            <div className="d-flex w-100">
              <img src={yojana.images || 'http://localhost:3000/images/PM.avif'} alt={yojana.name} className="me-3" style={{ width: '150px', height: '100px' }} />
              <div>
                <h5 className="mb-1">{yojana.name}</h5>
                <p className="mb-1">{yojana.description}</p>
                <p className="mb-1">Start Date: {new Date(yojana.start_date).toLocaleDateString()}</p>
                <p className="mb-1">End Date: {new Date(yojana.end_date).toLocaleDateString()}</p>
                <p className="mb-1">Status: {yojana.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2 className="text-center mb-4" style={{ color: 'white' }}>Useful Links</h2>
        <div className="list-group">
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Financing Facility Under Agriculture Infrastructure
          </a>
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Campaign for Saturation of all PM KISAN beneficiaries with Kisan Credit Cards (KCC)
          </a>
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Interaction with Farmers and Release of PM-Kisan Samman Nidhi by Hon'ble Prime Minister of India Shri Narendra Modi on 9th August 2021 12:30 PM IST
          </a>
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Interaction with Farmers and Release of PM-Kisan Samman Nidhi by Hon'ble Prime Minister of India Shri Narendra Modi on 14th May 2021 11:00 AM IST
          </a>
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            Webcast of Hon'ble Prime Minister's event on the occasion of the "One Year Completion of the PM-Kisan and Distribution of Kisan Credit Cards (KCC)"
          </a>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px' }}>
        <h2 className="text-center mb-4" style={{ color: 'white' }}>PM-KISAN Scheme</h2>
        <div className="list-group">
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            PM-KISAN Scheme Details
          </a>
          <div className="list-group-item" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <p>PM Kisan is a Central Sector scheme with 100% funding from Government of India.</p>
            <p>It has become operational from 1.12.2018.</p>
            <p>Under the scheme an income support of ₹6,000/- per year in three equal installments will be provided to all land holding farmer families.</p>
            <p>Definition of family for the scheme is husband, wife and minor children.</p>
            <p>State Government and UT administration will identify the farmer families which are eligible for support as per scheme guidelines.</p>
            <p>The fund will be directly transferred to the bank accounts of the beneficiaries.</p>
            <p>There are various Exclusion Categories for the scheme.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yojana;