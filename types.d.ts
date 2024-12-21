interface IOnboardingStepsContent {
  heading: string;
  description: string;
  icon: string;
}

interface IRMaxFeaturesCardProps {
  heading: string;
  description: string;
  icon?: string;
  image?: string;
  imageAtTop?: boolean;
  className?: string;
}

interface IFaqs {
  id: number;
  question: string;
  answer: string;
}

interface IFooter {
  heading: string;
  items: string[];
}

type items = {
  item: string;
  provided?: boolean;
};

interface IPricingCard {
  heading: string;
  price: number;
  items: items[];
}

interface IPricingPlanContent {
  label: string;
  starter: number;
  premium: number | string;
}
