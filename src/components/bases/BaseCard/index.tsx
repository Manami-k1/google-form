import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface BaseCardProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
  type?: "main";
}
const StyledBaseCard = styled.div<BaseCardProps>`
  ${({ type, theme }) =>
    type &&
    `
    border-top: 10px solid ${theme.color.accent};
  `}
  border-radius: 8px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: #ddd 0px 0px 4px;
  margin-bottom: ${({ theme }) => theme.spacing["lg"]};
`;

const BaseCard: FC<BaseCardProps> = ({ children, type }) => {
  return <StyledBaseCard type={type}>{children}</StyledBaseCard>;
};
export default BaseCard;
