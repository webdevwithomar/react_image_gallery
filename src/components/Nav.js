import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><Link to='/nature'>Nature</Link></li>
          <li><Link to='/tree'>Tree</Link></li>
          <li><Link to='/mountain'>Mountain</Link></li>
        </ul>
      </nav>
    )
  }
}
