import { FC, ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends ComponentPropsWithRef<"input"> {}

const StyledInput = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  width: 50%;
  min-width: 300px;
`;

const BaseInput: FC<InputProps> = ({ ...prop }) => {
  return <StyledInput {...prop} />;
};
export default BaseInput;
