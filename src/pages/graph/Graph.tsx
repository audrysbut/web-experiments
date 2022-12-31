import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  calculateGraph,
  Node,
  NodeDataConnection,
  NodeDataPoint,
  NodeTree,
} from "./graph-calculation";
import { select, Selection, BaseType } from "d3";

export interface GraphParams<T> {
  graph: Node<T>;
  width: number;
}

let graphIndex = 0;
export const Graph = <T,>(params: GraphParams<T>) => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [gIndex] = useState(`g${graphIndex++}`);

  useEffect(() => {
    const graphData = calculateGraph(params);
    setWidth(graphData.width);
    setHeight(graphData.height);
    const g = select(`#${gIndex}`);

    drawCircles(g, graphData, params, setSelected, selected);
    drawConnections(g, graphData, params);

    drawText(g, graphData, params);
  }, [gIndex, params, selected]);
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <svg id="content" width="100%" height="100%" ref={containerRef}>
        <g
          id={gIndex}
          transform={`translate(0, ${params.width * 0.52})`}
        />
      </svg>
    </div>
  );
};

function drawConnections<T>(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree<T>,
  params: GraphParams<T>
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
      const dx = _x2 - _x1;
      const radius = 12;
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

function drawCircles<T>(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree<T>,
  params: GraphParams<T>,
  setSelected: Dispatch<SetStateAction<string>>,
  selected: string
) {
  const circles = g.selectAll("#circles").data(nodes.dataPoints);
  circles
    .enter()
    .append("circle")
    .attr("id", "circles")
    .attr("r", radius(params))
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", "lightgreen")
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", () => setSelected(""));

  circles
    .attr("r", radius(params))
    .attr("id", "circles")
    .attr("cx", (d) => centerX(d))
    .attr("cy", (d) => centerY(d, params))
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill", (d) => (selected === d.id ? "lightblue" : "lightgreen"))
    .on("mouseover", (_, d) => setSelected(d.id))
    .on("mouseout", () => setSelected(""));
}

function radius<T>(params: GraphParams<T>): number {
  return params.width / 2;
}

function centerX<T>(node: NodeDataPoint<T>): number {
  return node.startPosition + node.width / 2;
}

function centerY<T>(node: NodeDataPoint<T>, params: GraphParams<T>): number {
  return params.width * node.level * 1.5;
}

function x1<T>(connection: NodeDataConnection<T>, params: GraphParams<T>) {
  const { dX, parentCenterX } = genericCalculation(connection, params);
  let length = params.width * 0.5; // * Math.cos(angle);
  if (dX < 0) {
    length = length * -1;
  } else if (dX === 0) {
    length = 0;
  }
  return parentCenterX - length;
}

function x2<T>(connection: NodeDataConnection<T>, params: GraphParams<T>) {
  const { childCenterX } = genericCalculation(connection, params);
  let length = params.width * 0.5 * Math.cos(Math.PI * 0.5);
  return childCenterX + length;
}

function y1<T>(connection: NodeDataConnection<T>, params: GraphParams<T>) {
  const { dX, parentCenterY } = genericCalculation(connection, params);
  let length = params.width * 0 * Math.sin(-Math.PI / 2);
  if (dX === 0) {
    length = -params.width / 2;
  }
  return parentCenterY - length;
}

function y2<T>(connection: NodeDataConnection<T>, params: GraphParams<T>) {
  const { childCenterY } = genericCalculation(connection, params);
  let length = params.width * 0.5 * Math.sin(-Math.PI / 2);
  return childCenterY + length;
}

function genericCalculation<T>(
  connection: NodeDataConnection<T>,
  params: GraphParams<T>
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

function getOffset(dx: number, radius: number): number {
  if (dx === 0) {
    return 0;
  }

  if (dx > 0) {
    return radius;
  }
  return -radius;
}

function drawText<T>(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  nodes: NodeTree<T>,
  params: GraphParams<T>
) {
  const text = g.selectAll("#nodeText").data(nodes.dataPoints);
  text
    .enter()
    .append("text")
    .attr("id", "nodeText")
    .attr("x", (d) => centerX(d))
    .attr("y", (d) => centerY(d, params))
    .attr("fill", "black")
    .attr("font-size", `${params.width * 0.33}`)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .style("user-select", "none")
    .style("pointer-events", "none")
    .text((d) => (d.content as any).title);
}
