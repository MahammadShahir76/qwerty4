import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ShowReviews() {

    const [result, setResult] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    let result = await fetch('http://localhost:5000/overview');
    result = await result.json();
    setResult(result);
  };

  return (
    <div>
      <h1>Service SeeProviders Overview</h1>
      {
        result.length > 0 ? result.map((items, index) =>
          <div key={index}>
            <h3>{items.Fullname}</h3>
            <h3>{items.ServiceCategory}</h3>
            <h3>{items.review1}</h3>
            <h4>{items.review2}</h4>
            <h3>{items.review3}</h3>
            <h4>{items.description}</h4>
          </div>
        ) : <h1>No Reviews Found</h1>
      }
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ShowReviews
