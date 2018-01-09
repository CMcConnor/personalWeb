import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Root.css';

var amazingInlineJsStyle = {
  border: '1px solid purple',
  padding: '10px',
  backgroundColor: '#ffffcc'
}

class RootContainer extends Component {
  constructor() {
    super();
    this.state = { message: '' }
  }

  componentDidMount() {
    fetch('/api/example')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({message: json.message});  /*this will cause an invoke of the render() function again */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /* Every time we change the value of a state variable, the render() function is called. That's why we need to make sure in the render() of
  the Root class below that we received the prop 'messageFromServer' (see the if-else condition in the Root class)*/
  render() {
    return (
      <Root messageFromServer={this.state.message} />
    );
  }

}


class MovieList extends Component {
  constructor() {
    super();
    this.state = { movieList: '' }
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        var movies = json.movieList;
        const movieItems = movies.map((movie) =>
          <ul className="listStyle">
            <li><strong>{movie.title}</strong></li>
            <li>Rating: {movie.avgRating}</li>
            <li>Release Year: {movie.releaseYear}</li>
            <li><a href={'/movies/' + movie.movieId}>Go To Movie</a></li>
          </ul>
            );
        this.setState({movieList: movieItems});  /*this will cause an invoke of the render() function again */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Root messageFromServer = {this.state.movieList} />
    );
  }
}

class Root extends Component {

  render() {
    console.log("this will print twice");
    if (this.props.messageFromServer) {
      return (
          <div className="Root">
            <p>
              {this.props.messageFromServer}
            </p>
          </div>);
    } else {
      return null;
    }

  }
}

export default MovieList;
