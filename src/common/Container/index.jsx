
import React from 'react';
import { StyledContainer } from "./styles";

// eslint-disable-next-line react/prop-types
function Container({ border, children }) {
  return (
      <StyledContainer border={border}>
          {children}
      </StyledContainer>)
}

export default Container;
