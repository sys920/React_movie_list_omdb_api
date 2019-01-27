import React from 'react'


class Movie extends React.Component {


  render() {
    return(
      <div className={this.props.movieList}>
        <div><img src={this.props.movie.Poster}/></div>
        <div>{this.props.movie.Title}</div>                    
     
        {(((this.props.watchedLists.filter((c) => c.imdbID === this.props.movie.imdbID)).length === 0) && ((this.props.WantLists.filter((c) => c.imdbID === this.props.movie.imdbID)).length === 0))&& 
          <div><button className={this.props.watchedButton} onClick={() => this.props.watchedMovie(this.props.movie)}>Already Watched</button>      
          <button className={this.props.wantButton} onClick={() => this.props.WantMovie(this.props.movie)}>Want to Watch</button></div>           
        }
      </div>
    );
  }
}

export default Movie