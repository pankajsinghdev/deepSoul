"use client";

import {
  ButtonHTMLAttributes,
  FC,
  ReactElement,
} from "react";
import cx from "classnames";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ICON_WITH_TEXT = "icon-with-text",
  ICON = "icon",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  buttonType?: ButtonType;
  icon?: ReactElement;
}

const getButtonClasses = (buttonType?: ButtonType): string => {
  switch (buttonType) {
    case ButtonType.PRIMARY:
      return "bg-foreground text-background px-4 py-2 hover:bg-primary-dark";
    case ButtonType.SECONDARY:
      return "bg-background text-foreground px-4 py-2 ";
    case ButtonType.ICON:
      return "h-12 w-12 text-foreground rounded-xl";
    case ButtonType.ICON_WITH_TEXT:
      return "bg-foreground  text-background px-4 py-2 ";
    default:
      return "bg-foreground text-background px-4 py-2";
  }
};

const Button: FC<Props> = (props) => {
  const { children, className, buttonType, icon, ...rest } = props;

  const buttonClasses = getButtonClasses(
    icon && buttonType !== ButtonType.ICON_WITH_TEXT
      ? ButtonType.ICON
      : buttonType
  );

  return (
    <button
      className={cx(
        "rounded-md cursor-pointer disabled:cursor-auto",
        buttonClasses,
        className
      )}
      {...rest}
    >
      <div className="flex items-center justify-center">
        {icon && buttonType !== ButtonType.ICON_WITH_TEXT ? (
          <span>{icon}</span>
        ) : icon && buttonType === ButtonType.ICON_WITH_TEXT ? (
          <div className="flex gap-2">
            <span>{icon}</span>
            <span>{children}</span>
          </div>
        ) : (
          <span>{children}</span>
        )}
      </div>
    </button>
  );
};

export default Button;
