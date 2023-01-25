import { ReactNode } from "react";

export interface ProductLayoutProps {
  children: ReactNode;
}
export interface NavbarProps {
  paths: string[];
  logo?: string;
}
export interface ButtonProps {
  label: string;
  bgColor?: string;
  color?: string;
  varient?: "primary" | "secondary";
  size?: "lg" | "md" | "sm";
}
