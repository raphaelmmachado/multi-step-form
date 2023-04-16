import { useState } from "react";
import LeftColumn from "./components/left_column/LeftColumn";
import RightColumn from "./components/right_column/RightColumn";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main
      id="App"
      className=" grid place-content-center
       place-items-center min-h-screen bg-white-w"
    >
      <div
        className="flex flex-col sm:flex-row bg-white-magnolia
        justify-center items-center sm:items-start h-full
       gap-5 shadow-xl  p-0 sm:p-4 rounded-lg"
      >
        <LeftColumn
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <RightColumn
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </main>
  );
}

export default App;
