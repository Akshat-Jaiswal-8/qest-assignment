export const features: string[] = [
  "Seamless Onboarding",
  "Client Engagement",
  "Generate Report",
  "Revenue Growth",
];

export const onboardingStepsContent: IOnboardingStepsContent[] = [
  {
    heading: "Claim your preset profile",
    description:
      "Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.",
    icon: "/preset-profile.svg",
  },
  {
    heading: "Add services",
    description:
      "Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.",
    icon: "/add-services.svg",
  },
  {
    heading: "Built Website",
    description:
      "Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient  Client experience.",
    icon: "/built-website.svg",
  },
];

export const RMaxFeaturesContent: IRMaxFeaturesCardProps[] = [
  {
    heading: "Scheduling",
    description: "Manage appointments, classes, and events, workshops with...",
    icon: "calendar-check-alt.svg",
    className: "col-span-1",
  },
  {
    heading: "Client Management & CRM",
    description:
      "Keep track of customer data, preferences, and interactions to...",
    className: "col-span-1",
  },
  {
    heading: "AI Powered Insights",
    description:
      "Know exactly what is happening in business and get actionable...",
    icon: "star-magic.svg",
    className: "col-span-1",
  },
  {
    heading: "Billing & Payments",
    description:
      "Streamline invoicing and payments with automated workflows, reducing...",
    image: "billing-payment.png",
    imageAtTop: true,
    className: "col-span-1 row-span-2",
  },
  {
    heading: "Marketing & Engagement Tools",
    description:
      "Boost client retention and grow your business with integrated...",
    icon: "star-magic.svg",
    className: "col-span-1",
  },
  {
    heading: "Custom Branded website",
    description:
      "Qest's Custom Branded Website Builder allows you to create a fully personalized...",
    image: "custom-branded-website.png",
    className: "col-span-1 row-span-2",
  },
  {
    heading: "Multi-Location Management",
    description:
      "Manage multiple locations with ease, assigning roles and permissions...",
    className: "col-span-1",
  },
];

export const faqs: IFaqs[] = [
  {
    id: 1,
    question: "What is RMax?",
    answer:
      "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
  },
  {
    id: 2,
    question: "How does it work?",
    answer:
      "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
  },
  {
    id: 3,
    question: "How much does it cost?",
    answer:
      "You can try Qest for free for 30 days. After the trial expires, you can choose a pricing plan that suits the size and stage of the business. Our basic plan starts from 1200/business location/month. We also have add-ons that can be added or removed based your need.\n",
  },
];

export const footerItems: IFooter[] = [
  {
    heading: "Company",
    items: ["About us", "Contact us", "Careers"],
  },
  {
    heading: "Business Size",
    items: ["Entrepreneurs", "SMBs", "Growth Business"],
  },
  {
    heading: "Business Type",
    items: [
      "Household Services",
      "Enterprise",
      "Health & Wellness",
      "Sports",
      "Learning Activities",
      "Miscellaneous",
    ],
  },
  {
    heading: "Download",
    items: ["Business App", "User App"],
  },
  {
    heading: "Legal",
    items: ["Privacy Policy", "Terms & Conditions", "Return Policy"],
  },
  {
    heading: "Contact us",
    items: ["support@Rmax.com", "+91-8459671235"],
  },
];

export const starterPricingCardContent: IPricingCard = {
  heading: "STARTER",
  price: 17,
  items: [
    { item: "Commercial License" },
    { item: "100+ HTML UI Elements" },
    { item: "Unlimited Domain Support" },
    { item: "6 Month Premium Support", provided: false },
    { item: "Life Time Updates", provided: false },
  ],
};

export const premiumPricingCardContent: IPricingCard = {
  heading: "STARTER",
  price: 17,
  items: [
    { item: "Commercial License" },
    { item: "100+ HTML UI Elements" },
    { item: "Unlimited Domain Support" },
    { item: "6 Month Premium Support" },
    { item: "Life Time Updates" },
  ],
};

export const pricingPlansContent: IPricingPlanContent[] = [
  { label: "Users", starter: 1, premium: 15 },
  { label: "Branches", starter: 1, premium: 10 },
  { label: "Courses", starter: 3, premium: "15/branch" },
  { label: "Max. Students Allowed", starter: 25, premium: 500 },
  { label: "Communication", starter: 25, premium: "Yes" },
  { label: "Bulk Updates", starter: 25, premium: "Yes" },
  { label: "User Roles", starter: 25, premium: "Yes" },
];
