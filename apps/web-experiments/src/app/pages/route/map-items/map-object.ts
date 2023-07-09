export interface BoardContext {
  onMouseMove: (handler: MouseMoveHandler) => () => boolean;
  publishMouseMove: (e: MouseMoveEvent) => void;
}

interface MouseMoveEvent {
  x: number;
  y: number;
}
type MouseMoveHandler = (e: MouseMoveEvent) => void;

export const useBoardContext = (): BoardContext => {
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
  return { onMouseMove, publishMouseMove };
};

export interface MapObject {
  isCollision(x: number, y: number): boolean;
  toFC(context: BoardContext): JSX.Element;
}
