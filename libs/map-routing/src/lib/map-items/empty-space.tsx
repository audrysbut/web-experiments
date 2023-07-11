import { MapObject } from './map-object';

export class EmptySpaceMapObject implements MapObject {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly width: number,
    private readonly height: number
  ) {}
  isCollision(x: number, y: number): boolean {
    return false;
  }

  toFC(): JSX.Element {
    return (
      <rect
        x={this.x-3.5}
        y={this.y-3.5}
        width={this.width}
        height={this.height}
        fill="transparent"
        stroke="black"
        strokeWidth={1}
      />
    );
  }
}
