import { ReactNode } from "react";
import cx from "classnames";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cx(
        "mx-auto lg:max-w-screen-2xl px-2.5 md:px-5 lg:px-10 xl:px-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
