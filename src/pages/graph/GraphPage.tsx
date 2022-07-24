import { Graph } from "./Graph";
import { Node } from "./graph-calculation";

const graph: Node = {
  id: "1",
  nodes: [
    {
      id: "11",
      nodes: [
        {
          id: "111",
          nodes: [
            {
              id: "1111",
            },
            {
              id: "1112",
            },
            {
              id: "1113",
            },
          ],
        },
        {
          id: "112",
          nodes: [
            {
              id: "1121",
            },
          ],
        },
        {
          id: "113",
        },
        {
          id: "114",
        },
        {
          id: "115",
          nodes: [{ id: "1151" }, { id: "1152" }],
        },
        {
          id: "116",
        },
      ],
    },
    {
      id: "12",
      nodes: [
        {
          id: "121",
        },
        {
          id: "122",
        },
      ],
    },
  ],
};

export const GraphPage = () => {
  return (
    <div>
      <Graph graph={graph} />
      <Graph graph={graph} />
    </div>
  );
};
