export interface MapObjectProps {
  x: number;
  y: number;
}

export interface MapObject {
  isCollision(x: number, y: number): boolean;
  toFC(): JSX.Element;
}
