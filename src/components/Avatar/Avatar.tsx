import classNames from "classnames";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
import { ComponentProps } from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "md" | "lg";
  image?: string;
  description?: string;
} & ComponentProps<"div">;

const avatarSizeMap = {
  xs: "w-5 h-5",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-9 h-9",
};

export default function Avatar({
  size = "xs",
  className,
  image,
  description = "",
  ...rest
}: AvatarProps) {
  const avatarSizeClass = avatarSizeMap[size];

  const avatarComponent = image ? (
    <AvatarImage src={image} altDescription={description} />
  ) : (
    <AvatarIcon />
  );

  return (
    <div
      className={classNames(
        "relative rounded-full bg-slate-100 flex items-center justify-center text-slate-400",
        avatarSizeClass,
        className
      )}
      {...rest}
    >
      {avatarComponent}
    </div>
  );
}
