"use client";

import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import cx from "classnames";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ICON_WITH_TEXT = "icon-with-text",
  ICON = "icon",
  ROUNDED = "rounded",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  buttonType?: ButtonType;
  icon?: ReactElement;
  ariaLabel?: string;
}

const Button: FC<Props> = (props) => {
  const { children, className, buttonType, icon, ariaLabel, ...rest } = props;

  return (
    <button
      className={cx("cursor-pointer disabled:cursor-auto", className)}
      type={rest.type || "button"}
      aria-label={ariaLabel}
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
