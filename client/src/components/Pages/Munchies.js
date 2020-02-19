import React, { useEffect, useState, Fragment, useCallback } from 'react';

const Munchies = ({ match }) => {
  const [restaurant, setRestaurant] = useState({});

  const fetchRestaurant = useCallback(() => {
    fetch(`/api/restaurants/${match.params.id}`)
      .then(response => response.json())
      .then(response => setRestaurant(response));
  }, [match]);

  useEffect(() => {
    fetchRestaurant();
  }, [fetchRestaurant]);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image_url} alt="restaurant" />
      <h1>{restaurant.display_phone}</h1>
      <h1>{restaurant.rating}</h1>
      <h1>{restaurant.price}</h1>
      <h1>Review count: {restaurant.review_count}</h1>
      {(restaurant.reviews || []).map(review => {
        return (
          <Fragment key={review}>
            <div>{review.text}</div>
            <div>{review.user.name}</div>
            <img src={review.user.image_url} alt="profile" />
          </Fragment>
        );
      })}
    </div>
  );
};
export default Munchies;
