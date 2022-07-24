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
        {
          id: "114",
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
  return node.startPosition + node.width / 2;
}

function centerY(node: NodeDataPoint, params: GraphParams): number {
  return params.widthConst * node.level * 1.5;
}

function radius(params: GraphParams): number {
  return params.widthConst / 2;
}

function genericCalculation(
  connection: NodeDataConnection,
  params: GraphParams
) {
  const { parent, child } = connection;
  const parentCenterY = centerY(parent, params);
  const parentCenterX = centerX(parent);

  const childCenterX = centerX(child);
  const childCenterY = centerY(child, params);

  const dX = parentCenterX - childCenterX;

  return {
    dX,
    parentCenterX,
    childCenterX,
    parentCenterY,
    childCenterY,
  };
}

function x1(connection: NodeDataConnection, params: GraphParams) {
  const { dX, parentCenterX } = genericCalculation(connection, params);
  let length = params.widthConst * 0.5; // * Math.cos(angle);
  if (dX < 0) {
    length = length * -1;
  } else if (dX === 0) {
    length = 0;
  }
  return parentCenterX - length;
}

function x2(connection: NodeDataConnection, params: GraphParams) {
  const { childCenterX } = genericCalculation(connection, params);
  let length = params.widthConst * 0.5 * Math.cos(Math.PI * 0.5);
  return childCenterX + length;
}

function y1(connection: NodeDataConnection, params: GraphParams) {
  const { dX, parentCenterY } = genericCalculation(connection, params);
  let length = params.widthConst * 0 * Math.sin(-Math.PI / 2);
  if (dX === 0) {
    length = -params.widthConst / 2;
  }
  return parentCenterY - length;
}

function y2(connection: NodeDataConnection, params: GraphParams) {
  const { childCenterY } = genericCalculation(connection, params);
  let length = params.widthConst * 0.5 * Math.sin(-Math.PI / 2);
  return childCenterY + length;
}

export const GraphPage = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState("");
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const params: GraphParams = {
      widthConst: 50,
    };
    const nodes = calculateGraph(graph, params);
    const rootWidth = nodes.dataPoints[nodes.dataPoints.length - 1].width;
    setWidth(rootWidth + 5);
    const g = select("#g");

    drawCircles(g, nodes, params, setSelected, selected);
    drawConnections(g, nodes, params);

    drawText(g, nodes, params);
  }, [selected]);
  return (
    <div
      style={{
        height: "300px",
        width: `${width}px`,
      }}
    >
      <svg id="content" width="100%" height="100%" ref={containerRef}>
        <g id="g" transform="translate(0, 30)" />
      </svg>
    </div>
  );
};

function drawText(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams
) {
  const text = g.selectAll("#nodeText").data(nodes.dataPoints);
  // append text
  text
    .enter()
    .append("text")
    .attr("id", "nodeText")
    .attr("x", (d) => centerX(d))
    .attr("y", (d) => centerY(d, params))
    .attr("fill", "black")
    .attr("font-size", "1em")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("user-select", "none")
    .style("pointer-events", "none")
    .text((d) => d.id);
}

function drawConnections(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams
) {
  const arc = g.selectAll("#connections").data(nodes.connections);
  arc
    .enter()
    .append("path")
    .attr("id", "connections")
    .attr("d", (d) => {
      const _x1 = x1(d, params);
      const _y1 = y1(d, params);
      const _x2 = x2(d, params);
      const _y2 = y2(d, params);
      const dy = _y2 - _y1;
      const dx = _x2 - _x1;
      const minD = Math.min(dx, dy);
      const radius = Math.abs(minD) * 0.5;
      const xOffset = getOffset(dx, radius);
      const m1x = _x2 - xOffset;
      const m1y = _y1;
      const m2x = _x2;
      const m2y = _y1 + radius;
      const arcStart = dx > 0 ? 1 : 0;
      const arcPath = `A ${radius} ${radius} 0 0 ${arcStart} ${m2x} ${m2y}`;
      const arcLine = dx === 0 ? "" : arcPath;
      return `M ${_x1} ${_y1} L ${m1x} ${m1y} ${arcLine} L ${_x2} ${_y2}`;
    })
    .style("fill", "transparent")
    .style("stroke", "black")
    .style("stroke-width", 2);
}

function getOffset(dx: number, radius: number): number {
  if (dx === 0) {
    return 0;
  }

  if (dx > 0) {
    return radius;
  }
  return -radius;
}

function drawCircles(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree,
  params: GraphParams,
  setSelected: Dispatch<SetStateAction<string>>,
  selected: string
) {
  const circles = g.selectAll("#circles").data(nodes.dataPoints);
  // insert circles
  circles
    .enter()
    .append("circle")
    .attr("id", "circles")
    .attr("r", radius(params))
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "lightblue")
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", () => setSelected(""));

  // update circles
  circles
    .attr("r", radius(params))
    .attr("id", "circles")
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", (d) => (selected === d.id ? "blue" : "lightblue"))
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", () => setSelected(""));
}
