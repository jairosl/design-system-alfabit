export type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const generalStyle = "rounded-md px-6 py-2";
  const Btn = (classes: string) => {
    return (
      <button
        className={`${generalStyle} ${classes} ${className}`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  };
  return Btn(disabled ? "bg-disabled text-disabled" : "bg-primary text-white");
}
