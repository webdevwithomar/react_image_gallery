import React from 'react';
import Search from './Search';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Search />
        <Nav />
      </header>
    )
  }
}

export default Header;