import { ThemeFontSize } from "@/styles/theme";
import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface BaseTypographyProps extends ComponentPropsWithRef<"p"> {
  children: ReactNode;
  fontWeight?: "bold";
  fontSize?: keyof ThemeFontSize;
  as?: "p" | "span";
  label?: string;
}
const StyledBaseTypography = styled.p<BaseTypographyProps>`
  padding: 0 ${({ as }) => as === "span" && "8px"};
  &:not(:last-child) {
    padding-bottom: ${({ theme }) => theme.spacing.sm};
  }
  font-weight: ${({ fontWeight }) => fontWeight === "bold" && "bold"};
  font-size: ${({ fontSize, theme }) => fontSize && theme.fontSize[fontSize]};
  color: ${({ color, theme }) => color && theme.color[color]};
`;

const BaseTypography: FC<BaseTypographyProps> = ({
  children,
  fontWeight,
  fontSize,
  as,
  ...props
}) => {
  return (
    <StyledBaseTypography
      fontWeight={fontWeight}
      fontSize={fontSize}
      as={as}
      {...props}
    >
      {children}
    </StyledBaseTypography>
  );
};
export default BaseTypography;
