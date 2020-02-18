if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const axios = require('axios')

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
/********************************************************** 
 Here is the BACK-END CODE
 IN ORDER TO WORK RUN YARN ADD CORS FIRST
***********************************************************/


app.get('/api/restaurants/search/:location/:term?', (request, response) => {
  const { location, term } = request.params
  const locationSearch = location ? `&location=${location}` : '';
  const termSearch = term && term !== 'undefined' ? `&term=${term}` : ''
  axios.get(`https://api.yelp.com/v3/businesses/search?categories=restaurants${locationSearch}${termSearch}&limit=50&open_now=true`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    }
  })
  .then(yelpResponse => response.json(yelpResponse.data.businesses || []))
  .catch(err => response.send([]))
})


app.get(`/api/restaurants/:id`, async (request, res) => {
  const { id } = request.params
  let { data } = await axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`
    }
})

res.send(data)
})

/*********************************************************
 Here is the END of the BACK-END CODE
 *********************************************************/


// END DEMO

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
