export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
) {
  switch (variant) {
    case "primary":
      return disabled ? "bg-disabled text-disabled" : "bg-primary text-white";

    case "secondary":
      return disabled
        ? "bg-disabled text-disabled"
        : "bg-quaternary text-primary";

    case "tertiary":
      return disabled ? "text-disabled" : "text-primary";

    default:
      break;
  }
  return;
}

export default function Button({
  children,
  className,
  disabled,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-md px-6 py-2 ${getVariant(
        variant,
        disabled
      )} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
