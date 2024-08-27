import type { InputHTMLAttributes } from "react";

interface InputProps {
  $id: InputHTMLAttributes<HTMLInputElement>["id"];
  $type: InputHTMLAttributes<HTMLInputElement>["type"];
  $defaultValue?: InputHTMLAttributes<HTMLInputElement>["defaultValue"];
  $value?: InputHTMLAttributes<HTMLInputElement>["value"];
  $required?: InputHTMLAttributes<HTMLInputElement>["required"];
  $onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  $checked?: InputHTMLAttributes<HTMLInputElement>["checked"];
}

export type { InputProps };
