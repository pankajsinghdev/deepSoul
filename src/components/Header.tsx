"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Menu, Sun } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import HeaderLink from "./HeaderLink";
import Button from "./Button";
import { scrollToSection } from "@/utiils/helpers";

const headerLinks = [
  { title: "Features", link: "features" },
  { title: "Therapy", link: "therapy" },
  { title: "Self Help", link: "self-help" },
  { title: "Community", link: "community" },
  { title: "Resources", link: "resources" },
];

const Header = () => {
  return (
    <div className="backdrop-blur-md bg-transparent/90 fixed z-1000 left-0 right-0 top-0 border-b-1 border-gray-800">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-4">
          <Link
            href="#hero"
            className="shrink-0"
            onClick={(e) => scrollToSection(e, "hero")}
          >
            <div className="flex gap-2 text-2xl font-bold ">
              <Logo />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 bg-blue-900">
                DeepSoul
              </h1>
            </div>
          </Link>
          <div className="md:hidden flex">
            <Menu size={32} />
          </div>
          <nav className="w-[75%] xl:w-1/2 hidden md:flex items-center justify-end gap-6 text-gray-400 text-lg">
            {headerLinks.map((header) => {
              return (
                <div key={header.title}>
                  <HeaderLink header={header} />
                </div>
              );
            })}
            <Button className="text-gray-400" icon={<Sun />} />
          </nav>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
