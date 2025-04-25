"use client";

import { scrollToSection } from "@/utiils/helpers";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 text-gray-400 m-6">
      <p> &copy; 2025 DeepSoul. All Rights reserved.</p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="#hero"
          className="shrink-0"
          onClick={(e) => scrollToSection(e, "hero")}
        >
          Terms of Service
        </Link>
        <span className="hidden sm:inline text-foreground/30">|</span>
        <Link
          href="#hero"
          className="shrink-0"
          onClick={(e) => scrollToSection(e, "hero")}
        >
          Privacy Policy
        </Link>
        <span className="hidden sm:inline text-foreground/30">|</span>
        <Link
          href="#hero"
          className="shrink-0"
          onClick={(e) => scrollToSection(e, "hero")}
        >
          Cookie Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
