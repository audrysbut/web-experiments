import { select } from "d3";
import { useEffect, useRef } from "react";
import {
  calculateGraph,
  GraphParams,
  Node,
  NodeDataPoint,
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

function calculateCenterX(node: NodeDataPoint): number {
  return node.startPosition + node.width! / 2
}

function calculateCenterY(node: NodeDataPoint, params: GraphParams): number {
  return params.widthConst * node.level * 1.5
}

function calculateRadius(params: GraphParams): number {
  return params.widthConst / 2
}

export const GraphPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const params: GraphParams = {
      widthConst: 100
    }
    const nodes = calculateGraph(graph, params);

    const update = select("g").selectAll("circle").data(nodes.data);
    update.exit().remove();
    update
      .enter()
      .append("circle")
      .attr("r", calculateRadius(params))
      .attr("cx", (d) => calculateCenterX(d))
      .attr("cy", (d) => calculateCenterY(d, params))
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("fill", "white");

    update
      .enter()
      .append("text")
      .attr("x", (d) => calculateCenterX(d))
      .attr("y", (d) => calculateCenterY(d, params))
      .attr("fill", "black")
      .attr("font-size", "2em")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .text((d) => d.id);

    update
      .attr("r", calculateRadius(params))
      .attr("cx", (d) => calculateCenterX(d))
      .attr("cy", (d) => calculateCenterY(d, params))
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("fill", "white");

    return () => {
      // update.exit().remove();
    };
  }, []);
  return (
    <div>
      <svg id="content" width="100%" height="1000" ref={containerRef}>
        <g transform="translate(100, 100)" />
      </svg>
    </div>
  );
};
