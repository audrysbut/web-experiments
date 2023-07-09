import { useEffect, useState } from 'react';
import { MapObject, BoardContext } from '../map-object';
import { NavigationPoint } from './navigation-point';
import { OriginPoint } from './origin-point';
import { Position, findShortestRoute } from '../../route-detection';

interface NavigationPathProps {
  mapObjects: MapObject[];
  context: BoardContext;
}

export const NavigationPath: React.FC<NavigationPathProps> = ({
  mapObjects,
  context,
}) => {
  const origin = useState<Position>({ x: 250, y: 250 });
  const [end] = useState<Position>({
    x: 599,
    y: 599,
  });
  const path = findShortestRoute(mapObjects, 7, 600, 600, origin[0], end);
  const pathPoints = path.map(({ x, y }) => <NavigationPoint cx={x} cy={y} />);
  return (
    <g>
      {pathPoints}
      <OriginPoint origin={origin} context={context} />
    </g>
  );
};
