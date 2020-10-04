import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: #fff;
  cursor: pointer;
  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[7]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
