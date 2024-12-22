import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  type?: "button" | "submit";
}

const StyledButton = styled.button`
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.white};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.spacing.xs};
  &:hover {
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.accent};
    cursor: pointer;
  }
`;

const BaseButton: FC<ButtonProps> = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
export default BaseButton;
