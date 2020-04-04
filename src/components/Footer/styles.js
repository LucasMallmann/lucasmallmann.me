import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 46px;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Social = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 10px;
  transition: 0.3s;
  &:hover {
    color: ${(props) => darken(0.2, props.theme.colors.primary)};
  }
`;
