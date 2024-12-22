import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface InputNameProps extends ComponentPropsWithRef<"div"> {
  flex?: boolean;
}

const StyledInputName = styled.div<InputNameProps>`
  display: ${({ flex }) => (flex ? "flex" : "block")};
  width: fit-content;
  padding-bottom: 16px;
`;

const BaseInputName: FC<InputNameProps> = ({ flex, children }) => {
  return <StyledInputName flex={flex}>{children}</StyledInputName>;
};
export default BaseInputName;
