import { MapObject, MapObjectProps } from './map-object';

const WIDTH = 30;
const HEIGHT = 60;
export class Scaffolding implements MapObject {
  constructor(private readonly x: number, private readonly y: number) {}

  isCollision(x: number, y: number): boolean {
    if (x < this.x) {
      return false;
    }

    if (x > this.x + WIDTH) {
      return false;
    }

    if (y < this.y) {
      return false;
    }

    if (y > this.y + HEIGHT) {
      return false;
    }

    return true;
  }
  toFC(): JSX.Element {
    return (
      <>
        {/* <text x={this.x} y={this.y-5} fontSize={10}>{`${this.x} : ${this.y}`}</text> */}
        <rect
          x={this.x}
          y={this.y}
          width={WIDTH}
          height={HEIGHT}
          stroke="black"
          fill="lightgray"
          strokeWidth={2}
          rx={5}
        />
      </>
    );
  }
}
