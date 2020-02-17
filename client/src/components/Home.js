import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result'
import Title from './Title'


export default function Home() {
  /*****************************************************
    SETTING THE HOOK STATE
    ******************************************************/
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('')
  /*****************************************************
     CALLING API WITH USE EFFECT
     *****************************************************/
    useEffect(() => {
        if (query === "") return 
        if (location === "") return
        
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
    setQuery(search)
    setLocation(search)
  };
  /***************************************************
       THE ACTION RETURN WITH THE USER INFO
       ***************************************************/

  return (
    <React.Fragment>
      <div>
        
      

        {apiData.length === 0 ? (
       <>
        <Title />
          <div id="background-img">
            <div className="search-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Restaurants"
                  onChange={handleChange}
                />
              </form>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="City"
                  onChange={handleChange}
                />
              </form>
            </div>
          </div>
          </>
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
    </React.Fragment>
  );
}
