import styled from 'styled-components';
export const Div = styled.div`
  margin: 20px 0;
`;
export const P = styled.p`
  position: relative;
  margin-bottom: 5px;
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 20%;
    height: 2px;
    background-color: #a8abab;
  }
`;
export const Mes = styled.p`
  margin-top: 10px;
`;
