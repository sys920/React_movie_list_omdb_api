findMovies=function(e){
  e.preventDefault(),
  fetch("https://www.omdbapi.com/?s=".concat(a.state.query,"&apikey=3905f9c4"))
  .then(function(e){return e.json()})
  .then(function(e){"True"===e.Response?a.setState({movies:e.Search,query:"",notFound:""}):a.setState(function(e){return{notFound:e.query,query:""}})})}