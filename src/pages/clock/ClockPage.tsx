import React, { useEffect, useState } from "react";
import { Clock, ClockSettings } from "./clock/Clock";

const getClockSettings = (): ClockSettings => {
  const clockWidth = 420;
  const clockHeight = 420;
  const clockCircleThicknes = 3;
  const centerX = clockWidth / 2;
  const centerY = clockHeight / 2;
  const clockRadius = clockWidth / 2 - clockCircleThicknes / 2;
  const sencondsArrowLength = clockWidth / 2 - 60;
  const minuteArrowLength = clockWidth / 2 - 55;
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

const getTime = () => {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  return hour * 3600 + minute * 60 + second;
};

export const ClockPage = () => {
  const settings = getClockSettings();
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const handle = setInterval(() => {
      const currentTime = getTime();
      setTime(currentTime);
    }, 1000);
    return () => {
      clearInterval(handle);
    };
  }, []);

  return <Clock settings={settings} time={time} />;
};
