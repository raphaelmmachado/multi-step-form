import YourInfo from "./steps/your_info/YourInfo";
import YourPlan from "./steps/plans/YourPlan";
import Add_Ons from "./steps/add_ons/Add_Ons";
import { useState } from "react";
import { Columns, ISummary } from "../../types/typings";
import Summary from "./steps/summary/Summary";
import Finish from "./steps/finish/Finish";

export default function RightColumn({
  currentIndex,
  setCurrentIndex,
}: Columns) {
  const [summary, setSummary] = useState<ISummary>({
    name: "",
    email: "",
    phone: "",
    plan: undefined,
    yearly: false,
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
  });

  const Steps = [
    <YourInfo
      key={"info"}
      setSummary={setSummary}
      summary={summary}
      setCurrentIndex={setCurrentIndex}
      currentIndex={currentIndex}
    />,
    <YourPlan
      key={"plan"}
      setSummary={setSummary}
      summary={summary}
      setCurrentIndex={setCurrentIndex}
      currentIndex={currentIndex}
    />,
    <Add_Ons
      key={"add-ons"}
      setSummary={setSummary}
      summary={summary}
      setCurrentIndex={setCurrentIndex}
      currentIndex={currentIndex}
    />,
    <Summary
      key={"summary"}
      setSummary={setSummary}
      summary={summary}
      setCurrentIndex={setCurrentIndex}
      currentIndex={currentIndex}
    />,
    <Finish />,
  ];

  return (
    <section
      className="p-8 absolute top-28 sm:static max-w-[22rem]
      sm:max-w-max h-full bg-inherit mx-3 sm:mx-0 rounded-lg"
    >
      {Steps[currentIndex]}
    </section>
  );
}
