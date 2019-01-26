import React from 'react'


class Want extends React.Component {


  render() {
    return(
      <div>
        <div><img src={this.props.movie.Poster}/></div>
        <div>TITLE{this.props.movie.Title}</div>
      </div>
    );
  }
}

export default Want