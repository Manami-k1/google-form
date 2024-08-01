import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validationSchema"; // Adjust the path as necessary
import {
  BaseInputField,
  BaseInput,
  BaseTypography,
  BaseRadio,
  BaseSelect,
  BaseTextArea,
  BaseCheckBox,
  BaseButton,
  BaseCard,
  BaseCardBody,
  BaseHeading,
  BaseSpacing,
  BaseInnerLink,
  BaseCardFooter,
} from "@/components/bases"; // Adjust the imports according to your component library

const IndexPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <BaseCard type="main">
        <BaseCardBody>
          <BaseHeading as="h1">タイトルタイトル</BaseHeading>
          <BaseSpacing top="2xl">
            <BaseTypography>
              このたび、ミーティングを設けることにしました。
              <br />
              つきましては、都合の良い曜日と時間帯をお知らせください。
            </BaseTypography>
            <BaseTypography>
              集合場所: 郵便番号 都道府県 市区長村 番地
            </BaseTypography>
          </BaseSpacing>
        </BaseCardBody>
        <BaseCardBody px="lg">
          <BaseTypography fontWeight="bold">
            melonseasonss@gmail.com
          </BaseTypography>
          <BaseInnerLink href="change-account" fontSize="sm">
            アカウントを切り替える
          </BaseInnerLink>
        </BaseCardBody>
        <BaseCardFooter px="lg">
          <BaseTypography color="red">
            <BaseTypography as="span">*</BaseTypography>
            必須の質問です
          </BaseTypography>
        </BaseCardFooter>
      </BaseCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInputField label="メールアドレス" id="email" required>
          <BaseInput
            {...register("email")}
            type="email"
            placeholder="メールアドレス"
          />
          {/* {errors.email && (
            <BaseTypography color="red" fontSize="xs">
              {errors.email.message}
            </BaseTypography>
          )} */}
        </BaseInputField>
        <BaseInputField label="性別" id="gender" required>
          {["男性", "女性"].map((label) => (
            <BaseRadio
              key={label}
              type="radio"
              label={label}
              id="gender"
              {...register("gender")}
            />
          ))}
          {/* {errors.gender && (
            <BaseTypography color="red" fontSize="xs">
              ※性別を選択してください
            </BaseTypography>
          )} */}
        </BaseInputField>
        <BaseInputField label="問い合わせ種別" id="kind" required>
          <BaseSelect
            options={["セミナーについて", "サービスについて", "企業について"]}
            {...register("kind")}
          />
          {/* {errors.kind && (
            <BaseTypography color="red" fontSize="xs">
              ※問い合わせ種別を選択してください
            </BaseTypography>
          )} */}
        </BaseInputField>
        <BaseInputField label="問い合わせ内容" id="inquiry" required>
          <BaseTextArea {...register("inquiry")} />
          {/* {errors.inquiry && (
            <BaseTypography color="red" fontSize="xs">
              ※問い合わせ内容を入力してください
            </BaseTypography>
          )} */}
        </BaseInputField>
        <BaseInputField id="agreement" required>
          <BaseCheckBox
            labels={["個人情報利用規約に同意する"]}
            {...register("agreement")}
          />
          {/* {errors.agreement && (
            <BaseTypography color="red" fontSize="xs">
              ※個人情報利用規約に同意する必要があります
            </BaseTypography>
          )} */}
        </BaseInputField>
        <BaseButton type="submit">送信</BaseButton>
      </form>
    </>
  );
};

export default IndexPage;
