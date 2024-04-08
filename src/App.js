import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {HomesList} from './HomesList';
import { FaHome } from 'react-icons/fa';
import UserProfileDropDown from './UserProfileDropDown';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=20'
        );
        setStays(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
   return (
    <div className="App">
      <FaHome className="home-icon" /><h5>Acme Homes</h5>
      <h1>Available Stays</h1>
      <UserProfileDropDown />
      <div className="places-you-might-like">
      <h2>Places you might like</h2>
      <HomesList stays={stays.slice(0, 3)} />
      </div>
      <div className="nearby-stays">
      <h2>Nearby stays</h2>
      <HomesList stays={stays}  showPagination={true} />
      </div>
    </div>
       
  );
}

export default App;
