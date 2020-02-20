import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result';

export default function Home() {
  /*****************************************************
    SETTING THE HOOK STATE
    ******************************************************/
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  /*****************************************************
     CALLING API WITH USE EFFECT
     *****************************************************/
  useEffect(() => {
    if (query === '') return;
    if (location === '') return;

    const getApiData = async () => {
      const result = await axios.get(
        `/api/restaurants/search/${location}/${query}`
      );
      setApiData(result.data);
    };
    getApiData();
  }, [query, location]);
  /***************************************************
       GETTING THE USER INPUT
       ***************************************************/
  const handleChange = event => {
    setSearch(event.target.value);
  };
  /***************************************************
      EDIT THE SEARCH WHEN THE USER SUBMIT
      ***************************************************/
  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    setLocation(search);
  };
  /***************************************************
       THE ACTION RETURN WITH THE USER INFO
       ***************************************************/

  return (
    <div>
      <div>
        <navbar id="home-nav">
          <a href="#local-eats">Local Eats</a>
          <a href="#restaurant-otm">Restaurant of the Month</a>
          <a href="#about-us">About Us</a>
        </navbar>
      </div>
      <div className="flex">
        <div id="header-box">
          <h1 id="header-home1">LATE NIGHT</h1>
          <h2 id="header-home2">MUNCHIES</h2>
        </div>

        {apiData.length === 0 ? (
          <div id="background-img">
            <div className="search-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Restaurants"
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
        ) : (
          <div>
            <ul>
              {apiData.map(item => {
                return (
                  <Result
                    name={item.name}
                    image={item.image_url}
                    location={`${item.location.address1} ${item.location.city} ${item.location.zip_code}, ${item.location.state}`}
                    rating={`${item.rating}, star review.`}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
