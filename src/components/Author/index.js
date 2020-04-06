import React from 'react';

import { Container, Greeting } from './styles';
import ExternalLink from '../ExternalLink';

const Author = () => {
  return (
    <Container>
      <Greeting>Fala galera 🚀</Greeting>
      <p>
        Meu nome é Lucas Mallmann, tenho 21 anos e sou desenvolvedor Fullstack!
        Atualmente estou trabalhando na{' '}
        <ExternalLink href="https://pling.net.br" decorated>
          Pling
        </ExternalLink>
        . Sou apaixonado por Desenvolvimento de Software, principalmente o
        assunto é front-end 😄.
      </p>

      <p>
        Me importo muito com a disseminação do conhecimento, compartilhando o
        máximo de conhecimento possível, pois sei que assim irei impactar de
        forma positiva a vida de alguém. Afinal, este blog não existiria se não
        fosse por isso!
      </p>
    </Container>
  );
};

export default Author;
