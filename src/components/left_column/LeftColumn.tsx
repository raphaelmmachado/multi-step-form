import { Columns } from "../../types/typings";
import Bar from "../svg's/sidebar/Bar";
import SelectStep from "./steps/SelectStep";

function LeftColumn({ currentIndex, setCurrentIndex }: Columns) {
  return (
    <section className="absolute top-0 sm:relative" id="sidebar">
      <SelectStepsGrid
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <Bar />
    </section>
  );
}

export default LeftColumn;

const SelectStepsGrid = ({ currentIndex, setCurrentIndex }: Columns) => {
  return (
    <aside
      className="grid grid-cols-4 grid-rows-none sm:grid-cols-none
      sm:grid-rows-4 place-content-center place-items-center gap-5
      absolute mx-auto left-1/2 -translate-x-1/2 z-10 w-max top-10"
    >
      <SelectStep
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        index={0}
        title="YOUR INFO"
      />
      <SelectStep
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        index={1}
        title="SELECT PLAN"
      />
      <SelectStep
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        index={2}
        title="ADD-ONS"
      />
      <SelectStep
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        index={3}
        title="SUMMARY"
      />
    </aside>
  );
};
