import { useEffect, useRef } from "react";
import { select, scaleLinear } from "d3";
const clockWidth = 480;
const clockHeight = 480;

const clockCircleThicknes = 3;
const centerX = clockWidth / 2;
const centerY = clockHeight / 2;
const clockRadius = clockWidth / 2 - clockCircleThicknes / 2;

const scaleMinutes = scaleLinear()
  .domain([0, 60])
  .range([0, Math.PI * 2]);

const minuteToX = (minute: number, theRadius: number) => {
  const angle = scaleMinutes(minute);
  const length = theRadius * Math.sin(angle);
  return centerX + length;
};

const minuteToY = (minute: number, theRadius: number) => {
  const angle = scaleMinutes(minute);
  const length = theRadius * Math.cos(angle);
  return centerY - length;
};

const minutes = Array.from(Array(60).keys());
const isMinute = (minute: number) => minute % 5;
const drawClockLines = (svgRef: React.MutableRefObject<SVGSVGElement | null>) => {
  const innerRadius = clockRadius - 10;
  const hourInnerRadius = innerRadius - 10;

  const minuteRadius = (minute: number) =>
    isMinute(minute) ? innerRadius : hourInnerRadius;
  const minutesLines = select(svgRef.current).selectAll("line").data(minutes);
  //TODO: remove later on
  minutesLines.selectChildren().remove();
  minutesLines
    .enter()
    .append("line")
    .attr("x1", (minute) => minuteToX(minute, minuteRadius(minute)))
    .attr("y1", (minute) => minuteToY(minute, minuteRadius(minute)))
    .attr("x2", (minute) => minuteToX(minute, clockRadius))
    .attr("y2", (minute) => minuteToY(minute, clockRadius))
    .attr("stroke", "black")
    .attr("stroke-width", (minute) => (isMinute(minute) ? 2 : 4))
    .attr("fill", "black");

  minutesLines.exit().remove();
};

export const Clock = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    drawClockLines(svgRef);
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
