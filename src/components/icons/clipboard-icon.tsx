import { FC, SVGProps } from "react";

const ClipboardIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <path d="M9 4.5h6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 4.5Z" />
    </svg>
  );
};
export default ClipboardIcon;
