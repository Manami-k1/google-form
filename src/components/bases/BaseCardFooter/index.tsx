import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface BaseCardFooterProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}
const StyledBaseCardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing["lg"]};
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
`;

const BaseCardFooter: FC<BaseCardFooterProps> = ({ children }) => {
  return <StyledBaseCardFooter>{children}</StyledBaseCardFooter>;
};
export default BaseCardFooter;
