import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Munchies = ({ match }) => {
  const [restaurant, setRestaurant] = useState({});

  const fetchRestaurant = () => {
    fetch(`/api/restaurants/${match.params.id}`)
      .then(response => response.json())
      .then(response => setRestaurant(response));
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image_url} alt="image" />
      <h1>{restaurant.display_phone}</h1>
      <h1>{restaurant.rating}</h1>
      <h1>{restaurant.price}</h1>
      <h1>Review count: {restaurant.review_count}</h1>
      {(restaurant.reviews || []).map(review => {
        return (
          <>
            <div>{review.text}</div>
            <div>{review.user.name}</div>
            <img src={review.user.image_url} alt="profile picture" />
          </>
        );
      })}
    </div>
  );
};
export default Munchies;
