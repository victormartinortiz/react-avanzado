/* eslint-disable import/prefer-default-export */
import { css, keyframes } from 'styled-components';

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;

const fadeInDownKeyFrames = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0) scale(.5);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(.5);
  }
`;

export const fadeInDown = ({ time = '1s' } = {}) =>
  css`
    animation: ${time} ${fadeInDownKeyFrames};
  `;
