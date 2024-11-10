export interface ICustomButton {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (input?: any) => void; // TODO: onClick is a function
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullHeight?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  styles?: React.CSSProperties;
  rightIconWrapper?: string;
  leftIconWrapper?: string;
}

const CustomButton = ({
  disabled,
  children,
  className,
  onClick,
  isFullWidth,
  leftIcon,
  rightIcon,
  rightIconWrapper,
  leftIconWrapper,
  fullHeight,
  type,
  rounded,
  styles,
  ...props // like type, ...
}: ICustomButton) => {
  return (
    <button
      className={`
        py-[9px] px-14 sm:px-14
        text-base font-normal
        bg-[#C0C0C0] text-[#0F0F0F]
        ${fullHeight ? "h-full" : ""}
        ${rounded ? "rounded-full" : "rounded-[100px"}
        ${!isFullWidth ? "w-max sm:w-max" : ""}
        text-center
        ${disabled ? "opacity-30 cursor-not-allowed pointer-events-none" : ""}
        ${isFullWidth ? "w-full" : ""}
        transition ease-in-out
        flex items-center justify-center
        ${className || ""}
      `}
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={styles}
      {...props}
    >
      {!!rightIcon && (
        <span className={`flex items-center ml-8 ${rightIconWrapper || ""}`}>
          {rightIcon}
        </span>
      )}
      {children}
      {!!leftIcon && (
        <span className={`flex items-center mr-8 ${leftIconWrapper || ""}`}>
          {leftIcon}
        </span>
      )}
    </button>
  );
};

export { CustomButton as Button };
