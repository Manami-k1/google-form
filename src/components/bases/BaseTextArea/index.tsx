import { ComponentPropsWithRef, FC } from "react";
import styled from "styled-components";

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

export const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  width: 70%;
`;

const BaseTextArea: FC<TextAreaProps> = () => {
  return <StyledTextArea />;
};
export default BaseTextArea;
