"use client";

import { scrollToSection } from "@/utiils/helpers";
import Link from "next/link";
import { FC } from "react";

interface Props {
  header: {
    title: string;
    link: string;
  };
}

const HeaderLink: FC<Props> = (props) => {
  const { header } = props;

  return (
    <Link
      href={`#${header.link}`}
      onClick={(e) => scrollToSection(e, header.link)}
    >
      {header.title}
    </Link>
  );
};
export default HeaderLink;
