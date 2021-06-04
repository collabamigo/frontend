
import React from 'react';
import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export function Button({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) {
  return (
      <StyledButton
          color={color}
          fixedWidth={fixedWidth}
          onClick={onClick}
      >
          {children}
      </StyledButton>)
}
