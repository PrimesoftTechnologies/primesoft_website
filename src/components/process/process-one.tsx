import HeadingSection from "./heading-section";
import ProcessCard from "./process-card";

const iconClassName = "size-7";

const ProcessOne = () => {
  return (
    <div className="grid gap-6">
      <HeadingSection number={1} title="Core Solutions" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProcessCard
          icon={<PeopleWorkflowIcon />}
          title="Odoo Implementation"
          description="Configure CRM, Sales, Accounting, and operations in one unified system."
          accent="primary"
          delay={0}
        />
        <ProcessCard
          icon={<HeadsetIcon />}
          title="Call Center Solutions"
          description="Inbound and outbound call center setup with CRM integration and performance analytics."
          accent="primary"
          delay={0.12}
        />
        <ProcessCard
          icon={<CodeWindowIcon />}
          title="Software Development"
          description="Custom business applications, dashboards, and workflow automation built around your needs."
          accent="primary"
          delay={0.24}
        />
      </div>
    </div>
  );
};

function HeadsetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <path d="M4 12a8 8 0 1 1 16 0" />
      <rect x="3" y="11" width="4" height="7" rx="2" />
      <rect x="17" y="11" width="4" height="7" rx="2" />
      <path d="M19 18a3 3 0 0 1-3 3h-2" />
    </svg>
  );
}

function CodeWindowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8.5 10 6 12l2.5 2" />
      <path d="m15.5 10 2.5 2-2.5 2" />
      <path d="m13 8-2 8" />
    </svg>
  );
}

function PeopleWorkflowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M14 18.5a3.5 3.5 0 0 1 7 0" />
      <path d="M12 12h4l-1.5-1.5M16 12l-1.5 1.5" />
    </svg>
  );
}

export default ProcessOne;
