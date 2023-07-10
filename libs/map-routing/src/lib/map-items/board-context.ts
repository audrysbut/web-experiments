import React from 'react';
import { useContext } from 'react';

export interface BoardSettings {
  width: number;
  height: number;
  step: number
}

interface MouseMoveEvent {
  x: number;
  y: number;
}

type MouseMoveHandler = (e: MouseMoveEvent) => void;

export interface BoardContextContent {
  settings: BoardSettings;
  onMouseMove: (handler: MouseMoveHandler) => () => boolean;
  publishMouseMove: (e: MouseMoveEvent) => void;
}

export function initBoardContext(settings: BoardSettings): BoardContextContent {
  const mouseMoveSubscribers = new Set<MouseMoveHandler>();
  const onMouseMove = (handler: MouseMoveHandler) => {
    mouseMoveSubscribers.add(handler);
    return () => {
      return mouseMoveSubscribers.delete(handler);
    };
  };
  const publishMouseMove = (e: MouseMoveEvent) => {
    mouseMoveSubscribers.forEach((subscriber) => subscriber(e));
  };
  return { onMouseMove, publishMouseMove, settings };
}

export const BoardContext = React.createContext<BoardContextContent>(
  undefined as any
);

export const useBoardContext = () => useContext(BoardContext);
