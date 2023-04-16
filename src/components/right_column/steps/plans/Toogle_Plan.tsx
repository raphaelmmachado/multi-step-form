import { SummaryProps } from "../../../../types/typings";

const Toogle_Plan = ({ summary, setSummary }: SummaryProps) => {
  return (
    <div className="flex justify-center  items-center my-4 p-12 bg-inherit">
      <label
        htmlFor="toogle"
        className={`mr-5 hover:cursor-pointer ${
          summary.yearly
            ? "text-gray-cool font-normal"
            : "text-blue-marine font-bold"
        }`}
      >
        Monthly
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          id="toogle"
          name="toogle"
          onChange={() => {
            setSummary((prev) => ({
              ...prev,
              yearly: prev.yearly === true ? false : true,
            }));
          }}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div
          className="w-11 h-6 bg-blue-purplish peer-focus:outline-none
           peer-focus:ring-2 peer-focus:ring-blue-pastel
            dark:peer-focus:ring-blue-purplish rounded-full peer dark:bg-gray-700
             peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
              after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-blue-pastel
               after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-cool
                peer-checked:bg-blue-purplish"
        ></div>
      </label>
      <label
        htmlFor="toogle"
        className={`ml-5 hover:cursor-pointer ${
          summary.yearly
            ? "text-blue-marine font-bold"
            : "text-gray-cool font-normal"
        }`}
      >
        Yearly
      </label>
    </div>
  );
};
export default Toogle_Plan;
