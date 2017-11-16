import React from 'react';

const NavBar = (props) => (
  <nav>
    <a href="/">KUYiK</a>
    //onKeyPress should invoke search function
    <input onKeyPress={(e) => {
      if (e.keyCode === 13) {
        props.search(e.target.value);
      }
    }} value="Search"></input>
    <a href="#">Sign In</a>
    <a href="#">Sign Up</a>
  </nav>
);

export default NavBar;