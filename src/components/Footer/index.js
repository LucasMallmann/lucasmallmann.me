import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Container, Social } from './styles';

const Footer = () => {
  return (
    <Container>
      <Social href="https://github.com/lucasmallmann" title="Github">
        <FaGithub size={25} />
      </Social>
      <Social href="https://github.com/lucasmallmann" title="Linkedin">
        <FaLinkedin size={25} />
      </Social>
      <Social
        href="https://www.instagram.com/lucas.mallmann23"
        title="Instagram"
      >
        <FaInstagram size={25} />
      </Social>
      <Social href="https://github.com/lucasmallmann" title="Twitter">
        <FaTwitter size={25} />
      </Social>
    </Container>
  );
};

export default Footer;
