import { BaseType, select, Selection } from 'd3';
import { useEffect, useRef, useState } from "react";
import { GraphParams, getGraphData } from "./graph-calculation";
import { ConnectionPoint } from "./connection-calculation";

let graphIndex = 0;
export const GraphView = <T,>(params: GraphParams<T>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);
  const [gIndex] = useState(`g${graphIndex++}`);
  useEffect(() => {
    const g = select(`#${gIndex}`);

    const data = getGraphData(params);
    params.drawNode(g, data.dataPoints, params.nodeParams);
    drawConnections<T>(g, data.connections, params);
    setWidth(data.width);
    setHeight(data.height);
  }, [gIndex, params]);

  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <svg id="content" width="100%" height="100%" ref={containerRef}>
        <g id={gIndex} transform={`translate(5, 5)`} />
      </svg>
    </div>
  );
};

function drawConnections<T>(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  connections: ConnectionPoint[],
  params: GraphParams<T>
) {
  const radius = 10;
  const arc = g.selectAll("#connections").data(connections);
  arc
    .enter()
    .append("path")
    .attr("id", "connections")
    .attr("d", (d) => {
      const x1 = d.parent.x;
      const y1 = d.parent.y;

      const x2 = d.child.x;
      const y2 = d.child.y;

      const dx = x2 - x1;
      const xOffset = getOffset(dx, radius);

      const m1x = x2 - xOffset;
      const m1y = y1;
      const arcStart = dx > 0 ? 1 : 0;
      const m2x = x2;
      const m2y = y1 + radius;
      const arcPath =
        dx === 0 ? "" : `A ${radius} ${radius} 0 0 ${arcStart} ${m2x} ${m2y}`;
      return `M ${x1} ${y1} L ${m1x} ${m1y} ${arcPath} L ${x2} ${y2}`;
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
