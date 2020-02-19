import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from '../../custom_hooks';
import { Link } from 'react-router-dom';
/*****************************
 CONSTANTS
 *****************************/
const prices = ['$', '$$', '$$$'];
const ratings = [1, 2, 3, 4, 5];
/*****************************
 HOOKS
 *****************************/
const Results = () => {
  const { params } = useRouter();
  const { location } = params;
  const [venues, setVenues] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  /****************************
    HANDLE FUNCTION FOR FILTERS
    ****************************/
  const handleChangeFilter = (filterType, isNumber) => e => {
    const value = isNumber ? Number(e.target.value) : e.target.value;
    /**********************************************************************************************
    IF THERE IS A VALUE WE UPDATE THE FILTER WTH A NEW VALUE WHILE MAINTAINING ALL THE OLD VALUES
    ***********************************************************************************************/
    if (value) return setFilters({ ...filters, [filterType]: value });

    /*******************************************************************************
     IF THERE IS NO VALUE WE REMOVE THAT KEY FROM THE FILTER STATE AND UPDATE STATE
     *******************************************************************************/
    const newFilters = { ...filters };
    delete newFilters[filterType];
    return setFilters(newFilters);
  };
  /****************************************
   FETCHING FORM THE API AND SETTING STATE
   ****************************************/
  const fetchPlaces = () => {
    if (!location) return;
    const url = `/api/restaurants/search/${location}`;
    axios.get(url).then(response => {
      setVenues(response.data);
      setLoading(false);
    });
  };

  const checkFilters = (filterKeys, venue) =>
    filterKeys.every(key => {
      /*******************************************************************************
       GRAB THE VALUE BY ITS KEY FROM THE VENUE AND FROM THE FILTER STATE TO COMPARE
       *******************************************************************************/
      const filterValue = filters[key];
      const venueValue = venue[key];

      /**************************************************************
       FILTER MAP TO PERFORME UNIQUE COMPARISON BASED ON FILTER TYPE
       **************************************************************/
      return {
        alias: (venueValue, filterValue) =>
          venueValue.toLowerCase().includes(filterValue.toLowerCase()),
        rating: (venueValue, filterValue) => filterValue === venueValue,
        price: (venueValue, filterValue) => filterValue === venueValue
      }[key](venueValue, filterValue); // returns either true or false
    });

  /********************************************
   A HOOK THAT RUNS WHEN THE COMPONENT MOUNTS
   ********************************************/
  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <>
      <React.Fragment>
        {/* rendering the fliters */}
        <div className="filters">
          <h3>Filters</h3>
          <select onChange={handleChangeFilter('price')}>
            <option value={null}></option>
            {prices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
          <select onChange={handleChangeFilter('rating', true)}>
            <option value={null}></option>
            {ratings.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
          <input
            onChange={handleChangeFilter('alias')}
            placeholder="Search by name or location"
          />
        </div>
        {/* ternary to show the loader or venues based on loading state */}
        {loading ? (
          <>loading</>
        ) : (
          <div className="restaurantslist">
            {venues.reduce((acc, venue) => {
              const filterKeys = Object.keys(filters); // returns array of keys i,e ['alias', 'price' ,'rating']
              if (filterKeys.length) {
                // determine if there is at least one filter active
                const isValid = checkFilters(filterKeys, venue); //if there is an active filter then we run our checkFilter
                if (!isValid) return acc; // if it does not pass the check we stop the function by return the acc array
              }
              //if it passes validation or there were no filter at all we append to our acc
              acc.push(
                <Link to={`/restaurant/${venue.id}`} key={venue.id}>
                  <div>
                    <div className="main-result">
                      <div className="results">
                        <h3>{venue.name}</h3>
                        <p>{venue.location.display_address.join(' ')}</p>
                        <img
                          className="result-images"
                          src={venue.image_url}
                          alt={venue.name}
                        />
                        <h4>{venue.price || 'Price Not Available'}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              );
              return acc;
            }, [])}
          </div>
        )}
      </React.Fragment>
    </>
  );
};
export default Results;
