import HeadingSection from "./heading-section";
import ProcessCard from "./process-card";

const iconClassName = "size-7";

const ProcessTwo = () => {
  return (
    <div className="grid gap-6">
      <HeadingSection number={2} title="Infrastructure & Operations" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ProcessCard
          icon={<ServerStackIcon />}
          title="Hosting Services"
          description="Secure cloud hosting, server setup, backups, and performance monitoring for business-critical systems."
          accent="primary"
          delay={0}
        />
        <ProcessCard
          icon={<NetworkNodesIcon />}
          title="Networking Solutions"
          description="Office networking, VPN setup, and reliable connectivity for distributed teams and branches."
          accent="primary"
          delay={0.12}
        />
        <ProcessCard
          icon={<IntegrationIcon />}
          title="System Integration"
          description="Connect Odoo with telephony, APIs, payment systems, and third-party tools without silos."
          accent="primary"
          delay={0.24}
        />
      </div>
    </div>
  );
};

function ServerStackIcon() {
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
      <rect x="4" y="4" width="16" height="5" rx="1.5" />
      <rect x="4" y="10" width="16" height="5" rx="1.5" />
      <rect x="4" y="16" width="16" height="4" rx="1.5" />
      <path d="M8 6.5h.01M8 12.5h.01M8 18h.01" />
    </svg>
  );
}

function NetworkNodesIcon() {
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
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6M12 10v4" />
    </svg>
  );
}

function IntegrationIcon() {
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
      <path d="M7 7h4V3h2v4h4v2h-4v6h4v2h-4v4h-2v-4H7v-2h4V9H7z" />
    </svg>
  );
}

export default ProcessTwo;
