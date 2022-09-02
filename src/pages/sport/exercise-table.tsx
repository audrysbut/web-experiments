import { SportData } from "./sport-data";
import "./SportPage.css";

interface ExerciseTableProps {
  data: SportData[];
}

export const ExerciseTable = ({ data }: ExerciseTableProps) => {
  const rowData = data.map((r) => (
    <tr>
      <td className="sport">{r.muscleGroup}</td>
      <td className="sport">{r.exercise}</td>
      <td className="sport">
        {r.series.map((t) => (
          <div>{t}</div>
        ))}
      </td>
    </tr>
  ));
  return (
    <table className="tableSport">
      <thead>
        <th className="sport">Raumenų grupė</th>
        <th className="sport">Pratimas</th>
        <th className="sport">Serijos / Kartojimai</th>
      </thead>
      <tbody>{rowData}</tbody>
    </table>
  );
};
