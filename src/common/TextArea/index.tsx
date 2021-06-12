import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

function TextArea({ name, placeholder, onChange, t }: InputProps) {
  return (<StyledContainer>
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

export default withTranslation()(TextArea);
