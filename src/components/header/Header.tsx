"use client";

import Link from "next/link";
import Logo from "../Logo";
import { Menu, Sun, X } from "lucide-react";
import { scrollToSection } from "@/utiils/helpers";
import MaxWidthWrapper from "../MaxWidthWrapper";
import HeaderLink from "./HeaderLink";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import Button from "../Button";

const headerLinks = [
  { title: "Features", link: "features" },
  { title: "Therapy", link: "therapy" },
  { title: "Resources", link: "resources" },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-transparent/90 fixed z-1000 left-0 right-0 top-0 border-b-1 border-gray-300">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-4">
          <Link
            href="#hero"
            className="shrink-0"
            onClick={(e) => scrollToSection(e, "hero")}
          >
            <div className="flex gap-2 text-2xl  font-bold ">
              <Logo />
              <h1 className="bg-clip-text  text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 bg-blue-900">
                DeepSoul
              </h1>
            </div>
          </Link>
          <div className="md:hidden flex">
            <Button
              ariaLabel="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="p-2"
              icon={<Menu size={32} />}
            />{" "}
          </div>
          <nav className="w-[75%] xl:w-1/2 hidden md:flex items-center justify-end gap-6 text-gray-400 text-lg">
            {headerLinks.map((header) => {
              return (
                <div key={header.title}>
                  <HeaderLink header={header} />
                </div>
              );
            })}
            <ThemeToggle />
          </nav>
        </div>
      </MaxWidthWrapper>
      {sidebarOpen && (
        <>
          <aside className="fixed top-0 ease-in-out right-0 h-full w-64 bg-background shadow-lg z-[2100] flex flex-col p-6 transition-transform duration-300">
            <button
              aria-label="Close menu"
              className="self-end mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col rounded-2xl p-2 gap-6 text-lg bg-background">
              {headerLinks.map((header) => (
                <HeaderLink
                  key={header.title}
                  header={header}
                  onclick={() => setSidebarOpen(false)}
                />
              ))}
              <ThemeToggle onClick={() => setSidebarOpen(false)} />
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};

export default Header;
