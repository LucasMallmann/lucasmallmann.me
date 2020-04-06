import styled, { css } from 'styled-components';

const styledLink = css` position: relative;
font-size: 20px;

&:before {
  content: '';
  position: absolute;
  width: 100%;
  bottom: -3px;
  left: 0;
  height: 2px;
  margin-top: 5px;
  background-color: inherit;
  visibility: hidden;
  background: ${(props) => props.color};
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

&:hover {
  /* color: ${(props) => props.theme.colors.link}; */
}

&:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

a:not(:last-child) {
  margin-right: 16px;
}`;

export const Container = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  color: ${(props) => props.color};

  ${(props) => props.decorated && styledLink}
`;
