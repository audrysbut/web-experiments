import { useState } from 'react';
import { MapObject } from './map-object';
import { Position, findPath } from '../route-detection';

export class RoutePath implements MapObject {
  constructor(
    private readonly mapObjects: MapObject[],
    private readonly step: number
  ) {}
  isCollision(x: number, y: number): boolean {
    return false;
  }
  toFC(): JSX.Element {
    return <RouteComponent mapObjects={this.mapObjects} step={this.step} />;
  }
}

interface RouteComponentProps {
  mapObjects: MapObject[];
  step: number;
}

const RouteComponent: React.FC<RouteComponentProps> = ({
  mapObjects,
  step,
}) => {
  const [start] = useState<Position>({ x: 0, y: 0 });
  const [end] = useState<Position>({
    x: 599,
    y: 599,
  });
  const path = findPath(mapObjects, step, 600, 600, start, end);

  const lines: JSX.Element[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    const current = path[i];
    // const next = navigationRoute[i + 1];
    const line = (
      <circle
        key={`L${current.x}_${current.y}`}
        cx={current.x}
        cy={current.y}
        r={2}
        stroke="black"
        fill="lightgreen"
        strokeWidth={1}
      />
      // <line x1={current.x} y1={current.y} x2={next.x} y2={next.y} stroke='black' strokeWidth={3}/>
    );
    lines.push(line);
  }
  return <g>{lines}</g>;
};
