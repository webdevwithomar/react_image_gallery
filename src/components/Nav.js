import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/nature'>Nature</NavLink></li>
          <li><NavLink to='/tree'>Tree</NavLink></li>
          <li><NavLink to='/mountain'>Mountain</NavLink></li>
        </ul>
      </nav>
    )
  }
}
