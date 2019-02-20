import React, { Component } from 'react';
import './Movie.css';
import testimg from './img/testimg.jpg';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster></MoviePoster>
                <h1>hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src = {testimg} alt={testimg}></img>
        )
    }
}


export default Movie;