import React from "react";

type ButtonProperties = {
  testId: string;
  className?: string;
  disabled?: boolean;
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

function Button({
  testId,
  className,
  disabled,
  text,
  type,
  onClick,
}: ButtonProperties) {
  return (
    <button
      data-testid={testId}
      className={`${className} py-2 mt-6 text-white bg-teal-500 hover:bg-teal-700 rounded-lg`}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  className: "",
  disabled: false,
  type: "button",
  onClick: () => {},
};

export default Button;
