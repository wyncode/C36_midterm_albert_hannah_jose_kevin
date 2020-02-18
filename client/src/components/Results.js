import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useRouter } from '../custom_hooks';

const Results = () => {
    const { params } = useRouter();
    const { location } = params;
    const [venues, setVenues] = useState([]);

    const fetchPlaces = () => {
        if (!location) return;
        const url = `/api/restaurants/search/${location}`;
        axios.get(url)
            .then(response => setVenues(response.data))
    }

    useEffect(() => {
        fetchPlaces();
    }, [])

    return (
        <>
        <React.Fragment>
   
         
          <div className='barlist'>
            {venues.map(bar => (
              <Link to={`/bar/${bar.id}`} key={bar.id}>
                <div className='Rob'>
                  <div className='main-result'>
                    <div className='results'>
                      <h3 className='will-h3'>{bar.name}</h3>
                      <img
                        className='result-images'
                        src={bar.image_url}
                        alt={bar.name}
                      />
                      <h3 className='will-h5'>
                      
                    
                      </h3>
                      <h4 className='will-h4'>
                        {bar.price || "Price Not Available"}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </React.Fragment>
      </>
    )
}

  export default Results;