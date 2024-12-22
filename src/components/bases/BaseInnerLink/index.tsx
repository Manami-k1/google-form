import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ThemeColor, ThemeFontSize } from "@/styles/theme";

interface BaseInnerLinkProps extends ComponentPropsWithRef<"a"> {
  children: ReactNode;
  href: string;
  fontWeight?: "normal" | "bold";
  fontSize?: keyof ThemeFontSize;
  color?: keyof ThemeColor;
}

const StyledBaseInnerLink = styled.a<BaseInnerLinkProps>`
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : "normal"};
  font-size: ${({ fontSize, theme }) => fontSize && theme.fontSize[fontSize]};
  color: ${({ color, theme }) =>
    color ? theme.color[color] : theme.color.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BaseInnerLink: FC<BaseInnerLinkProps> = ({
  children,
  href,
  fontWeight,
  fontSize,
  color,
  ...props
}) => {
  return (
    <StyledBaseInnerLink
      href={href}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      {...props}
    >
      {children}
    </StyledBaseInnerLink>
  );
};

export default BaseInnerLink;
