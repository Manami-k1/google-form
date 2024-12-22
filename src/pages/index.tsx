import React from "react";
import { Controller, useForm } from "react-hook-form";
import { schema } from "../validationSchema"; // バリデーションスキーマのインポート
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@/components/bases"; // コンポーネントライブラリのインポート
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema), // Zodでのバリデーション
  });

  const onSubmit = (data: any) => {
    // try {
    //   schema.parse(data); // Zod バリデーションを手動で実行
    //   console.log("Form submitted", data); // 送信データ
    router.push("/success"); // 遷移先URL
    // } catch (err) {
    //   console.log("Zod validation failed:", err.errors); // Zod のエラーメッセージを表示
    // }
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([field, error]) => {
        console.log(`Field: ${field}, Error: ${error?.message}`);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseCard type="main">
          <BaseCardBody>
            {/* タイトル部分を編集可能なBaseInputでラップ */}
            <Controller
              name="title"
              control={control}
              defaultValue="タイトルタイトル" // 初期値を設定
              render={({ field }) => (
                <BaseHeading as="h1">
                  <BaseInput
                    fontSize="2xl"
                    fontWeight="bold"
                    variant="normal"
                    {...field}
                    type="text"
                    placeholder="タイトルを入力"
                  />
                </BaseHeading>
              )}
            />
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
            <BaseTypography fontWeight="bold">aaa.aaa@gmail.com</BaseTypography>
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

        <BaseInputField label="メールアドレス" id="email" required>
          <BaseInput
            {...register("email")}
            type="email"
            placeholder="メールアドレス"
          />
          {errors.email && (
            <BaseTypography color="red" fontSize="xs">
              {errors.email && typeof errors.email.message === "string"
                ? errors.email.message
                : null}
            </BaseTypography>
          )}
        </BaseInputField>

        <BaseInputField label="性別" id="gender" required>
          <div>
            {["男性", "女性"].map((label) => (
              <Controller
                key={label}
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <BaseRadio
                    {...field}
                    type="radio"
                    label={label}
                    id="gender"
                    value={label} // ラジオボタンのvalueを設定
                  />
                )}
              />
            ))}
          </div>
          {errors.gender && (
            <BaseTypography color="red" fontSize="xs">
              {/* ※性別を選択してください */}
              {errors.gender && typeof errors.gender.message === "string"
                ? errors.gender.message
                : null}
            </BaseTypography>
          )}
        </BaseInputField>

        <BaseInputField label="問い合わせ種別" id="kind" required>
          <Controller
            name="kind"
            control={control}
            render={({ field }) => (
              <BaseSelect
                {...field} // ControllerからのfieldをSpread
                value={field.value || ""} // nullやundefinedを防ぐ
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  field.onChange(e.target.value); // 選択した値をreact-hook-formに渡す
                }}
                options={[
                  "セミナーについて",
                  "サービスについて",
                  "企業について",
                ]}
              />
            )}
          />
          {errors.kind && (
            <BaseTypography color="red" fontSize="xs">
              {errors.kind && typeof errors.kind.message === "string"
                ? errors.kind.message
                : null}
            </BaseTypography>
          )}
        </BaseInputField>

        <BaseInputField label="問い合わせ内容" id="inquiry" required>
          <Controller
            name="inquiry"
            control={control}
            defaultValue=""
            render={({ field }) => <BaseTextArea {...field} />}
          />
          {errors.inquiry && (
            <BaseTypography color="red" fontSize="xs">
              {errors.inquiry && typeof errors.inquiry.message === "string"
                ? errors.inquiry.message
                : null}
            </BaseTypography>
          )}
        </BaseInputField>

        <BaseInputField id="agreement" label="利用規約" required>
          <Controller
            name="agreement"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <BaseCheckBox
                {...field} // これでfieldに含まれるonChangeやvalueなどをBaseCheckBoxに渡す
                labels={["利用規約に同意する"]}
              />
            )}
          />
          {errors.agreement && (
            <BaseTypography color="red" fontSize="xs">
              {errors.agreement && typeof errors.agreement.message === "string"
                ? errors.agreement.message
                : null}
              {/* Zodで設定したエラーメッセージ */}
            </BaseTypography>
          )}
        </BaseInputField>

        <BaseButton type="submit" onSubmit={handleSubmit(onSubmit)}>
          送信
        </BaseButton>
      </form>
    </>
  );
};

export default IndexPage;
