import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { ThemeFontSize } from "@/styles/theme";

interface InputProps extends ComponentPropsWithRef<"input"> {
  fontSize?: keyof ThemeFontSize;
  fontWeight?: "normal" | "bold";
  variant?: "normal" | "border";
}

const StyledInput = styled.input<InputProps>`
  border: none;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.sm};
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-weight: ${({ fontWeight }) => fontWeight};
  width: 280px;
  max-width: 100%;
  border: ${({ variant }) => variant === "normal" && "none"};
`;

const BaseInput: FC<InputProps> = ({ fontSize, fontWeight, ...prop }) => {
  return <StyledInput {...prop} fontSize={fontSize} fontWeight={fontWeight} />;
};
export default BaseInput;
