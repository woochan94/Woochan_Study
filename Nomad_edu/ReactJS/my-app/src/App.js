import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
    "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg",
    "https://img1.daumcdn.net/thumb/R338x491/?fname=http://t1.daumcdn.net/cfile/205CF91249EC79F00F",
    "http://artinsight.co.kr/n_news/peg/1508/thumb/a4cb4757610239a28cf0cba125b24a69_vpZESkDO68sOb6AbZkW9hFd.jpg",
    "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title = {movieTitles[0]} poster={movieImages[0]}/>
        <Movie title = {movieTitles[1]} poster={movieImages[1]}/>
        <Movie title = {movieTitles[2]} poster={movieImages[2]}/>
        <Movie title = {movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}



export default App;
