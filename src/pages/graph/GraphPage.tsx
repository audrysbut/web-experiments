import { Graph } from "./Graph";
import { Node } from "./graph-calculation";

interface TitleData {
  title: string;
}

const graph: Node<TitleData> = {
  id: "1",
  content: { title: "1 " },
  nodes: [
    {
      id: "11",
      content: { title: "11" },
      nodes: [
        {
          id: "111",
          content: { title: "111" },
          nodes: [
            {
              id: "1111",
              content: { title: "1111" },
            },
            {
              id: "1112",
              content: { title: "1112" },
            },
            {
              id: "1113",
              content: { title: "1113" },
            },
          ],
        },
        {
          id: "112",
          content: { title: "112" },
          nodes: [
            {
              id: "1121",
              content: { title: "1121" },
            },
          ],
        },
        {
          id: "113",
          content: { title: "113" },
        },
        {
          id: "114",
          content: { title: "114" },
        },
        {
          id: "115",
          content: { title: "115" },
          nodes: [
            { id: "1151", content: { title: "1151"}, },
            { id: "1152", content: { title: "1152"}, },
          ],
        },
        {
          id: "116",
          content: { title: "116"},
        },
      ],
    },
    {
      id: "12",
      content: { title: "12"},
      nodes: [
        {
          id: "121",
          content: { title: "121"},
        },
        {
          id: "122",
          content: { title: "122"},
        },
      ],
    },
  ],
};

const mbti: Node<TitleData> = {
  id: "1",
  content: { title: "Pick"},
  nodes: [
    {
      id: "11",
      content: { title: "Ni"},
      nodes: [
        { id: "111", content: { title: "Te"}, },
        { id: "112", content: { title: "Fe"}, },
      ],
    },
    {
      id: "12",
      content: { title: "Te"},
      nodes: [
        { id: "121", content: { title: "Si"}, },
        { id: "1211", content: { title: "Ni"}, },
      ],
    },
    {
      id: "13",
      content: { title: "Si"},
      nodes: [
        { id: "131", content: { title: "Te"}, },
        { id: "1311", content: { title: "Fe"}, },
      ],
    },
    {
      id: "14",
      content: { title: "Fi"},
      nodes: [
        { id: "141", content: { title: "Ne"}, },
        { id: "1411", content: { title: "Se"}, },
      ],
    },
  ],
};

export const GraphPage = () => {
  return (
    <>
      <Graph graph={mbti} width={50} />
      <Graph graph={graph} width={50} />
    </>
  );
};
