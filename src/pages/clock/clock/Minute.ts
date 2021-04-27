import { scaleLinear, select } from "d3";
import { MutableRefObject } from "react";
import { ClockSettings } from "./Clock";

const minutesArrowScale = scaleLinear().domain([0, 3600]).range([-180, 180]);
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

export const drawMinuteArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  time: number,
  { centerX, centerY, minuteArrowLength }: ClockSettings
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#minute").remove();
  svg
    .append("g")
    .attr("id", "minute")
    .attr(
      "transform",
      `translate(${centerX}, ${centerY}) rotate(${minutesArrowScale(time)})`
    )
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", minuteArrowLength)
    .attr("stroke", "black")
    .attr("stroke-width", 5);
};

export const drawLines = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  settings: ClockSettings
) => {
  const { clockRadius } = settings;
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
