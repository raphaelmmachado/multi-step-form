import Plan_Boxes from "./Plan_Boxes";
import Toogle_Plan from "./Toogle_Plan";
import { StepProps } from "../../../../types/typings";
import Button from "../../Button";

export default function YourPlan({
  summary,
  setSummary,
  setCurrentIndex,
  currentIndex,
}: StepProps) {
  return (
    <>
      <header className="mb-8">
        {" "}
        <h1 className="font-bold text-2xl text-blue-marine my-2">
          Select your plan
        </h1>{" "}
        <p className="text-gray-cool">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <Plan_Boxes summary={summary} setSummary={setSummary} />
      <Toogle_Plan summary={summary} setSummary={setSummary} />
      <Button
        currentIndex={currentIndex as number}
        setCurrentIndex={setCurrentIndex}
        summary={summary}
      />
    </>
  );
}
