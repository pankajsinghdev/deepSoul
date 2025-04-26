"use client";

import { FC } from "react";
import FooterLinks from "./FooterLinks";

const Footer: FC = () => {
  const footers = [
    { title: "Terms of Service", link: "hero" },
    { title: "Privacy Policy", link: "hero" },
    { title: "Cookie Policy", link: "hero" },
  ];
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-3 text-gray-500 m-6">
      <small> &copy; 2025 DeepSoul. All Rights reserved.</small>
      <nav className="flex flex-col sm:flex-row gap-4 items-center">
        <ul className="flex flex-col sm:flex-row gap-4 items-center ">
          {footers.map((obj) => (
            <li key={obj.title}>
              <FooterLinks footer={obj} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
