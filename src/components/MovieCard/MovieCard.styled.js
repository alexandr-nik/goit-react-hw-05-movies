import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const H3 = styled.h3`
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;
export const Averege = styled.p`
  margin-bottom: 10px;
`;
export const P = styled.p`
  position: relative;
  margin-bottom: 10px;
  &::after {
    position: absolute;
    content: '';
    bottom: -4px;
    left: 0;
    width: 30%;
    height: 2px;
    background-color: #a8abab;
  }
`;
export const Ul = styled.ul`
  padding: 0;
  display: flex;
  gap: 10px;
`;
export const StyleNavLink = styled(NavLink)`
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid #a8abab;
  background-color: #a8abab;
  border-radius: 4px;
  margin-right: 5px;
  &:hover {
    color: white;
  }
`;
export const Box = styled.div`
  padding: 20px 0;
`;
export const ButtonBack = styled.button`
  margin-bottom: 20px;
  border: 1px solid #a8abab;
  background-color: #a8abab;
  border-radius: 4px;
  padding: 3px 7px;
  &:hover {
    color: white;
  }
`;
