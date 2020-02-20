import React, { useEffect, useState, Fragment, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

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
      <Container>
        <Row>
          <Card
            border="primary"
            bg="dark"
            text="white"
        
          >
            <Card.Header>
              {' '}
              <h1>{restaurant.name}</h1>
            </Card.Header>

            <Card.Img variant="top" src={restaurant.image_url} alt="image" />

            <Card.Body>
              <h1>{restaurant.name}</h1>
              <h1>{restaurant.display_phone}</h1>
            </Card.Body>
          </Card>
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
        </Row>
      </Container>
    </div>
  );
};

export default Munchies;
