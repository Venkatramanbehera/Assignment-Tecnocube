import React from 'react'
import './movie.css';

const Movie = (props) => {
    return (
        <article className="Post">
            {/* <h1>{ props.title }</h1>
            <div className="Info">
                <div className="Author">{props.overview}</div>
            </div> */}
            <img className="Image" src={ props.poster}/>
        </article>
    )
}

export default Movie;
