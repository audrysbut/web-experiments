import { select } from "d3";
import { useEffect, useRef } from "react";
import { getListNode, Node, updateNode, widthConst } from "./graph-calculation";

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

export const GraphPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    updateNode(graph);
    const nodes = getListNode(graph);
    console.log(graph);

    const update = select("g").selectAll("circle").data(nodes);
    update.exit().remove();
    update
      .enter()
      .append("circle")
      .attr("r", widthConst / 2)
      .attr("cx", (d) => d.startPosition! + d.width! / 2)
      .attr("cy", (d) => widthConst * d.level! * 1.5)
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("fill", "white");

    update
      .enter()
      .append("text")
      .attr("x", (d) => d.startPosition! + d.width! / 2)
      .attr("y", (d) => widthConst * d.level! * 1.5)
      .attr("fill", "black")
      .attr("font-size", "2em")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .text((d) => d.id);

    update
      .attr("r", widthConst / 2)
      .attr("cx", (d) => d.startPosition! + d.width! / 2)
      .attr("cy", (d) => widthConst * d.level! * 1.5)
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
