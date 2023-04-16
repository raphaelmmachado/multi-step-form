import { Columns } from "../../../types/typings";

interface Props extends Columns {
  index: number;
  title: string;
}
export default function SelectStep({ index, title, currentIndex }: Props) {
  return (
    <div
      className="flex items-center  w-full h-full gap-3"
      // onClick={() => setCurrentIndex(index)}
    >
      <span
        className={`rounded-full w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center
         ${
           currentIndex === index
             ? "text-blue-purplish border-blue-pastel bg-blue-alabaster"
             : "text-blue-alabaster border-blue-pastel"
         }
       border font-bold text-lg`}
      >
        {index + 1}
      </span>
      <div className=" hidden sm:flex flex-col items-start">
        <h3 className="text-blue-pastel">STEP {index + 1}</h3>
        <h4 className="text-blue-alabaster ">{title}</h4>
      </div>
    </div>
  );
}
