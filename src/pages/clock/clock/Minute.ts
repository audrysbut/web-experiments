import { scaleLinear, select } from "d3";
import { MutableRefObject } from "react";
import { ClockSettings } from "./Clock";

const minutes = Array.from(Array(60).keys());
const isMinute = (minute: number) => minute % 5;
const minutesScale = scaleLinear()
  .domain([0, 60])
  .range([0, Math.PI * 2]);

const minuteToX = (
  minute: number,
  theRadius: number,
  { centerX }: ClockSettings
) => {
  const angle = minutesScale(minute);
  const length = theRadius * Math.sin(angle);
  return centerX + length;
};

const minuteToY = (
  minute: number,
  theRadius: number,
  { centerY }: ClockSettings
) => {
  const angle = minutesScale(minute);
  const length = theRadius * Math.cos(angle);
  return centerY - length;
};

export const drawLines = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  clockRadius: number,
  settings: ClockSettings
) => {
  const innerRadius = clockRadius - 10;
  const hourInnerRadius = innerRadius - 10;

  const minuteRadius = (minute: number) =>
    isMinute(minute) ? innerRadius : hourInnerRadius;
  const svg = select(svgRef.current);
  svg.selectAll("#minuteTick").remove();

  svg
    .selectAll("#minuteTick")
    .data(minutes)
    .enter()
    .append("line")
    .attr("id", "minuteTick")
    .attr("x1", (minute) => minuteToX(minute, minuteRadius(minute), settings))
    .attr("y1", (minute) => minuteToY(minute, minuteRadius(minute), settings))
    .attr("x2", (minute) => minuteToX(minute, clockRadius, settings))
    .attr("y2", (minute) => minuteToY(minute, clockRadius, settings))
    .attr("stroke", "black")
    .attr("stroke-width", (minute) => (isMinute(minute) ? 2 : 4));
};
