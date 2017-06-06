import React from 'react';

class SongDetail extends React.Component {
  render(){
    if (this.props.setsong === null) return null;
    return (
      <div>
      <h3>Song: {this.props.song.name}</h3>
      <img src={this.props.song.image.label}/>
      <p>Artist: {this.props.song.artist.label}</p>
      <p>Category: {this.props.song.category.attributes.term}</p>
      <p>Release Date: {this.props.song.releaseDate.attributes.label}</p>
      </div>
    );
  }
}

export default SongDetail;
