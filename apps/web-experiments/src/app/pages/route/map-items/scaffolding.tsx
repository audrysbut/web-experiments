import { useState } from 'react';
import { MapObject } from './map-object';

const WIDTH = 40;
const HEIGHT = 80;
const ROW_COUNT = 2;
const COL_COUNT = 4;
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
      <ScafoldingComponent
        originX={this.x}
        originY={this.y}
        key={`SC${this.x}_${this.y}`}
      />
    );
  }
}

interface ScafoldingComponentProps {
  originX: number;
  originY: number;
}
const ScafoldingComponent: React.FC<ScafoldingComponentProps> = ({
  originX,
  originY,
}) => {
  const elements: JSX.Element[] = [];
  for (let i = 0; i < ROW_COUNT; i++) {
    const x = originX + (i * WIDTH) / ROW_COUNT;
    for (let j = 0; j < COL_COUNT; j++) {
      const y = originY + (j * HEIGHT) / COL_COUNT;
      const elem = <ScafoldBlock x={x} y={y} key={`SB${x}_${y}`} />;
      elements.push(elem);
    }
  }
  return <g>{elements}</g>;
};

interface ScafoldBlockProps {
  x: number;
  y: number;
}

const SCAFOLD_BLOCK_WIDTH = WIDTH / ROW_COUNT;
const SCAFOLD_BLOCK_HEIGHT = HEIGHT / COL_COUNT;
const ScafoldBlock: React.FC<ScafoldBlockProps> = ({ x, y }) => {
  const [active, setActive] = useState(false);
  const fill = active ? 'lightblue' : 'lightgray';
  return (
    <rect
      x={x}
      y={y}
      width={SCAFOLD_BLOCK_WIDTH}
      height={SCAFOLD_BLOCK_HEIGHT}
      stroke="black"
      fill={fill}
      strokeWidth={2}
      rx={3}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    />
  );
};
