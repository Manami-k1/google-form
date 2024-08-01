import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface BaseHeadingProps extends ComponentPropsWithRef<"h1"> {
  children: ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const StyledBaseHeading = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.accent};
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 8px;
`;

const BaseHeading: FC<BaseHeadingProps> = ({ children, as }) => {
  return <StyledBaseHeading as={as}>{children}</StyledBaseHeading>;
};
export default BaseHeading;
