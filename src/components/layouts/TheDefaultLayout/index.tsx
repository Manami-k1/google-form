import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface DefaultLayoutProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

const StyledDefaultLayout = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 700px;
  margin: auto;
`;

const TheDefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return <StyledDefaultLayout>{children}</StyledDefaultLayout>;
};
export default TheDefaultLayout;
