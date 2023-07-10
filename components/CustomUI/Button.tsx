import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary"; // Add tertiary variant
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  let buttonStyle = "";
  let hoverStyle = "";
  let focusStyle = "";
  let activeStyle = "";

  if (variant === "primary") {
    buttonStyle =
      "border border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-white";
    hoverStyle = "hover:bg-blue-600";
    focusStyle = "focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
    activeStyle = "active:bg-blue-700";
  } else if (variant === "secondary") {
    buttonStyle =
      "border border-blue-500 bg-white hover:bg-blue-500 text-blue-500 hover:text-white focus:border-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
    hoverStyle = "hover:bg-blue-500 hover:text-white";
    focusStyle = "focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";
    activeStyle = "active:bg-blue-700";
  } else if (variant === "tertiary") { // Tertiary style
    buttonStyle =
      "border border-transparent bg-white text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700";
    hoverStyle = "hover:bg-opacity-75 hover:text-blue-600";
    focusStyle = "focus:text-blue-600";
    activeStyle = "active:text-blue-700";
  }

  const buttonClasses = classNames(
    "rounded-lg transition-colors inline-block h-min my-auto px-4 py-1.5 font-bold shadow-lg",
    buttonStyle,
    hoverStyle,
    focusStyle,
    activeStyle,
    className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
