import { data as day1 } from "./training-day-1";
import { data as day2 } from "./training-day-2";
import { ExerciseTable } from "./exercise-table";

export const SportPage = () => {
  return (
    <div
      style={{
        marginLeft: "0.5rem",
      }}
    >
      <span>1 diena</span>
      <ExerciseTable data={day1} />
      <p />
      <span>2 diena</span>
      <ExerciseTable data={day2} />
    </div>
  );
};
