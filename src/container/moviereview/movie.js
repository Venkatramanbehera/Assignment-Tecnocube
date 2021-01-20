import React, { Component } from 'react'
import axios from 'axios';
import MovieElement from '../../components/movie/movie';
import './movie.css';

class Movie extends Component {
    state = {
        movies : []
    }
    componentDidMount(){
        axios.get('https://wookie.codesubmit.io/movies',{ headers:{
            'Authorization':`Bearer Wookie2019`
        }}).then( result => {
            const movies = result.data.movies;
            const updatedMovies = movies.map( movie => {
                
                return {
                    ...movie
                }
            });
            console.log(updatedMovies);
            this.setState({ movies : updatedMovies});
        });
    }
    render() {
        const movies = this.state.movies.map( movie => {
            return <MovieElement key={ movie.id } title={ movie.title } overview={ movie.overview } poster={ movie.poster } />
        });
        // console.log(movies);
        return (
            <div className="App">
                <nav className="navbar">
                    <ol>
                        <li className="Logo">WOOKIE <br/> MOVIES</li>
                        <li className="SerchBar">
                            <input type="search" placeholder="search"/>
                        </li>
                    </ol>
                </nav>
                <hr/>
                <section className="Movies">
                    { movies }
                </section>
            </div>
        )
    }
}

export default Movie;
