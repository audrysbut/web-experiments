import { MutableRefObject, useEffect, useRef, useState } from "react";
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

const getTime = () => {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  return hour * 3600 + minute * 60 + second;
};

interface ClockProps {
  settings: ClockSettings;
}

export const Clock = ({ settings }: ClockProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    drawLines(svgRef, settings);
    drawHourText(svgRef, settings);

    const handle = setInterval(() => {
      const currentTime = getTime();
      setTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  useEffect(() => {
    drawHourArrow(svgRef, time, settings);
    drawMinuteArrow(svgRef, time, settings);
    drawSecondsArrow(svgRef, time, settings);
    drawMidleCircle(svgRef, settings);
  }, [time]);

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
