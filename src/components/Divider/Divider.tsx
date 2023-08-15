import { ComponentProps } from "react";
import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" | "black";
  children?: React.ReactNode;
} & ComponentProps<"div">;

const colorClassMap = {
  light: "bg-light",
  dark: "bg-dark",
  black: "bg-black",
};

export default function Divider({
  width,
  height = "h-[1px]",
  children,
  bgColor = "black",
  ...rest
}: DividerProps) {
  const colorClass = colorClassMap[bgColor];
  const barClass = classNames(
    children ? "w-1/3 bg-black" : "w-1/2",
    height,
    colorClass
  );

  return (
    <div
      className={classNames(width, "flex items-center justify-center")}
      {...rest}
    >
      <div className={barClass} />
      {children && <div className="px-3">{children}</div>}
      <div className={barClass} />
    </div>
  );
}
