
import React, { useState } from 'react'
import { useRouter } from '../../custom_hooks';
import Title from "./Title"


const Home = () => {
    const [query, setQuery] = useState('');
    const { history } = useRouter();

    const handleInputChange = e => setQuery(e.target.value);

    const handleSearch = e => {
        e.preventDefault();
        history.push(`/restaurants/${query}`)
    }

    return (
        <>
        <Title />
          <div id="background-img">
            <div className="search-box">
            <form
          className="home-page-form"
          onSubmit={handleSearch}
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
              onChange={handleInputChange}
            />
        
               </label>
          </div>
        </form>
            </div>
          </div>
          </>
    )
}


export default Home
















