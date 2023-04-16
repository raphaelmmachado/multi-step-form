import { ISummary, StepProps } from "../../../../types/typings";
import Button from "../../Button";
import plan_price from "./plan_price";
export default function Summary({
  setCurrentIndex,
  setSummary,
  summary,
}: StepProps) {
  return (
    <>
      {" "}
      <header className="mb-8">
        {" "}
        <h1 className="font-bold text-2xl text-blue-marine my-2">
          Finishing up
        </h1>{" "}
        <p className="text-gray-cool">
          Double-check everything looks OK before confirming.
        </p>
      </header>{" "}
      <div className="flex flex-col gap-4">
        <PlanRow
          plan={summary.plan}
          price={plan_price[summary.plan]}
          yearly={summary.yearly}
          setSummary={setSummary}
        />
        {summary.online_service && (
          <ServiceRow
            title="Online service"
            price={1}
            yearly={summary.yearly}
          />
        )}
        {summary.larger_storage && (
          <ServiceRow
            title="Larger storage"
            price={2}
            yearly={summary.yearly}
          />
        )}
        {summary.customizable_profile && (
          <ServiceRow
            title="Customizable profile"
            price={2}
            yearly={summary.yearly}
          />
        )}
        <Total summary={summary} />
      </div>
      <Button
        title="Confirm"
        setCurrentIndex={setCurrentIndex}
        summary={summary}
      />
    </>
  );
}
interface PlanRow {
  plan: string;
  yearly: boolean;
  price: number;
  setSummary: React.Dispatch<React.SetStateAction<ISummary>>;
}
const PlanRow = ({
  price = 9,
  plan = "arcade",
  yearly = true,
  setSummary,
}: PlanRow) => {
  return (
    <div
      className="flex justify-between border-b
     border-white-magnolia pb-4"
    >
      <span className="flex items-start flex-col">
        <h2 className="font-bold text-lg text-blue-marine">{`${plan
          .charAt(0)
          .toUpperCase()}${plan.slice(1)} ${
          yearly ? "(yearly)" : "(monthly)"
        }`}</h2>
        <button
          onClick={() =>
            setSummary((prev) => ({ ...prev, yearly: !prev.yearly }))
          }
          className="underline text-gray-cool hover:text-blue-purplish text-sm"
        >
          Change
        </button>
      </span>
      <span className="text-blue-marine">
        {yearly ? `$${price * 10}/yr` : `$${price}/mo`}
      </span>
    </div>
  );
};

interface ServiceRow {
  title: string;
  price: number;
  yearly: boolean;
}
const ServiceRow = ({ title, price, yearly }: ServiceRow) => {
  return (
    <div className="flex justify-between">
      <span className="font-bold text-gray-cool">{title}</span>
      <span className="text-blue-marine">
        {yearly ? `+$${price * 10}/yr` : `+$${price}/mo`}
      </span>
    </div>
  );
};

interface TotalProps {
  summary: ISummary;
}
const Total = ({ summary }: TotalProps) => {
  let plan_price: number;
  const total = (): number => {
    switch (summary.plan) {
      case "arcade":
        plan_price = 9;
        break;
      case "advanced":
        plan_price = 10;
        break;
      case "pro":
        plan_price = 12;
        break;
      default:
        plan_price = 0;
        break;
    }
    if (summary.online_service) {
      plan_price = plan_price + 1;
    }
    if (summary.larger_storage) {
      plan_price = plan_price + 2;
    }
    if (summary.customizable_profile) {
      plan_price = plan_price + 2;
    }
    if (summary.yearly) {
      return plan_price * 10;
    } else return plan_price;
  };
  const price = total();
  return (
    <div className="flex items-center justify-between my-8 border-t-2 border-t-gray-cool py-5">
      {" "}
      <span className="font-bold text-gray-cool text-lg">
        {" "}
        Total {summary.yearly ? "(per Year)" : "(per Month)"}
      </span>
      <span className="font-bold text-blue-purplish text-lg">
        {summary.yearly ? `$${price}/yr` : `$${price}/mo`}
      </span>
    </div>
  );
};
