import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface SelectProps extends ComponentPropsWithRef<"input"> {
  name: string;
  options: string[];
}
const StyledSelect = styled.select`
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  width: 200px;
`;

const BaseSelect: FC<SelectProps> = ({ id, name, options, ...prop }) => {
  return (
    <StyledSelect>
      <option hidden value="">
        選択してください
      </option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};
export default BaseSelect;
