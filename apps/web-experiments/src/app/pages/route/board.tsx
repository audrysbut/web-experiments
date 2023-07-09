import { useRef } from 'react';
import { MapObject, useBoardMouseMoveSubscribe } from './map-items/map-object';

interface BoardProps {
  mapObjects: MapObject[];
}

export const Board: React.FC<BoardProps> = ({ mapObjects }) => {
  const ref = useRef(null);
  const context = useBoardMouseMoveSubscribe();
  const children = mapObjects.map((i) => i.toFC(context));
  return (
    <svg
      ref={ref}
      width={600}
      height={600}
      style={{ border: '2px solid black', borderRadius: '10px' }}
      onMouseMove={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if (ref.current) {
          const bound = ref.current.getBoundingClientRect()
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
