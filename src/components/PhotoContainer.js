import React from 'react';
import Photo from './Photo';

export default class PhotoContainer extends React.Component {
  render() {
    return (
      <div className="photo-container">
        <h2>Search Results</h2>
        <ul>
          {
            this.props.gallery.map(image => {
              return (
                <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}