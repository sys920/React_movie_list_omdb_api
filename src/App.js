import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'
import Watched from './Watched'
import Want from './Want'



class App extends Component {

 state = {
  inputQuery : "",
  watchedLists : [],
  WantLists :[],
  searchedLists :[],
 }
 
  updateInput = (e) => { 
    this.setState({inputQuery : e.target.value})
  }

  getMovies = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=287572ed&s=${this.state.inputQuery}`)    
    .then(response => response.json())
    .then(data => this.setState({searchedLists : data.Search, inputQuery : "" }));
  }

  watchedMovie = (movie) => {
    this.setState((previousState) => ({
      watchedLists : [...previousState.watchedLists, movie]
    }));  
  }


  WantMovie = (movie) => {
    this.setState((previousState) => ({
      WantLists : [...previousState.WantLists, movie],  
    }));  
  }



  render() {

    return (
      <div className="App">
        <form onSubmit={this.getMovies}>
          <input tyep="text" placeholder="Type name of Movie" onChange={this.updateInput} value={this.state.inputQuery}/><button type="submit" >Search Movies</button>
        </form> 
        <div><h1>Searched Movies</h1></div>         
          <div>
            {this.state.searchedLists.map((movie,index) => (
              <Movie key={index} watchedMovie={this.watchedMovie} WantMovie={this.WantMovie} movie={movie} watchedLists={this.state.watchedLists}  WantLists={this.state.WantLists}/>               
            ))}
          </div>  
        <div><h1>Watched Movies LIST</h1></div>
          <div>
            {this.state.watchedLists.map((movie,index) => (
              <Watched key={index}  movie={movie}/>  
            ))}
        </div>
        <div><h1>Want to watch Movies LIST</h1></div>
          <div>
            {this.state.WantLists.map((movie,index) => (
              <Want key={index}  movie={movie}/>  
            ))}
        </div>    
      </div>
    );
  }
}

export default App;
