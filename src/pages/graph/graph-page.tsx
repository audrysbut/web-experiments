import { Node, NodeParams } from "./graph-calculation";
import { Selection, BaseType, selectAll, select } from "d3";
import { NodeInfo } from "./data-point-calculation";
import { GraphView } from "./graph-view";

interface TitleData {
  title: string;
}

const mbti: Node<TitleData> = {
  id: "1",
  content: { title: "Pick" },
  nodes: [
    {
      id: "11",
      content: { title: "Ni" },
      nodes: [
        { id: "111", content: { title: "Te" } },
        { id: "112", content: { title: "Fe" } },
      ],
    },
    {
      id: "12",
      content: { title: "Te" },
      nodes: [
        { id: "121", content: { title: "Si" } },
        { id: "1211", content: { title: "Ni" } },
      ],
    },
    {
      id: "13",
      content: { title: "Si" },
      nodes: [
        { id: "131", content: { title: "Te" } },
        { id: "1311", content: { title: "Fe" } },
      ],
    },
    {
      id: "14",
      content: { title: "Fi" },
      nodes: [
        { id: "141", content: { title: "Ne" } },
        { id: "1411", content: { title: "Se" } },
      ],
    },
  ],
};

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
            { id: "1151", content: { title: "1151" } },
            { id: "1152", content: { title: "1152" } },
          ],
        },
        {
          id: "116",
          content: { title: "116" },
        },
      ],
    },
    {
      id: "12",
      content: { title: "12" },
      nodes: [
        {
          id: "121",
          content: { title: "121" },
        },
        {
          id: "122",
          content: { title: "122" },
        },
      ],
    },
  ],
};

export const GraphPage = () => {
  const nodeParams: NodeParams = {
    height: 52,
    width: 50,
    horizontalGap: 25,
    verticalGap: 25,
  };
  return (
    <div>
      <GraphView graph={graph} nodeParams={nodeParams} drawNode={drawNodes} />
      <GraphView graph={mbti} nodeParams={nodeParams} drawNode={drawNodes} />
    </div>
  );
};

function drawNodes(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  dataPoints: NodeInfo<TitleData>[],
  params: NodeParams
) {
  const nodes = g.selectAll("#nodes").data(dataPoints);
  nodes
    .enter()
    .append("circle")
    .attr("id", "nodes")
    .attr("cx", (d) => d.x + params.width / 2)
    .attr("cy", (d) => d.y + params.height / 2)
    .attr("r", params.width / 2)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "lightgreen")
    .on("mouseenter", function () {
      select(this).attr("fill", "salmon");
    })
    .on("mouseleave", function () {
      select(this).attr("fill", "lightgreen");
    });

  const text = g.selectAll("#nodeText").data(dataPoints);
  text
    .enter()
    .append("text")
    .attr("id", "nodeText")
    .attr("x", (d) => d.x + params.width / 2)
    .attr("y", (d) => d.y + params.height / 2)
    .attr("fill", "black")
    .attr("font-size", `${params.width * 0.33}`)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("user-select", "none")
    .style("pointer-events", "none")
    .text((d) => d.content.title);
}
