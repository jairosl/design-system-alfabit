export type LinkProps = {
  disabled?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({
  children,
  className,
  href,
  disabled,
  ...rest
}: LinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </a>
  );
}
