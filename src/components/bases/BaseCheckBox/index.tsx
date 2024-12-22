// import { FC, ComponentPropsWithRef } from "react";
// import styled from "styled-components";
// import BaseLabel from "../BaseLabel"; // ラベルを使う

// interface CheckBoxProps extends ComponentPropsWithRef<"input"> {
//   labels: string[]; // チェックボックスのラベルの配列
// }

// const StyledCheckBox = styled.input`
//   margin: ${({ theme }) => theme.spacing.sm};
//   width: fit-content;
// `;

// const BaseCheckBox: FC<CheckBoxProps> = ({ labels, ...props }) => {
//   return (
//     <>
//       {labels.map((label, index) => (
//         <BaseLabel key={index} htmlFor={`${props.name}-${index}`}>
//           <StyledCheckBox
//             type="checkbox"
//             id={`${props.name}-${index}`} // ユニークなidを生成
//             {...props} // onChange, value などのプロパティを伝播
//           />
//           {label}
//         </BaseLabel>
//       ))}
//     </>
//   );
// };

// export default BaseCheckBox;

import { FC, ComponentPropsWithRef } from "react";
import styled from "styled-components";
import BaseLabel from "../BaseLabel"; // ラベルを使う

interface CheckBoxProps extends ComponentPropsWithRef<"input"> {
  labels: string[];
}

const StyledCheckBox = styled.input`
  margin: ${({ theme }) => theme.spacing.sm};
  width: fit-content;
`;

const BaseCheckBox: FC<CheckBoxProps> = ({ labels, ...props }) => {
  return (
    <>
      {labels.map((label, index) => (
        <BaseLabel key={index} htmlFor={`${props.name}-${index}`}>
          <StyledCheckBox
            type="checkbox"
            id={`${props.name}-${index}`} // ユニークなidを生成
            {...props} // onChange, value などのプロパティを伝播
          />
          {label}
        </BaseLabel>
      ))}
    </>
  );
};

export default BaseCheckBox;
