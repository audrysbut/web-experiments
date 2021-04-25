import { MutableRefObject, useEffect, useRef, useState } from "react";
import { select, scaleLinear } from "d3";

const clockWidth = 480;
const clockHeight = 480;

const clockCircleThicknes = 3;
const centerX = clockWidth / 2;
const centerY = clockHeight / 2;
const clockRadius = clockWidth / 2 - clockCircleThicknes / 2;

//TODO: move this code related to minutes to separate file
const minutesScale = scaleLinear()
  .domain([0, 60])
  .range([0, Math.PI * 2]);

const minuteToX = (minute: number, theRadius: number) => {
  const angle = minutesScale(minute);
  const length = theRadius * Math.sin(angle);
  return centerX + length;
};

const minuteToY = (minute: number, theRadius: number) => {
  const angle = minutesScale(minute);
  const length = theRadius * Math.cos(angle);
  return centerY - length;
};

const minutes = Array.from(Array(60).keys());
const isMinute = (minute: number) => minute % 5;

//TODO: move this code related to hour to separate file
const hoursScale = scaleLinear()
  .domain([0, 12])
  .range([0, Math.PI * 2]);

const hoursToX = (hour: number, theRadius: number) => {
  const angle = hoursScale(hour);
  const length = theRadius * Math.sin(angle);
  return centerX + length;
};

const hoursToY = (hour: number, theRadius: number) => {
  const angle = hoursScale(hour);
  const length = theRadius * Math.cos(angle);
  return centerY - length;
};

const hours = Array.from(Array(12).keys()).map((num) => num + 1);

function drawLines(svgRef: MutableRefObject<SVGSVGElement | null>) {
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
    .attr("x1", (minute) => minuteToX(minute, minuteRadius(minute)))
    .attr("y1", (minute) => minuteToY(minute, minuteRadius(minute)))
    .attr("x2", (minute) => minuteToX(minute, clockRadius))
    .attr("y2", (minute) => minuteToY(minute, clockRadius))
    .attr("stroke", "black")
    .attr("stroke-width", (minute) => (isMinute(minute) ? 2 : 4));
}

const drawHourText = (svgRef: MutableRefObject<SVGSVGElement | null>) => {
  const hourRadius = clockRadius - 45;
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
    .attr("x", (hour) => hoursToX(hour, hourRadius))
    .attr("y", (hour) => hoursToY(hour, hourRadius))
    .text((value) => value);
  hoursLines.exit().remove();
};

const secondArrowScale = scaleLinear().domain([0, 60]).range([-180, 180]);
const sencondsArrowLength = clockWidth / 2 - 60;

const drawSecondsArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  secondInADay: Number
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#second").remove();
  svg
    .append("g")
    .attr("id", "second")
    .attr(
      "transform",
      `translate(${centerX}, ${centerY}) rotate(${secondArrowScale(
        secondInADay
      )})`
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
const minuteArrowLength = clockWidth / 2 - 40;
const drawMinuteArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  secondInADay: Number
) => {
  const svg = select(svgRef.current);

  svg.selectAll("#minute").remove();
  svg
    .append("g")
    .attr("id", "minute")
    .attr(
      "transform",
      `translate(${centerX}, ${centerY}) rotate(${minutesArrowScale(
        secondInADay
      )})`
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
const hourArrowLength = clockWidth / 2 - 100;

const drawHourArrow = (
  svgRef: MutableRefObject<SVGSVGElement | null>,
  time: Number
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

const drawMidleCircle = (svgRef: MutableRefObject<SVGSVGElement | null>) => {
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

export const Clock = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    drawLines(svgRef);
    drawHourText(svgRef);

    //TODO: draw arrows
    const handle = setInterval(() => {
      const date = new Date();
      const second = date.getSeconds();
      const minute = date.getMinutes();
      const hour = date.getHours();

      const time = hour * 3600 + minute * 60 + second;
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  useEffect(() => {
    drawHourArrow(svgRef, time);
    drawMinuteArrow(svgRef, time);
    drawSecondsArrow(svgRef, time);
    drawMidleCircle(svgRef);
  }, [time]);
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
