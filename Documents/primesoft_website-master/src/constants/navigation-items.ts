// src/constants/navigation-items.ts
export const navigationItems = [
  {
    path: "/",
    label: "Home",
  },
  
  {
    path: "/services",
    label: "Services",
    dropdown: [
      { label: "Call Center & Customer Support", href: "/services/call-center", icon: "headset" },
      { label: "Business Automation", href: "/services/business-automation", icon: "automation" },
      { label: "AI & Machine Learning", href: "/services/ai-ml", icon: "ai" },
      { label: "ERP & Business Systems", href: "/services/erp", icon: "erp" },
      { label: "Custom Software Development", href: "/services/custom-software", icon: "code" },
      { label: "Digital Transformation", href: "/services/digital-transformation", icon: "transform" },
    ],
  },

  {
    path: "/applications",
    label: "Applications",
  },
  
  {
    path: "/solutions",
    label: "Solutions",
  },

  {
    path: "/why-us",
    label: "Why Us",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];