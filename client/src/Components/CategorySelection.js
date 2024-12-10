import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function CategorySelection() {

    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); // New state to track if the search has been performed

  const filterData = async () => {
      let key = "yes";
      if (key) {
          let result = await fetch(`http://localhost:5000/search2/${key}`);
          result = await result.json();
          setHasSearched(true); // Set the flag indicating that search has been performed
          if (result) {
              setProducts(result);
          }
      }
  };
    return (
        <div>
            <Link to="/PlumberInterest">Plumber</Link><br/>
            <Link to="/ElectricainInterest">Electricians</Link><br/>
            <Link to="/AcMechanicinterest">Mechanics</Link><br/>
            <Link to="/AcTechnicians">Ac Technicians</Link><br/>
            <Link to="/carpenters">Carpenters</Link><br/>
            <Link to="/pest-Control">Pest Control</Link><br/>
            <Link to="/painters">painters</Link><br/>

            <button onClick={filterData}>Show Emergency candiadtes</button>
          {
              hasSearched && products.length > 0 ? (
                  products.map((items) =>
                      <ul key={items._id}>
                          <li>{items.FullName}</li>
                          <li>{items.Email}</li>
                          <li>{items.Address}</li>
                          <li>{items.ServiceCategory}</li>
                          <li>{items.Budget}</li>
                          <li>{items.ProblemDStartedOn}</li>
                      </ul>
                  )
              ) : (
                  hasSearched && <h1>No Emergency works yet.</h1>
              )
          }
        </div>
    );
}

export default CategorySelection