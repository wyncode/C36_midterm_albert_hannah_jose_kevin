import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Result from './Result'

export default function Home() {
  /*****************************************************
    SETTING THE HOOK STATE
    ******************************************************/
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  /*****************************************************
     CALLING API WITH USE EFFECT
     *****************************************************/
  useEffect(() => {
    const getApiData = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/restaurants/search/miami/${query}`
      );
      setApiData(result.data);
    };
    getApiData();
  }, [query]);
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
  };
  /***************************************************
       THE ACTION RETURN WITH THE USER INFO
       ***************************************************/

  return (
    <>
    
      {
          (apiData.length === 0) ? (
            <div id="background-img">
          <div className="search-wrapper">
              <div className="search-box">
                  <h1>Munchies</h1>
                  <form onSubmit={handleSubmit}>
                      <input
                          type="text"
                          placeholder="Restaurants"
                          onChange={handleChange}
                      />
                  </form>
              </div>
          </div>
          </div>) : ( 
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
        )
      }
           
    
    </>
  );
}
