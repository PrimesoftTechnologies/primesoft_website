import { FC, SVGProps } from "react";

const RocketIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M13.5 4.5c2.9.6 5.4 3.1 6 6-1.4 3.2-4.3 6.1-7.5 7.5-.8-1.8-1.4-4.7 1.5-7.5s5.7-2.3 7.5-1.5Z" />
      <path d="M10 14 5 19" />
      <path d="M8.5 21c.2-1.8 1-3.6 2.2-4.8" />
      <circle cx="15.5" cy="8.5" r="1.2" />
    </svg>
  );
};
export default RocketIcon;
