import { FC, SVGProps } from "react";

const GlobeIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1rem"
      height="1rem"
      color="currentColor"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" />
      <path d="M21 15H3" />
      <path d="M21 9H3" />
    </svg>
  );
};
export default GlobeIcon;
