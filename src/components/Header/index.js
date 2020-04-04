import React from 'react';
import { Link } from 'gatsby';

import { Container, Avatar, Nav } from './styles';

const Header = () => {
  return (
    <Container>
      <Avatar>
        <img
          src="https://avatars3.githubusercontent.com/u/23031413?v=4"
          alt="avatar"
        />
        <span>Lucas Mallmann</span>
      </Avatar>

      <Nav>
        <Link to="/">hi</Link>
        <Link to="/about">labs</Link>
        <Link to="/about">blog</Link>
      </Nav>
    </Container>
  );
};

export default Header;
