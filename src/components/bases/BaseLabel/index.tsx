import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface LabelProps extends ComponentPropsWithRef<"label"> {}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    padding-bottom: ${({ theme }) => theme.spacing["sm"]};
  }
  width: fit-content;
`;

const BaseLabel: FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};
export default BaseLabel;
