import { FC, SVGProps } from "react";

const CapIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z" />
      <path d="M6 11.5v4c0 1.2 2.7 3 6 3s6-1.8 6-3v-4" />
    </svg>
  );
};
export default CapIcon;


