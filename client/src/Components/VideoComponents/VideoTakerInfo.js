import React from 'react'
import { useEffect, useState } from 'react';
function VideoTakerInfo() {

    const [result, setResult] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    let result = await fetch('http://localhost:5000/VideoOverview');
    result = await result.json();
    setResult(result);
  };

  return (
    <div>
      <h1>Service seekers</h1>
      {
        result.length > 0 ? result.map((items, index) =>
          <div key={index}>
            <h3>{items.Fullname}</h3>
            <h3>{items.Email}</h3>
            <h3>{items.Address}</h3>
            <h4>{items.ServiceCategory}</h4>
            <h3>{items.Budget}</h3>
            <h4>{items.Description}</h4>
            <h4>{items.ProblemDStartedOn}</h4>
            <a href="https://localhost:3001" target="_blank">Hoist a Video Call</a>
          </div>
        ) : <h1>No Reviews Found</h1>
      }
    </div>
  );
}
export default VideoTakerInfo