import { HTMLProps, forwardRef } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <input type={type} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export { Input };
