"use client";

import { scrollToSection } from "@/utiils/helpers";
import Link from "next/link";
import { FC } from "react";

interface Props {
  header: {
    title: string;
    link: string;
  };
  onclick?: () => void;
}

const HeaderLink: FC<Props> = ({ header, onclick }) => (
  <Link
    href={`#${header.link}`}
    onClick={(e) => {
      scrollToSection(e, header.link);
      onclick ? onclick() : null;
    }}
    className="border-b md:border-none text-gray-400"
  >
    {header.title}
  </Link>
);

export default HeaderLink;
