import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
          {
            id : 1,
            title : "Matrix",
            poster : "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
          },
          {
            id : 2,
            title : "Full Metal Jacket",
            poster : "https://img1.daumcdn.net/thumb/R338x491/?fname=http://t1.daumcdn.net/cfile/205CF91249EC79F00F"
          },
          {
            id : 3,
            title : "Oldboy",
            poster : "http://artinsight.co.kr/n_news/peg/1508/thumb/a4cb4757610239a28cf0cba125b24a69_vpZESkDO68sOb6AbZkW9hFd.jpg"
          },
          {
            id : 4,
            title : "Star Wars",
            poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
          }
        ]
      }) 
    },3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}



export default App;
