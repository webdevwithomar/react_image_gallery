import React from 'react';
import Search from './Search';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Search searchPhoto={this.props.searchPhoto} />
        <Nav />
      </header>
    )
  }
}
