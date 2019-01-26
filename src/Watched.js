import React from 'react'


class Watched extends React.Component {


  render() {
    return(
      <div>
        <div><img src={this.props.movie.Poster}/></div>
        <div>TITLE{this.props.movie.Title}</div>          
      </div>
    );
  }
}

export default Watched