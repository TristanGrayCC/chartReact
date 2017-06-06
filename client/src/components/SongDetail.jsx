import React from 'react';

class SongDetail extends React.Component {
  render(){
    if (this.props.song === null) return null;
    console.log(this.props.song)
    return (
      <div>
      <h3>Song: {this.props.song["im:name"].label}</h3>
      <img src={this.props.song["im:image"][0].label}/>
      <p>Artist: {this.props.song["im:artist"].label}</p>
      <p>Category: {this.props.song.category.attributes.term}</p>
      <p>Release Date: {this.props.song["im:releaseDate"].attributes.label}</p>
      </div>
    );
  }
}

export default SongDetail;
