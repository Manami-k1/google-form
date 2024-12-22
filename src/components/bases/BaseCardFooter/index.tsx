// import { ThemeSpacing } from "@/styles/theme";
// import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
// import styled from "styled-components";

// interface BaseCardFooterProps extends ComponentPropsWithRef<"div"> {
//   children: ReactNode;
//   px?: keyof ThemeSpacing;
// }
// const StyledBaseCardFooter = styled.div`
//   padding: ${({ px, theme }) => px && theme.spacing["lg"]};
//   padding-top: ${({ px, theme }) => px && theme.spacing[px]};
//   padding-bottom: ${({ px, theme }) => px && theme.spacing[px]};
//   border-bottom: 1px solid ${({ theme }) => theme.color.main};
// `;

// const BaseCardFooter: FC<BaseCardFooterProps> = ({ children, px = "lg" }) => {
//   return <StyledBaseCardFooter px={px}>{children}</StyledBaseCardFooter>;
// };
// export default BaseCardFooter;
import { ThemeSpacing } from "@/styles/theme";
import React, { ComponentPropsWithRef, FC, ReactNode } from "react";
import styled from "styled-components";

// BaseCardFooterのProps
interface BaseCardFooterProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
  px?: keyof ThemeSpacing;
}

// StyledBaseCardFooter用のProps
// interface StyledBaseCardFooterProps {
//   px?: keyof ThemeSpacing;
// }

const StyledBaseCardFooter = styled.div<BaseCardFooterProps>`
  padding: ${({ px, theme }) => px && theme.spacing["lg"]};
  padding-top: ${({ px, theme }) => px && theme.spacing[px]};
  padding-bottom: ${({ px, theme }) => px && theme.spacing[px]};
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
`;

const BaseCardFooter: FC<BaseCardFooterProps> = ({
  children,
  px = "lg",
  ...rest
}) => {
  return (
    <StyledBaseCardFooter px={px} {...rest}>
      {children}
    </StyledBaseCardFooter>
  );
};

export default BaseCardFooter;
