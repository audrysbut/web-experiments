import React from "react";
import { Clock, ClockSettings } from "./clock/Clock";

const getClockSettings = (): ClockSettings => {
  const clockWidth = 420;
  const clockHeight = 420;
  const clockCircleThicknes = 3;
  const centerX = clockWidth / 2;
  const centerY = clockHeight / 2;
  const clockRadius = clockWidth / 2 - clockCircleThicknes / 2;
  const sencondsArrowLength = clockWidth / 2 - 60;
  const minuteArrowLength = clockWidth / 2 - 40;
  const hourRadius = clockRadius - 45;
  const hourArrowLength = clockWidth / 2 - 90;
  return {
    centerX,
    centerY,
    clockCircleThicknes,
    clockRadius,
    clockHeight,
    clockWidth,
    sencondsArrowLength,
    minuteArrowLength,
    hourRadius,
    hourArrowLength,
  };
};

export const ClockPage = () => {
  const settings = getClockSettings();
  return <Clock settings={settings} />;
};
