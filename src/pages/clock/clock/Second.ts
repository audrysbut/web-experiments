import { scaleLinear, select } from "d3";
import { MutableRefObject } from "react";
import { ClockSettings } from "./Clock";

const secondArrowScale = scaleLinear().domain([0, 60]).range([-180, 180]);

export const drawSecondsArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  time: number,
  { centerX, centerY, sencondsArrowLength }: ClockSettings
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#second").remove();
  svg
    .append("g")
    .attr("id", "second")
    .attr(
      "transform",
      `translate(${centerX}, ${centerY}) rotate(${secondArrowScale(time)})`
    )
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", sencondsArrowLength)
    .attr("stroke", "red")
    .attr("stroke-width", 3);
};
