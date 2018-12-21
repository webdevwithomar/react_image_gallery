import React from 'react';

export default class Photo extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.url} alt="" />
      </li>
    )
  }
}