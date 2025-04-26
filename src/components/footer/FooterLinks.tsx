import { scrollToSection } from "@/utiils/helpers";
import Link from "next/link";
import { FC } from "react";

interface Props {
  footer: {
    title: string;
    link: string;
  };
}

const FooterLinks: FC<Props> = ({ footer }) => (
  <div className="flex gap-5">
    <Link
      href={`#${footer.link}`}
      className="shrink-0"
      onClick={(e) => scrollToSection(e, footer.link)}
    >
      {footer.title}
    </Link>
    <span aria-hidden="true" className="hidden sm:inline text-foreground/30">
      |
    </span>
  </div>
);

export default FooterLinks;
