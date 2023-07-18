export type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-primary rounded-md px-6 py-2 text-white text-sm font-bold leading-6 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
