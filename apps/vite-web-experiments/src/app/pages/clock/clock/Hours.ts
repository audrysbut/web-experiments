import { scaleLinear, select } from "d3";
import { MutableRefObject } from "react";
import { ClockSettings } from "./Clock";

const hoursScale = scaleLinear()
  .domain([0, 12])
  .range([0, Math.PI * 2]);

const hourArrowScale = scaleLinear()
  .domain([0, 12 * 3600])
  .range([-180, 180]);

const hoursToX = (hour: number, { centerX, hourRadius }: ClockSettings) => {
  const angle = hoursScale(hour);
  const length = hourRadius * Math.sin(angle);
  return centerX + length;
};

const hoursToY = (hour: number, { centerY, hourRadius }: ClockSettings) => {
  const angle = hoursScale(hour);
  const length = hourRadius * Math.cos(angle);
  return centerY - length;
};

const hours = Array.from(Array(12).keys()).map((num) => num + 1);

export const drawHourText = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  settings: ClockSettings
) => {
  const svg = select(svgRef.current);
  const hoursLines = svg.selectAll("#text").remove();

  svg
    .selectAll("#text")
    .data(hours)
    .remove()
    .enter()
    .append("text")
    .attr("id", "text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("font-size", "2.2em")
    .attr("fill", "black")
    .attr("x", (hour) => hoursToX(hour, settings))
    .attr("y", (hour) => hoursToY(hour, settings))
    .text((value) => value);
  hoursLines.exit().remove();
};

export const drawHourArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  time: number,
  { centerX, centerY, hourArrowLength }: ClockSettings
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#hour").remove();
  svg
    .append("g")
    .attr("id", "hour")
    .attr(
      "transform",
      `translate(${centerX}, ${centerY}) rotate(${hourArrowScale(time)})`
    )
    .append("rect")
    .attr("x", -4)
    .attr("y", 0)
    .attr("width", 8)
    .attr("height", hourArrowLength)
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("fill", "steelblue")
};
