import { select, Selection, BaseType } from "d3";
import { useEffect, useRef, useState, SetStateAction, Dispatch } from "react";
import {
  calculateGraph,
  GraphParams,
  Node,
  NodeDataConnection,
  NodeDataPoint,
  NodeTree,
} from "./graph-calculation";

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

function centerX(node: NodeDataPoint): number {
  return node.startPosition + node.width! / 2;
}

function centerY(node: NodeDataPoint, params: GraphParams): number {
  return params.widthConst * node.level * 1.5;
}

function radius(params: GraphParams): number {
  return params.widthConst / 2;
}

function x1(connection: NodeDataConnection, params: GraphParams) {
  const { parent, child } = connection;
  const parentCenterY = centerY(parent, params);
  const parentCenterX = centerX(parent);

  const childCenterX = centerX(child);
  const childCenterY = centerY(child, params);

  const dX = parentCenterX - childCenterX;
  const dY = parentCenterY - childCenterY;

  const angle = Math.atan(dY / dX);
  let length = params.widthConst * 0.5 * Math.cos(angle);
  if (dX < 0) {
    length = length * -1;
  }
  return parentCenterX - length;
}

function x2(connection: NodeDataConnection, params: GraphParams) {
  const { parent, child } = connection;
  const parentCenterY = centerY(parent, params);
  const parentCenterX = centerX(parent);

  const childCenterX = centerX(child);
  const childCenterY = centerY(child, params);

  const dX = parentCenterX - childCenterX;
  const dY = parentCenterY - childCenterY;

  const angle = Math.atan(dY / dX);
  let length = params.widthConst * 0.5 * Math.cos(angle);
  if (dX < 0) {
    length = length * -1;
  }
  return childCenterX + length;
}

function y1(connection: NodeDataConnection, params: GraphParams) {
  const { parent, child } = connection;
  const parentCenterY = centerY(parent, params);
  const parentCenterX = centerX(parent);

  const childCenterX = centerX(child);
  const childCenterY = centerY(child, params);

  const dX = parentCenterX - childCenterX;
  const dY = parentCenterY - childCenterY;

  const angle = Math.atan(dY / dX);
  let length = params.widthConst * 0.5 * Math.sin(angle);
  if (dX < 0) {
    length = length * -1;
  }
  return parentCenterY - length;
}

function y2(connection: NodeDataConnection, params: GraphParams) {
  const { parent, child } = connection;
  const parentCenterY = centerY(parent, params);
  const parentCenterX = centerX(parent);

  const childCenterX = centerX(child);
  const childCenterY = centerY(child, params);

  const dX = parentCenterX - childCenterX;
  const dY = parentCenterY - childCenterY;

  const angle = Math.atan(dY / dX);
  let length = params.widthConst * 0.5 * Math.sin(angle);
  if (dX < 0) {
    length = length * -1;
  }
  return childCenterY + length;
}

export const GraphPage = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const params: GraphParams = {
      widthConst: 100,
    };
    const nodes = calculateGraph(graph, params);
    const g = select("g");

    drawCircles(g, nodes, params, setSelected, selected);
    drawLines(g, nodes, params);

    drawText(g, nodes, params);
  }, [selected]);
  return (
    <div>
      <svg id="content" width="100%" height="1000" ref={containerRef}>
        <g transform="translate(100, 100)" />
      </svg>
    </div>
  );
};

function drawText(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams
) {
  const text = g.selectAll("text").data(nodes.dataPoints);
  // append text
  text
    .enter()
    .append("text")
    .attr("x", (d) => centerX(d))
    .attr("y", (d) => centerY(d, params))
    .attr("fill", "black")
    .attr("font-size", "2em")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("user-select", "none")
    .style("pointer-events", "none")
    .text((d) => d.id);
  // update text
  text
    .attr("x", (d) => centerX(d))
    .attr("y", (d) => centerY(d, params))
    .attr("fill", "black")
    .attr("font-size", "2em")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("user-select", "none")
    .style("pointer-events", "none")
    .text((d) => d.id);
}

function drawLines(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams
) {
  const lines = g.selectAll("line").data(nodes.connections);
  lines
    .enter()
    .append("line")
    .attr("x1", (d) => x1(d, params))
    .attr("y1", (d) => y1(d, params))
    .attr("x2", (d) => x2(d, params))
    .attr("y2", (d) => y2(d, params))
    .style("stroke", "black")
    .style("stroke-width", 4);

  lines
    .attr("x1", (d) => x1(d, params))
    .attr("y1", (d) => y1(d, params))
    .attr("x2", (d) => x2(d, params))
    .attr("y2", (d) => y2(d, params))
    .style("stroke", "black")
    .style("stroke-width", 4);
}

function drawCircles(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams,
  setSelected: Dispatch<SetStateAction<string>>,
  selected: string
) {
  const circles = g.selectAll("circle").data(nodes.dataPoints);
  // insert circles
  circles
    .enter()
    .append("circle")
    .attr("r", radius(params))
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 4)
    .attr("fill", "lightblue")
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", (_, d) => setSelected(""));

  // update circles
  circles
    .attr("r", radius(params))
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 4)
    .attr("fill", (d) => (selected === d.id ? "blue" : "lightblue"))
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", (_, d) => setSelected(""));
}
