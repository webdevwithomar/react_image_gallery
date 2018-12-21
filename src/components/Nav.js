import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>
    )
  }
}
