import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'
import SelectedMovie from './SelectedMovie'
import { Route, Link } from 'react-router-dom'

let currentInputQuery = "";

class App extends Component {

state = {
  inputQuery : "",
  watchedLists : [],
  WantLists :[],
  searchedLists :[],
  MovieNotFound :"",
 }
 
  updateInput = (e) => { 
    this.setState({inputQuery : e.target.value})
  }

  getMovies = (e) => {
    e.preventDefault();
    if(this.state.inputQuery !=="") {
      fetch(`https://www.omdbapi.com/?apikey=287572ed&s=${this.state.inputQuery}`)    
      .then(response => response.json())
      .then(data => { 
        if (data.Response !== "False") {
          this.setState({searchedLists : data.Search, inputQuery : "", MovieNotFound:false })
        }else {
          currentInputQuery = this.state.inputQuery;
          this.setState({inputQuery : "" , MovieNotFound:true, searchedLists :""})
        }        
      })
    }        
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
        <div className="topTitle"> The Open Movie Database </div>
        <Route exact path='/' render = {() => (                   
          <div>       
            <Link to='/search'><button className="navigation">Search Movie </button></Link>
              {this.state.watchedLists.length > 0 && <div className="listTitle"> Watched Movies List </div>}   
            <div className="movieLists">
              {this.state.watchedLists.map((movie,index) => (
                <SelectedMovie key={index}  movie={movie} className={"movieList"}/>  
              ))}
            </div>            
              {this.state.WantLists.length >0 && <div className="listTitle">Want to watch Movies List</div>}            
            <div className="movieLists">
              {this.state.WantLists.map((movie,index) => (
                <SelectedMovie key={index}  movie={movie} className={"movieList"}/>  
              ))}
            </div> 
          </div> 
        )} />

        <Route exact path='/search' render = {() => (
          <div>
            <Link to='/'><button className="navigation">Back to My Movie List</button></Link>   
            <form onSubmit={this.getMovies}>
              <input className="inputBox" type="text" placeholder="Type Title of Movie" onChange={this.updateInput} value={this.state.inputQuery}/><button className="submitButton" type="submit" >Search Movies</button>
            </form>       
            {this.state.searchedLists.length > 0 &&  <div className="listTitle">Searched Movies</div> }  
            {this.state.MovieNotFound &&  <div className="listTitle">No movies found for the search term '{currentInputQuery}'</div> }                  
            <div className="movieLists">
              {this.state.searchedLists.length > 0 && (this.state.searchedLists.map((movie,index) => (
                <Movie key={index} watchedMovie={this.watchedMovie} WantMovie={this.WantMovie} movie={movie} watchedLists={this.state.watchedLists}  WantLists={this.state.WantLists}  movieList={"movieList"} watchedButton={"watchedButton"} wantButton={"wantButton"}/>               
              )))}
            </div>  
          </div>
        )} />
        
      </div>
    );
  }
}

export default App;
