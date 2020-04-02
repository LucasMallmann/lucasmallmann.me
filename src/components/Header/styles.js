import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12%;
  background-color: #2f4859;

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
    color: #f8f8f8;
    font-size: 18px;
    white-space: nowrap;
    margin-left: 12px;
  }
`;
