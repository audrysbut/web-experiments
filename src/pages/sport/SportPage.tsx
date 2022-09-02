import { data as day1 } from "./training-day-1";
import { data as day2 } from "./training-day-2";
import { ExerciseTable } from "./exercise-table";
import { useState } from "react";

const trainingData = [day1, day2];

export const SportPage = () => {
  const [index, setIndex] = useState(0);
  const nextIndex = () =>
    setIndex((prev) => {
      if (prev === trainingData.length - 1) {
        return 0;
      }
      return prev + 1;
    });

  const prevIndex = () =>
    setIndex((prev) => {
      if (prev === 0) {
        return trainingData.length - 1;
      }
      return prev - 1;
    });
  return (
    <div
      style={{
        marginLeft: "0.5rem",
      }}
    >
      <button
        style={{
          marginRight: "1rem",
          padding: "0.5rem",
        }}
        onClick={prevIndex}
      >
        {"<"}
      </button>
      <span
        style={{
          marginLeft: "4rem",
          marginRight: "4rem",
        }}
      >
        {index + 1} diena
      </span>
      <button
        style={{
          marginLeft: "1rem",
          padding: "0.5rem",
        }}
        onClick={nextIndex}
      >
        {">"}
      </button>
      <ExerciseTable data={trainingData[index]} />
    </div>
  );
};
