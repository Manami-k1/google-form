// import { ComponentPropsWithRef, FC } from "react";
// import styled from "styled-components";

// interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

// export const StyledTextArea = styled.textarea`
//   border: none;
//   resize: none;
//   box-sizing: "border-box";
//   border-bottom: 1px solid ${({ theme }) => theme.color.main};
//   width: 70%;
//   padding: 4px;
// `;

// const BaseTextArea: FC<TextAreaProps> = () => {
//   return <StyledTextArea />;
// };
// export default BaseTextArea;

import { ComponentPropsWithRef, FC } from "react";
import styled from "styled-components";

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

export const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
  width: 380px;
  max-width: 100%;
  padding: 4px;
`;

const BaseTextArea: FC<TextAreaProps> = ({ value, onChange, ...props }) => {
  return (
    <StyledTextArea
      value={value || ""} // valueがnullやundefinedの場合は空文字
      onChange={(e) => onChange(e.target.value)} // onChangeでReact Hook Formのvalueを更新
      {...props} // 他のprops（例えばid, nameなど）も透過的に渡す
    />
  );
};

export default BaseTextArea;
