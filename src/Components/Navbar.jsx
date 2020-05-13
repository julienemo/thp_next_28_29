import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

const Navbar = () => {
  console.log('in nav');

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Projects</Link>
    </>
  );
};

export default Navbar;
