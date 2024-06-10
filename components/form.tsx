import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { Label } from "./label";
import { Input } from "./input";

export function Field({
  labelProps,
  inputProps,
}: {
  labelProps: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col">
      <Label {...labelProps} />
      <Input {...inputProps} />
    </div>
  );
}
