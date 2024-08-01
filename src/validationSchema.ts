import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .min(1, "※メールアドレスが入力されていません")
    .max(50, "全角50文字以内で入力してください。")
    .regex(
      /^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$/,
      "※メールアドレスの形式が間違っています"
    ),
  gender: z.enum(["男性", "女性"], {
    errorMap: () => ({ message: "※性別を選択してください" }),
  }),
  kind: z.enum(["セミナーについて", "サービスについて", "企業について"], {
    errorMap: () => ({ message: "※問い合わせ種別を選択してください" }),
  }),
  inquiry: z.string().min(1, "※問い合わせ内容を入力してください"),
  agreement: z
    .boolean()
    .refine((val) => val === true, "※個人情報利用規約に同意する必要があります"),
});
