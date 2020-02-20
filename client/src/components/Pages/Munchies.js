import React, { useEffect, useState, Fragment, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
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
    <div className="body-background">
      <CardDeck>
        <Container>
          <Row>
            <Card as="ul" bg="dark" text="white">
              <Card.Header>
                {' '}
                <h1>{restaurant.name}</h1>
              </Card.Header>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${restaurant.image_url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: 400,
                  height: '100%',
                  float: 'center',
                  marginRight: 20
                }}
              ></div>
              <Card.Body>
                <h1>{restaurant.display_phone}</h1>
                <h1>Review count: {restaurant.review_count}</h1>
                {(restaurant.reviews || []).map(review => {
                  return (
                    <Fragment key={review}>
                      <div>
                        <p>{review.text}</p>
                      </div>
                      <div>
                        <p>{review.user.name}</p>
                      </div>
                    </Fragment>
                  );
                })}
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </CardDeck>
    </div>
  );
};
export default Munchies;
