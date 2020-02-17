
import React from 'react'
import Title from "./Title"



class Home extends React.Component{
  state = {query: ''}
  handleInputChange = event => this.setState({ query: event.target.value })
  handleTermInputChange = event => this.setState({term: event.target.value})
  handleSearch = event => {
    event.preventDefault()
    const { query } = this.state;

    this.props.history.push(`/restaurants/${query}`)
  }
  render(){
    return(
        <>
        <Title />
          <div id="background-img">
            <div className="search-box">
            <form
          className="home-page-form"
          onSubmit={this.handleSearch}
        >
          <div className="home-search-box">
            <label
              className="home-page-label"
              htmlFor="home-search-id"
            >
            <input
              id="search-box-id"
              className="home-page-input"
              name="query"
              type="text"
              placeholder="Search a location.."
              spellCheck="false"
              autoComplete="off"
              onChange={this.handleInputChange}
            />
        
               </label>
          </div>
        </form>
            </div>
          </div>
          </>
    )
  }
}
export default Home
















