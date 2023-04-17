interface Columns {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
interface StepProps extends SummaryProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
interface SummaryProps {
  summary: ISummary;
  setSummary: React.Dispatch<React.SetStateAction<ISummary>>;
}
export interface ISummary {
  name: string;
  email: string;
  phone: string;
  plan: Plan | undefined;
  yearly: boolean;
  online_service: boolean;
  larger_storage: boolean;
  customizable_profile: boolean;
}
export interface PlanPrice {
  arcade: number;
  advanced: number;
  pro: number;
}
interface IPlan {
  arcade: { title: arcade };
}
export type Plan = "arcade" | "advanced" | "pro";
export type Services =
  | "online_service"
  | "larger_storage"
  | "customizable_profile";

interface IPlan_Box {
  title: string;
  price: number;
  icon: JSX.Element;
}
