/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  color: #fff;
  background: #8d00ff;
  text-align: center;
  border-radius: 3px;
  &[disabled] {
    opacity: 0.3;
  }
`;
