import React from 'react';
const Result = (props) => {
    return ( <div>
        <h1>{props.name}</h1>
        <img src={props.image}/>
        <h1>{props.location}</h1>
        <h1>{props.rating}</h1>
        <h1>Title</h1>
        <h1>Title</h1>
    </div> );
}
 
export default Result;