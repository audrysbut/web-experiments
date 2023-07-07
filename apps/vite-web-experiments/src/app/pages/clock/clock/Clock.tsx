import { MutableRefObject, useEffect, useRef } from "react";
import { select } from "d3";
import { drawLines, drawMinuteArrow } from "./Minute";
import { drawHourArrow, drawHourText } from "./Hours";
import { drawSecondsArrow } from "./Second";

export interface ClockSettings {
  clockWidth: number;
  clockHeight: number;
  clockCircleThicknes: number;
  centerX: number;
  centerY: number;
  clockRadius: number;
  sencondsArrowLength: number;
  minuteArrowLength: number;
  hourRadius: number;
  hourArrowLength: number;
}

const drawMidleCircle = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  { centerX, centerY }: ClockSettings
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#midleCircle").remove();
  svg
    .append("circle")
    .attr("id", "midleCircle")
    .attr("cx", centerX)
    .attr("cy", centerY)
    .attr("r", 15)
    .attr("fill", "white")
    .attr("stroke-width", 4)
    .attr("stroke", "black");
};

interface ClockProps {
  settings: ClockSettings;
  time: number;
}

export const Clock = ({ settings, time }: ClockProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    drawLines(svgRef, settings);
    drawHourText(svgRef, settings);
  }, 
  // eslint-disable-next-line
  []);

  useEffect(() => {
    drawMinuteArrow(svgRef, time, settings);
    drawHourArrow(svgRef, time, settings);
    drawSecondsArrow(svgRef, time, settings);
    drawMidleCircle(svgRef, settings);
  }, 
  // eslint-disable-next-line
  [time]);

  const {
    centerX,
    centerY,
    clockWidth,
    clockHeight,
    clockRadius,
    clockCircleThicknes,
  } = settings;
  return (
    <svg ref={svgRef} width={clockWidth} height={clockHeight}>
      <circle
        cx={centerX}
        cy={centerY}
        r={clockRadius}
        fill="white"
        stroke="black"
        strokeWidth={clockCircleThicknes}
      />
    </svg>
  );
};
