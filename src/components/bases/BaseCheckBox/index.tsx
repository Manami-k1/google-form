import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";
import BaseLabel from "../BaseLabel/index";

interface CheckBoxProps extends ComponentPropsWithRef<"input"> {
  name: string;
  labels: string[];
}
const StyledCheckBox = styled.input`
  margin: ${({ theme }) => theme.spacing.sm};
`;

const BaseCheckBox: FC<CheckBoxProps> = ({ id, name, labels, ...prop }) => {
  return labels.map((label) => (
    <BaseLabel>
      <StyledCheckBox type="checkbox" name={id} {...prop} />
      {label}
    </BaseLabel>
  ));
};
export default BaseCheckBox;
