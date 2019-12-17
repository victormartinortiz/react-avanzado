import styled, { css } from 'styled-components';
import { fadeInDown } from '../styles/animation';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    ${fadeInDown}
    position: fixed;
    max-width: 400px;
    top: -20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 5px;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    background: #fff;
    transform: scale(.5);
    z-index: 1;
  `
}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
