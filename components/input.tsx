import { HTMLProps, forwardRef } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        className={`border border-gray-200 p-[15px] rounded-xl ${className}`}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
