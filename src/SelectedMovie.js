import React from 'react'
class SelectedMovie extends React.Component {

  render() {
    return(
      <div className={this.props.className} >
        <div><img src={this.props.movie.Poster}/></div>
        <div>{this.props.movie.Title}</div>          
      </div>
    );
  }
}

export default SelectedMovie