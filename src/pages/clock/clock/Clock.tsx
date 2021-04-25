import { useEffect, useRef } from "react";
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

export const Clock = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    const innerRadius = clockRadius - 10;
    const hourInnerRadius = innerRadius - 10;

    const minuteRadius = (minute: number) =>
      isMinute(minute) ? innerRadius : hourInnerRadius;
    const minutesLines = select(svgRef.current)
      .selectAll("#minute")
      .data(minutes);
    //TODO: remove later on
    minutesLines.selectChildren().remove();
    minutesLines
      .enter()
      .append("line")
      .attr("id", "minute")
      .attr("x1", (minute) => minuteToX(minute, minuteRadius(minute)))
      .attr("y1", (minute) => minuteToY(minute, minuteRadius(minute)))
      .attr("x2", (minute) => minuteToX(minute, clockRadius))
      .attr("y2", (minute) => minuteToY(minute, clockRadius))
      .attr("stroke", "black")
      .attr("stroke-width", (minute) => (isMinute(minute) ? 2 : 4))
      .attr("fill", "black");

    minutesLines.exit().remove();

    const hourRadius = clockRadius - 45;
    //TODO: Draw actual minutes text
    const hoursLines = select(svgRef.current).selectAll("#text").data(hours);

    hoursLines.selectChildren().remove();
    hoursLines
      .enter()
      .append("text")
      .attr("id", "text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", "2.2em")
      .attr("x", (hour) => hoursToX(hour, hourRadius))
      .attr("y", (hour) => hoursToY(hour, hourRadius))
      .text((value) => value);
    hoursLines.exit().remove();
  }, []);
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
