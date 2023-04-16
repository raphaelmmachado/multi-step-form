import { useState } from "react";
import { IPlan_Box, Plan, SummaryProps } from "../../../../types/typings";
import {
  Advanced_Plan,
  Arcade_Plan,
  Pro_Plan,
} from "../../../svg's/plans/Icons_Plans";

const Plan_Boxes = ({ setSummary, summary }: SummaryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const plans: IPlan_Box[] = [
    { title: "Arcade", price: 9, icon: Arcade_Plan },
    { title: "Advanced", price: 12, icon: Advanced_Plan },
    { title: "Pro", price: 15, icon: Pro_Plan },
  ];
  return (
    <div className="grid grid-cols-none grid-rows-3 sm:grid-cols-3 sm:grid-rows-none gap-5  my-4">
      {plans.map((plan, index) => {
        return (
          <div
            onClick={() => {
              setActiveIndex(index);
              setSummary((prev) => ({
                ...prev,
                plan: plan.title.toLowerCase() as Plan,
              }));
            }}
            key={plan.title}
            className={`flex sm:flex-col justify-start sm:justify-between 
              hover:cursor-pointer
            border-2  hover:border-blue-pastel ${
              activeIndex === index ||
              (summary.plan === plan.title.toLowerCase() &&
                "border-blue-pastel")
            } rounded-lg shadow-lg p-3 gap-10`}
          >
            <span>{plan.icon}</span>
            <div className="flex flex-col">
              <h2 className="text-blue-marine  font-semibold">{plan.title}</h2>
              <span className="text-gray-cool text-sm">
                {summary.yearly
                  ? `$${plan.price * 10}/yr`
                  : `$${plan.price}/mo`}
              </span>

              <span
                className={
                  summary.yearly
                    ? "visible text-blue-marine text-xs"
                    : "invisible  text-blue-marine text-xs"
                }
              >
                2 months free
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Plan_Boxes;
