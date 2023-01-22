"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";
interface Iprops {
  href: string;
  children: string;
}
const Navigation = ({ href, children }: Iprops) => {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;
  return (
    <Link
      style={
        active
          ? {
              borderBottom: "1px solid #476574",
              textDecoration: "none",
              color: "black",
            }
          : { textDecoration: "none", color: "black" }
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default Navigation;
