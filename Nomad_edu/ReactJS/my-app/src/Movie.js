import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
           <img src={this.props.poster} alt={this.props.poster}/>
        );
    }
}


export default Movie;