import { ReactNode, type SVGProps } from "react";

type IconName = "appointment" | "arrow-left" | "eye-off" | "eye-on" | "map";

type IconProps = Readonly<{
  name: IconName;
  children?: ReactNode;
  childrenClassName?: string;
}>;

export function Icon({
  name,
  children,
  childrenClassName,
  ...props
}: SVGProps<SVGSVGElement> & IconProps) {
  if (children) {
  }

  return (
    <svg {...props}>
      <use href={`./sprite.svg#${name}`} />
    </svg>
  );
}
