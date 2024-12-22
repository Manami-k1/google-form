import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    color: ${({ theme }) => theme.color.black}; 
    font-size: 15px; 
    line-height: 1.5;
    background: ${({ theme }) => theme.color.main};
    font-family: serif;
  }
  label {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  input {
    color: ${({ theme }) => theme.color.black};
  }
  input[type=radio] {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
    }
    select {
      color: ${({ theme }) => theme.color.black};
    }
`;
