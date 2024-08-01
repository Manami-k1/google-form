import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";
import { ThemeSpacing } from "@/styles/theme";

interface BaseCardBodyProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
  px?: keyof ThemeSpacing;
}
const StyledBaseCardBody = styled.div<BaseCardBodyProps>`
  padding: ${({ px, theme }) => px && theme.spacing["2xl"]};
  padding-top: ${({ px, theme }) => px && theme.spacing[px]};
  padding-bottom: ${({ px, theme }) => px && theme.spacing[px]};
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.main};
  }
`;

const BaseCardBody: FC<BaseCardBodyProps> = ({ children, px = "2xl" }) => {
  return <StyledBaseCardBody px={px}>{children}</StyledBaseCardBody>;
};
export default BaseCardBody;
