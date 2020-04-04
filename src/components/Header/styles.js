import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12%;
  background-color: ${(props) => props.theme.colors.headerBackground};

  a {
    color: #f8f8f8;
    font-size: 18px;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;

  display: flex;

  align-items: center;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  span {
    color: ${(props) => props.theme.colors.link};
    font-size: 22px;
    white-space: nowrap;
    margin-left: 12px;
  }
`;

export const Nav = styled.nav`
  a {
    position: relative;
    font-size: 20px;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: -3px;
      left: 0;
      height: 2px;
      margin-top: 5px;
      background-color: ${(props) => props.theme.colors.link};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover {
      color: ${(props) => props.theme.colors.link};
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  a:not(:last-child) {
    margin-right: 16px;
  }
`;
