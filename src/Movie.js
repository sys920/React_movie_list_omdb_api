import React from 'react'


class Movie extends React.Component {


  render() {
    return(
      <div>
        <div><img src={this.props.movie.Poster}/></div>
        <div>TITLE{this.props.movie.Title}</div>                    
     
        {(((this.props.watchedLists.filter((c) => c.imdbID === this.props.movie.imdbID)).length === 0) && ((this.props.WantLists.filter((c) => c.imdbID === this.props.movie.imdbID)).length === 0))&& 
          <div><button onClick={() => this.props.watchedMovie(this.props.movie)}>Already Watched</button>      
          <button onClick={() => this.props.WantMovie(this.props.movie)}>Want to Watch</button></div>           
        }
      </div>
    );
  }
}

export default Movie