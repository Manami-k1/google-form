import React, { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";
import BaseCard from "../BaseCard";
import BaseCardBody from "../BaseCardBody";
import BaseTypography from "../BaseTypography";
import BaseInputName from "../BaseInputName";

interface InputFieldProps extends ComponentPropsWithRef<"div"> {
  label?: string;
  id: string;
  required?: boolean;
}

const StyledInputField = styled.div``;

const BaseInputField: FC<InputFieldProps> = ({
  children,
  label,
  id,
  required,
  ...prop
}) => {
  return (
    <StyledInputField {...prop}>
      <BaseCard>
        <BaseCardBody>
          <BaseInputName>
            {label}
            {required && (
              <BaseTypography as="span" color="red" label={label}>
                *
              </BaseTypography>
            )}
          </BaseInputName>
          {children}
        </BaseCardBody>
      </BaseCard>
    </StyledInputField>
  );
};
export default BaseInputField;
