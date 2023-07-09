import { useEffect, useState } from 'react';
import { Position } from '../../route-detection';
import { BoardContext } from '../map-object';

interface OriginPointProps {
  origin: [Position, React.Dispatch<React.SetStateAction<Position>>];
  context: BoardContext;
}

export const OriginPoint: React.FC<OriginPointProps> = ({
  origin,
  context,
}) => {
  const [{ x, y }, setOrigin] = origin;
  const [mouseDown, setMouseDown] = useState(false);
  const { onMouseMove: subscribe } = context;
  useEffect(() => {
    const unsubscribe = subscribe(({ x, y }) => {
      if (mouseDown) {
        setOrigin({ x, y });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [mouseDown]);

  return (
    <circle
      cx={x - 2.5}
      cy={y - 2.5}
      r={10}
      stroke="black"
      strokeWidth={1}
      fill="blue"
      onMouseDown={() => {
        // console.log('down');
        setMouseDown(true);
      }}
      onMouseUp={() => {
        // console.log('up');
        setMouseDown(false);
      }}
    />
  );
};
