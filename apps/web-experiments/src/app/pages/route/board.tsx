import { useRef } from 'react';
import { MapObject, useBoardContext } from './map-items/map-object';

interface BoardProps {
  mapObjects: MapObject[];
}

export const Board: React.FC<BoardProps> = ({ mapObjects }) => {
  const ref = useRef<SVGSVGElement>(null);
  const context = useBoardContext();
  const children = mapObjects.map((i) => i.toFC(context));
  return (
    <svg
      ref={ref}
      width={600}
      height={600}
      style={{ border: '2px solid black', borderRadius: '10px' }}
      onMouseMove={(e) => {
        if (ref.current) {
          const bound = ref.current.getBoundingClientRect();
          const x = e.clientX - bound.left;
          const y = e.clientY - bound.top;
          context.publishMouseMove({ x, y });
        }
      }}
    >
      {children}
    </svg>
  );
};
