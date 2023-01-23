"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
interface Iprops {
  href: string;
  children: string;
}
const Navigation = ({ href, children }: Iprops) => {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  return (
    <Link
      className={` cursor-pointer no-underline font-medium text-black sm:mb-7  ${
        active ? "border-b-2 border-b-indigo-600" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navigation;
