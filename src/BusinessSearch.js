import React from 'react';
import { getYelp } from './services/fetch-utils.js';
import { useState } from 'react';
import BusinessList from './BusinessList.js';

export default function BusinessSearch() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);

  async function fetchAndStoreYelp() {
    const data = await getYelp(yelpQuery);
    setBusinesses(data.businesses);
  }
     
    
  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreYelp();
    setYelpQuery('');
      
  }
    
  return (
    <div>
      <div className="yelp-search">
        <form onSubmit={handleYelpSubmit}>
          <input onChange={e => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        <BusinessList businesses={businesses} />

      </div>
    </div>
  );
}
