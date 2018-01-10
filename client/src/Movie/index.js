import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './Movie.css';


class MovieContainer extends Component {
  constructor() {
    super();
    this.state = { movieList: '', genreList: '' }
  }
  componentDidMount() {
    console.log(this.props.match.url)
    fetch('/api' + this.props.match.url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        var movie = <div className="content">
                      <h2 className="title">{json.title}</h2>
                      <p>Avg Rating: {json.avgRating}</p>
                      <p>Release Year: {json.releaseYear}</p>
                      <p>TV Rating: {json.mpaa}</p>
                      <h4>Plot</h4>
                      <p>{json.plotSummary}</p>
                      <a href={'http://www.imdb.com/title/tt' + json.imdbMovieId}>Link to Imdb</a>
                    </div>;
                    //var movies = json.movieList;
         var genres = json.genres;
         const genre = genres.map((gen) => <li>{gen}</li>);

        this.setState({movieList: movie, genreList: genre});  /*this will cause an invoke of the render() function again */
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Movie messageFromServer = {this.state.movieList}  genreServer = {this.state.genreList}/>
    );
  }
}

class Movie extends Component {
  render() {
    if(true) {
    return (
      <div>
        <div className="content box back">
          {this.props.messageFromServer}
          <h4 className="subtitle">Genres</h4>
          <ul>{this.props.genreServer}</ul>
        </div>
        <p>
          <Link to={`/`}>Back to Home</Link>
        </p>
      </div>
    );
  } else {
    return <h2>Error</h2>;
  }
  }
}

export default MovieContainer;
