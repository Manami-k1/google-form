import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface SelectProps extends ComponentPropsWithRef<"select"> {
  name: string;
  options: string[];
  value: string; // valueを追加
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const StyledSelect = styled.select`
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  width: 280px;
  max-width: 100%;
`;

const BaseSelect: FC<SelectProps> = ({
  id,
  name,
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledSelect
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      <option value="">選択してください</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
export default BaseSelect;
