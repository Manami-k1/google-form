import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";
import BaseLabel from "../BaseLabel/index";

// omit
interface RadioProps extends ComponentPropsWithRef<"input"> {
  name: string;
  label: string;
}
const StyledRadio = styled.input`
  margin: ${({ theme }) => theme.spacing.sm};
`;

const BaseRadio: FC<RadioProps> = ({ id, name, label, ...prop }) => {
  return (
    <BaseLabel>
      <StyledRadio type="radio" name={id} {...prop} />
      {label}
    </BaseLabel>
  );
};
export default BaseRadio;
