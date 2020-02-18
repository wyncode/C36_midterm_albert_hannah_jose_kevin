import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useRouter } from '../../custom_hooks';

const prices = ['$', '$$', '$$$', '$$$$', '$$$$$']
const ratings = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];


const Results = () => {
    const { params } = useRouter();
    const { location } = params;
    const [venues, setVenues] = useState([]);
    const [filters, setFilters] = useState({})

    const handleChangeFilter = (filterType, isNumber) => e => setFilters({ ...filters, [filterType]: isNumber ? Number(e.target.value) : e.target.value })

    const fetchPlaces = () => {
        if (!location) return;
        const url = `/api/restaurants/search/${location}`;
        axios.get(url)
            .then(response => setVenues(response.data))
    }

    const checkFilters = (filterKeys, venue) => filterKeys.every(key => {
      const filterValue = filters[key];
      const venueValue = venue[key]
      if (key === 'alias') return venueValue.toLowerCase().includes(filterValue.toLowerCase())
      return filterValue === venue[key]
    })

    useEffect(() => {
        fetchPlaces();
    }, [])

    return (
        <>
        <React.Fragment>
   
         <div className="filters">
          <h3>Filters</h3>
            <select onChange={handleChangeFilter('price')}>
              <option value={null}></option>
              {prices.map(price => <option value={price}>{price}</option>)}
            </select>
            <select onChange={handleChangeFilter('rating', true)}>
              <option value={null}></option>
              {ratings.map(rating => <option value={rating}>{rating}</option>)}
            </select>
            <input onChange={handleChangeFilter('alias')} placeholder="Search by name or location" />
         </div>
          <div className='barlist'>
            {venues.reduce((acc, venue) => {
              const filterKeys = Object.keys(filters);
              if (filterKeys.length) {
                const isValid = checkFilters(filterKeys, venue);
                if (!isValid) return acc;
              }

              acc.push(
              <Link to={`/bar/${venue.id}`} key={venue.id}>
                <div className='Rob'>
                  <div className='main-result'>
                    <div className='results'>
                      <h3 className='will-h3'>{venue.name}</h3>
                      <img
                        className='result-images'
                        src={venue.image_url}
                        alt={venue.name}
                      />
                      <h3 className='will-h5'>
                      
                    
                      </h3>
                      <h4 className='will-h4'>
                        {venue.price || "Price Not Available"}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            )
            return acc;
            }, [])}
          </div>
        </React.Fragment>
      </>
    )
}

  export default Results;