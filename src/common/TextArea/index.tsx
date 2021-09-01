import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

export default function TextArea({ name, placeholder, onChange, t }: InputProps) {
  return (
      <StyledContainer>
          <Label htmlFor={name}>
              {t(name)}
          </Label>

          <StyledTextArea
              id={name}
              name={name}
              onChange={onChange}
              placeholder={t(placeholder)}
          />
      </StyledContainer>)
}

