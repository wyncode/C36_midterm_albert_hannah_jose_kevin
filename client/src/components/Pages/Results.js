import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from '../../custom_hooks';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import logo from '../images/perfect-burger.png';
/*****************************
 CONSTANTS
 *****************************/
const prices = ['$', '$$', '$$$', '$$$$', '$$$$$'];
const ratings = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
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
  const fetchPlaces = useCallback(() => {
    if (!location) return;
    const url = `/api/restaurants/search/${location}`;
    axios.get(url).then(response => {
      console.log('res', response);
      setVenues(response.data);
      setLoading(false);
    });
  }, [location]);
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
  }, [fetchPlaces]);
  return (
    <>
      <React.Fragment>
        {/* rendering the fliters */}
        <div className="filters">
          <h3>Filters</h3>
        </div>
        <div className="options">
          <select onChange={handleChangeFilter('price')}>
            <option value="" selected>
              price
            </option>
            {prices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </select>
          <select onChange={handleChangeFilter('rating', true)}>
            <option value="" selected>
              rating
            </option>
            {ratings.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
          <input
            className="place-search"
            onChange={handleChangeFilter('alias')}
            placeholder="Search by name or location"
          />
        </div>
        {/* ternary to show the loader or venues based on loading state */}
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '100px'
            }}
          >
            <img src={logo} alt="logo" />
          </div>
        ) : (
          <div className="restaurantslist">
            <CardDeck style={{ justifyContent: 'center' }}>
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
                    <Card
                      as="ul"
                      border="primary"
                      bg="dark"
                      text="white"
                      style={{
                        width: '25rem',
                        height: '25rem',
                        margin: 10,
                        padding: 20,
                        justifyContent: 'center',
                        backgroundPosition: 'center'
                      }}
                    >
                      <Card.Title>
                        <h3>{venue.name}</h3>
                      </Card.Title>
                      <Card.Subtitle>
                        <Rater rating={venue.rating} onRating={venue.rating} />
                        {venue.rating}
                      </Card.Subtitle>
                      {/*
                      <Card.Img variant="top" 
                          src={venue.image_url}
                        alt={venue.name}/>*/}
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url(${venue.image_url})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          width: '100%',
                          height: '12rem'
                        }}
                      ></div>
                      <Card.Body>
                        <Card.Title>
                          {venue.location.display_address.join(' ')}
                        </Card.Title>
                        <Button variant="primary">Restaurant Details</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                );
                return acc;
              }, [])}
            </CardDeck>
          </div>
        )}
      </React.Fragment>
    </>
  );
};
export default Results;
