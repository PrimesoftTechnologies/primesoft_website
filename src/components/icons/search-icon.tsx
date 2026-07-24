import { FC, SVGProps } from "react";

const SearchIcon:FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
  <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      height="1rem"
        width="1rem"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
};
export default SearchIcon;


