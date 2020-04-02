import React from 'react';
import { Link } from 'gatsby';

import { Container, Avatar } from './styles';

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

      <nav>
        <Link to="/about">Sobre</Link>
      </nav>
    </Container>
  );
};

export default Header;
