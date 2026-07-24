import { GlobeIcon } from "../icons";
import HeadingSection from "./heading-section";
import ProcessCard from "./process-card";

const iconClassName = "size-7";

const ProcessThree = () => {
  return (
    <div className="grid gap-6">
      <HeadingSection number={3} title="Growth & Support" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProcessCard
          icon={<GlobeIcon className={iconClassName} />}
          title="IT Consulting"
          description="Technology strategy, process mapping, and digital transformation planning for growing businesses."
          accent="primary"
          delay={0}
        />
        <ProcessCard
          icon={<TrainingBoardIcon />}
          title="Training & Deployment"
          description="Hands-on onboarding, user training, testing, and phased rollout support for your team."
          accent="primary"
          delay={0.12}
        />
        <ProcessCard
          icon={<ShieldSupportIcon />}
          title="Ongoing Support & Maintenance"
          description="Continuous monitoring, issue resolution, updates, and optimization after go-live."
          accent="primary"
          delay={0.24}
        />
      </div>
    </div>
  );
};

function TrainingBoardIcon() {
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
      <rect x="4" y="5" width="16" height="10" rx="2" />
      <path d="M8 19h8M12 15v4M8 9h8M8 12h4" />
    </svg>
  );
}

function ShieldSupportIcon() {
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
      <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 9.7 4.2-1.4 7-5.3 7-9.7V6l-7-3Z" />
      <path d="M9.5 11.5 11 13l3.5-3.5" />
    </svg>
  );
}

export default ProcessThree;
