"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC } from "react";

interface Props {
  onClick?: () => void;
}

const ThemeToggle: FC<Props> = ({ onClick }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="cursor-pointer border-b md:border-none text-gray-400 hover:bg-hover-background active:bg-active-background rounded-md pb-1 [transition:background_20ms_ease-in,_color_0.15s]"
      title={`Toggle theme`}
      aria-label={`Toggle theme`}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        if (onClick) onClick();
      }}
    >
      <span className="sr-only">{`Toggle theme`}</span>
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="dark:hidden" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
