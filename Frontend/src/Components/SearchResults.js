import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    console.log('Fetching search results...');
    const token = sessionStorage.getItem('token'); // Replace 'authToken' with your actual token key
    fetch(`http://localhost:4444/user/product/search?query=${query}`, {
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
        console.log('Received data:', data.data);
        setResults(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search Results for "{query}"</h1>
      <div className="row">
        {results.map(result => (
          <div className="col-md-4 mb-4" key={result.product_id}>
            <div className="card h-100">
              <img src={result.image || "http://localhost:3000/images/demo.png"} className="card-img-top" alt={result.name} />
              <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p className="card-text">Description: {result.description}</p>
                <p className="card-text">Price: ₹{result.price}</p>
                <p className="card-text">Stock: {result.stock}</p>
                <p className="card-text">Created At: {new Date(result.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;