import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../styles/animation';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: auto;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #888;

  &[aria-current] {
    color: #000;

    &::after {
      ${fadeIn({ time: '.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 15px;
    }
  }
`;
