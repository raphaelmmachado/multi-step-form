import { ISummary } from "../../types/typings";

interface Props {
  title?: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  summary?: ISummary;
}
export default function Button({
  title = "Next step",
  setCurrentIndex,
  currentIndex,
  summary,
}: Props) {
  const noPerson = !summary?.name || !summary.email || !summary.phone;
  const noPlan = currentIndex > 0 && summary?.plan === undefined;
  return (
    <>
      {" "}
      <div className="w-full flex items-center justify-between bg-inherit">
        <button
          onClick={() => setCurrentIndex((prev) => prev - 1)}
          className="text-blue-marine p-3 rounded-lg border border-blue-marine"
        >
          Go Back
        </button>

        <button
          disabled={noPerson || noPlan}
          onClick={() => {
            setCurrentIndex((prev) => prev + 1);
            title === "Confirm" && console.log(summary);
          }}
          className={`text-white-w p-3 my-4 ${
            currentIndex > 0 && !summary?.plan && "bg-blue-marine/30"
          } bg-blue-marine enabled:hover:bg-blue-purplish rounded-lg`}
        >
          {title}
        </button>
      </div>{" "}
    </>
  );
}
