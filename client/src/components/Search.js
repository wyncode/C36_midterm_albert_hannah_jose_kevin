import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
export default function Restaurants() {
    const [apiData, setApiData] = useState([])
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value.split(' ').join('+'));
      }
 

      const handleSubmit = (event) => {
        event.preventDefault();
        setQuery(search);
      }

      useEffect(() => {
        const getApiData = async () => {
          const result = await axios.get(
            `http://openlibrary.org/search.json?q=${query}`
          );
          setApiData(result.data.docs);
  
        }
        getApiData();
      }, [query]);
 

      return (
        <React.Fragment>
            <h1>Muchies!</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Search by food type" onChange={handleChange}></input>
            </form>
            <ul>
            {apiData.map((food, restaurant) => {
                   if (book.cover_i && book.isbn) {
                   return (
                       <div key={index}>
                           <Link to={`/food/${restaurant[0]}`}>
                                <img alt="cover" src={``}></img>
                           </Link>
                           <p>{book.title}</p>
                       </div>
                   )
                   } else {
                     return(
                      <h1>Not found!</h1>
                     )
                     
                   }
               })}

            </ul>
        </React.Fragment>
    )
 
}