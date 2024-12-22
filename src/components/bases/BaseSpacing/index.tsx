import { ElementType, FC, ReactNode } from "react";
import styled from "styled-components";
import { ThemeSpacing } from "@/styles/theme";

interface SpacingProps {
  children: ReactNode;
  el?: ElementType;
  top?: keyof ThemeSpacing;
  right?: keyof ThemeSpacing;
  bottom?: keyof ThemeSpacing;
  left?: keyof ThemeSpacing;
}

interface StyledSpacingProps {
  top?: keyof ThemeSpacing;
  right?: keyof ThemeSpacing;
  bottom?: keyof ThemeSpacing;
  left?: keyof ThemeSpacing;
}

export const StyledSpacing = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["top", "right", "bottom", "left"].includes(prop),
})<StyledSpacingProps>`
  margin-top: ${({ theme, top }) => (top ? theme.spacing[top] : undefined)};
  margin-right: ${({ theme, right }) =>
    right ? theme.spacing[right] : undefined};
  margin-bottom: ${({ theme, bottom }) =>
    bottom ? theme.spacing[bottom] : undefined};
  margin-left: ${({ theme, left }) => (left ? theme.spacing[left] : undefined)};
`;

const BaseSpacing: FC<SpacingProps> = ({
  children,
  el,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <StyledSpacing as={el} top={top} right={right} bottom={bottom} left={left}>
      {children}
    </StyledSpacing>
  );
};

export default BaseSpacing;
