import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface InputNameProps extends ComponentPropsWithRef<"div"> {}

const StyledInputName = styled.div<InputNameProps>`
  display: block;
  padding-bottom: 20px;
`;

const BaseInputName: FC<InputNameProps> = ({ children }) => {
  return <StyledInputName>{children}</StyledInputName>;
};
export default BaseInputName;
