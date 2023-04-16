import { Services, StepProps } from "../../../../types/typings";
import Button from "../../Button";

export default function Add_Ons({
  currentIndex,
  setCurrentIndex,
  setSummary,
  summary,
}: StepProps) {
  const addons = [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
    },
  ];

  return (
    <>
      <header className="mb-8">
        <h1 className="font-bold text-2xl text-blue-marine my-2">
          Pick add-ons
        </h1>
        <p className="text-gray-cool">
          Add ons help enhance your gaming experience.
        </p>
      </header>

      <div className="grid grid-rows-3 gap-3 my-8">
        {addons.map((item) => {
          const services = item.title
            .toLowerCase()
            .split(" ")
            .join("_") as Services;

          return (
            <label
              className={`w-full flex items-center justify-between
            border p-2 sm:p-4 rounded-lg hover:cursor-pointer hover:border-blue-purplish
            shadow-lg ${
              summary[services] === true
                ? "border-blue-purplish"
                : "border-blue-pastel"
            } gap-4`}
              htmlFor={`${item.title.toLowerCase()}_checkbox`}
              key={item.title}
            >
              {" "}
              <div className="flex items-center gap-5">
                <input
                  onChange={() => {
                    setSummary((prev) => ({
                      ...prev,
                      [services]: prev[services] === true ? false : true,
                    }));
                  }}
                  id={`${item.title.toLowerCase()}_checkbox`}
                  type="checkbox"
                  checked={summary[services].valueOf()}
                  value=""
                  className="w-4 h-4 text-blue-purplish bg-gray-light
                   border-gray-cool rounded focus:ring-blue-pastel dark:focus:ring-blue-purplish
                    dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <span className="flex flex-col">
                  <h2 className="font-bold text-blue-marine">{item.title}</h2>
                  <p className="text-sm text-gray-cool">{item.desc}</p>
                </span>
              </div>
              <span className="text-sm text-blue-purplish">{`+$${
                summary.yearly ? `${item.price * 10}/yr` : `${item.price}/mo`
              }`}</span>
            </label>
          );
        })}
      </div>

      <Button
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        summary={summary}
      />
    </>
  );
}
