import { MutableRefObject, useEffect, useRef, useState } from "react";
import { select, scaleLinear } from "d3";
import { drawLines } from "./Minute";

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

//TODO: move this code related to hour to separate file
const hoursScale = scaleLinear()
  .domain([0, 12])
  .range([0, Math.PI * 2]);

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

const drawHourText = (
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

const secondArrowScale = scaleLinear().domain([0, 60]).range([-180, 180]);

const drawSecondsArrow = (
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

const minutesArrowScale = scaleLinear().domain([0, 3600]).range([-180, 180]);
const drawMinuteArrow = (
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

const hourArrowScale = scaleLinear()
  .domain([0, 12 * 3600])
  .range([-180, 180]);

const drawHourArrow = (
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
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", hourArrowLength)
    .attr("stroke", "black")
    .attr("stroke-width", 8);
};

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
