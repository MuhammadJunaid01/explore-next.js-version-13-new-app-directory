"use client";
import { getNavClass } from "@/lib/classes";
import { NavbarProps } from "@/lib/interfaces";
import { useState } from "react";
import { FaAlignJustify, FaBookOpen } from "react-icons/fa";
import Navigation from "../navigation";
const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const { paths, logo } = props;

  return (
    <div className="flex gap-2 justify-between py-3 px-2">
      <div>
        <p className="m-0">
          <FaBookOpen className="text-2xl" />
        </p>
      </div>
      <div className={getNavClass(open)}>
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
