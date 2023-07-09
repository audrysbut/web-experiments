import { MapObject } from './map-items/map-object';

interface BoardProps {
  mapObjects: MapObject[];
}

export const Board: React.FC<BoardProps> = ({ mapObjects }) => {
  const children = mapObjects.map((i) => i.toFC());
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
