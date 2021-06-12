
import React from 'react';
import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

function Container({ border, children }: ContainerProps) {
  return (
      <StyledContainer border={border}>
          {children}
      </StyledContainer>)
}

export default Container;
