import React from 'react'
import {Link} from 'react-router-dom'

class BarsList extends React.Component {
    state = {
      bars: [],
      location: this.props.match.params.location,
      term: this.props.match.params.term || "restaurants",
      
    }
    componentDidMount() {
      const { location, term = "restaurants" } = this.props.match.params
      location && this.fetchPlaces(location, term)
    }
    handleInputChange = field => e => this.setState({ [field]: e.target.value })
    handleSubmit = event => {
      const { location, term } = this.state
      if (location && term) {
        event.preventDefault()
        this.props.history.push(`/restaurants/${location}/${term || ""}`)
        this.fetchPlaces(location, term)
      }
    }


    fetchPlaces = (location, term) => {
      if (!location) return
      localStorage.setItem("location", location)
      localStorage.setItem("term", term)
      const url = `/api/restaurants/search/${location}/${term || ""}`
      fetch(url)
        .then(response => response.json())
        .then(yelpResponse => {
          this.setState({
            bars: yelpResponse,
            location,
            term
       
          })
        })
    }
    render() {
  
      return (
        <>
          <React.Fragment>
     
           
            <div className='barlist'>
              {this.state.bars.map(bar => (
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
  }
  export default BarsList