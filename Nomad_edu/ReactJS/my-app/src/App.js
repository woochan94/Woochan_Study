// // Velopert.log
// import React, {Component} from 'react'; // 리액트와 그 내부의 Component를 불러온다. JSX를 사용하기 위해서 React를 꼭 import 해야 함 
// import './App.css';
// import MyName from './MyName';
// import Counter from './Counter';
// // import 하는 것은 webpack을 사용하기에 가능한 작업이다. 
// // 프로젝트를 빌드하게 됐을 때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 된다. 

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {
//           // // 조건부 렌더링 
//           // // 1. 삼항연산자 
//           // 1 + 1 === 2 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
          
//           // // 2. AND 연산자 
//           // 1 + 1 === 2 && (<div>맞아요!</div>)
//         }
//         <MyName name = "리액트~~" />
//         <MyName />
//         <Counter />
//       </div>
//     );
//   }
// }

// export default App; // 작성한 컴포넌트를 다른곳에서 불러와서 사용할 수 있도록 내보내기를 해준다. 





// NomadCoders 
import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title = {movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies;
  }

   _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies : movies 
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') 
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
