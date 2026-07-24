import { FC, SVGProps } from "react";

const ClockIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M12 8V12L14 14" />
    </svg>
  );
};
export default ClockIcon;
