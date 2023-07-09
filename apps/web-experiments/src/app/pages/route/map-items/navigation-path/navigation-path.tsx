import { useState } from 'react';
import { MapObject } from '../map-object';
import { NavigationPoint } from './navigation-point';
import { OriginPoint } from './origin-point';
import { Position, findPath } from '../../route-detection';

interface NavigationPathProps {
  mapObjects: MapObject[];
  step: number;
}

export const NavigationPath: React.FC<NavigationPathProps> = ({
  mapObjects,
  step,
}) => {
  const origin = useState<Position>({ x: 15, y: 15 });
  const [start] = origin;

  const [end] = useState<Position>({
    x: 599,
    y: 599,
  });
  const path = findPath(mapObjects, step, 600, 600, start, end);
  const pathPoints = path.map(({ x, y }) => <NavigationPoint cx={x} cy={y} />);
  return (
    <g>
      {pathPoints}
      <OriginPoint origin={origin} />
    </g>
  );
};
