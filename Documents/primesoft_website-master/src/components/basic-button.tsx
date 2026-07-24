import Link from "next/link";
import { ReactNode } from "react";

type BasicButtonProps = {
  children: ReactNode;
  className?: string;
};
const BasicButton = ({ children, className }: BasicButtonProps) => {
  return (
    <Link
      href="/"
      className={`flex w-fit items-center gap-2 rounded-xl px-5 py-4 text-base sm:px-8 sm:py-6 sm:text-lg cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};
export default BasicButton;
