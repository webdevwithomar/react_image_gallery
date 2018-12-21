import React from 'react';
import Photo from './Photo';

class PhotoContainer extends React.Component {
  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;