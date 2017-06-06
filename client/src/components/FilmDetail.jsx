import React from 'react';

class FilmDetail extends React.Component {
  render(){
    if (this.props.film === null) return null;
    return (
      <div>
      <h3>Title: {this.props.film.show_title}</h3>
      <img src={this.props.film.poster}/>
      <p>Director: {this.props.film.director}</p>
      <p>Category: {this.props.film.category}</p>
      <p>Release Year: {this.props.film.release_year}</p>
      <p>Rating: {this.props.film.rating}</p>
      </div>
    );
  }
}

export default FilmDetail;
