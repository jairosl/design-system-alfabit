type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`bg-[#2D5BFF] rounded-[8px] px-8 py-3 text-[#fff] text-lg font-bold leading-6 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
