import "./SportPage.css";

interface SportData {
  muscleGroup: string;
  exercise: string;
  series: string[];
}

const day1: SportData[] = [
  {
    muscleGroup: "Apšilimas",
    exercise: "Ėjimas",
    series: ["5 min"],
  },
  {
    muscleGroup: "Presas",
    exercise: "Susirietimas su kamuolio uždėjimo ant kojų",
    series: ["4x10"],
  },
  {
    muscleGroup: "Krutinė",
    exercise: "Spausti laisva štanga nuo lygaus",
    series: ["10 x 10 Kg", "8 x 15 Kg", "6 x 20 Kg", "5 x 25 Kg"],
  },
  {
    muscleGroup: "Krūtinė",
    exercise: "Spausti įtvirtinta štanga kampu + suvedimai staklėse",
    series: ["4x10 30 Kg", "4x12 20 KG"],
  },
  {
    muscleGroup: "Nugara",
    exercise: "Viršutinio torso trauka už galvos",
    series: ["4x12 20 Kg"],
  },
  {
    muscleGroup: "Nugara",
    exercise: "Trauka sėdint treniruoklyje plačiai",
    series: ["4x12 20 Kg"],
  },
  {
    muscleGroup: "Bicepsas",
    exercise: "Lenkimas treniruoklyje+lenkimas su štanga",
    series: ["4x12 15Kg", "4x10 15 Kg"],
  },
];

const day2: SportData[] = [
  {
    muscleGroup: "Apšilimas",
    exercise: "Dviratis",
    series: ["5 min"],
  },
  {
    muscleGroup: "Presas",
    exercise: "Susirietimai įstrižiniams",
    series: ["4x12"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Lenkimas sėdint",
    series: ["4x15 25 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Lenkimas gulint",
    series: ["3x12 10 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Tiesimas sėdint paskui pamažinant svorį",
    series: ["4x12+12 2x10 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Kojų platforma gulint",
    series: ["4x15 50 Kg"],
  },
  {
    muscleGroup: "Kojos",
    exercise: "Suvedimai",
    series: ["4x15 35 Kg"],
  },
  {
    muscleGroup: "Blauzdos",
    exercise: "Su koju platforma didinant kas plytele",
    series: ["18x 40 Kg", "15x50 Kg", "12x60 Kg", "10x70 Kg", "08x80 Kg"],
  },
];

interface ExerciseTableProps {
  data: SportData[];
}

const ExerciseTable = ({ data }: ExerciseTableProps) => {
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
