"use client";
import { NavbarProps } from "@/lib/interfaces";
import { useState } from "react";
import { FaAlignJustify, FaBookOpen } from "react-icons/fa";
import Navigation from "../navigation";
const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const { paths, logo } = props;

  return (
    <div className="flex gap-2 justify-between py-3 px-2">
      <div className="">
        <p className="m-0">
          <FaBookOpen className="text-2xl" />
        </p>
      </div>
      <div
        className={`md:flex md:gap-12 w-full  md:items-center md:static md:w-auto  py-5 md:p-0 transition-all duration-500 px-2 left-0 ease-in absolute md:z-auto z-[-1]  ${
          open ? "top-12" : "top-[-490px]"
        }`}
      >
        {paths.map((path: string, index: number) => {
          return (
            <div key={index}>
              <Navigation
                href={
                  path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`
                }
              >
                {path}
              </Navigation>
            </div>
          );
        })}
      </div>
      <p
        onClick={() => setOpen((prev) => !prev)}
        className="m-0 block md:hidden"
      >
        <FaAlignJustify />
      </p>
    </div>
  );
};

export default Navbar;
