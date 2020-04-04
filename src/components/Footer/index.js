import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Container, Social } from './styles';

const Footer = () => {
  return (
    <Container>
      <Social href="https://github.com/lucasmallmann">
        <FaGithub size={25} />
      </Social>
      <Social href="https://github.com/lucasmallmann">
        <FaLinkedin size={25} />
      </Social>
      <Social href="https://www.instagram.com/lucas.mallmann23">
        <FaInstagram size={25} />
      </Social>
      <Social href="https://github.com/lucasmallmann">
        <FaTwitter size={25} />
      </Social>
    </Container>
  );
};

export default Footer;
