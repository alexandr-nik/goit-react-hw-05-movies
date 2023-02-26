import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Li = styled.li`
  flex-basis: calc((100% / 4) - 30px);
  box-shadow: 4px 6px 5px 0px rgba(0, 0, 0, 0.5);
`;
export const H3 = styled.h3`
  text-align: center;
  margin-bottom: 5px;
  min-height: 45px;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  max-width: 100%;
  height: auto;
`;
export const P = styled.p`
  padding: 5px;
  overflow: auto;
`;
export const CustomLink = styled(Link)`
  height: 100%;
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    transform: scale(1.5);
  }
`;
