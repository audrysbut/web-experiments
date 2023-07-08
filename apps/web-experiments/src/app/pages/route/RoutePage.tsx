import { BLOCK_SIZE, COLUMNS_COUNT, ROWS_COUNT, loadBlocks } from './inputs';
import { MapObject } from './v2/map-object';
import { Position, findPath } from './v2/route-detection';
import { Scaffolding } from './v2/scaffolding';

function loadMapObjects(): MapObject[] {
  const mapItems: MapObject[] = [];
  for (let col = 0; col < 10; col++) {
    for (let row = 0; row < 6; row++) {
      const x = col * 55 + 30;
      const y = row * 100 + 20;
      const scaffolding = new Scaffolding(x, y);
      mapItems.push(scaffolding);
    }
  }
  return mapItems;
}

export const RoutePage = () => {
  const mapItems = loadMapObjects();
  const step = 5
  console.time('calculus')
  const positions = findPath(
    mapItems,
    step,
    600,
    600,
    {
      x: 0,
      y: 0,
    },
    {
      x: 599,
      y: 599,
    }
  );
  console.timeEnd('calculus')
  const lines: JSX.Element[] = [];
  for (let i = 0; i < positions.length; i++) {
    const current = positions[i];
    const line = (
      <circle
        key={`L${current.x}_${current.y}`}
        cx={current.x}
        cy={current.y}
        r={step/2}
        stroke="black"
        fill='orange'
        strokeWidth={1}
      />
    );
    lines.push(line);
  }
  const children = [...mapItems.map((i) => i.toFC()), ...lines];
  return <Board>{children}</Board>;
};

interface BoardProps {
  children: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <svg
      width={600}
      height={600}
      style={{ border: '2px solid black', borderRadius: '10px' }}
    >
      {children}
    </svg>
  );
};
