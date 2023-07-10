import { useEffect, useState } from 'react';
import { Position } from '../../route-detection';
import {  MapObject } from '../map-object';
import { useBoardContext } from '../board-context';

interface TargetPointProps {
  targetState: [Position, React.Dispatch<React.SetStateAction<Position>>];
  color: string;
  mapObjects: MapObject[];
}

export const TargetPoint: React.FC<TargetPointProps> = ({
  targetState,
  color,
  mapObjects,
}) => {
  const [{ x, y }, setTarget] = targetState;
  const [mouseDown, setMouseDown] = useState(false);
  const context = useBoardContext()
  const { onMouseMove: subscribe } = context;
  useEffect(() => {
    const unsubscribe = subscribe(({ x, y }) => {
      if (mouseDown) {
        const isObsticle = mapObjects.some((o) =>
          o.isCollision(x, y)
        );
        if (!isObsticle) {
          setTarget({ x, y });
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [mouseDown, setTarget, subscribe]);

  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      stroke="black"
      strokeWidth={1}
      fill={color}
      onMouseDown={() => {
        setMouseDown(true);
      }}
      onMouseUp={() => {
        setMouseDown(false);
      }}
    />
  );
};
