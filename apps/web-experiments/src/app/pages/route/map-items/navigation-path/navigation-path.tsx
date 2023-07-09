import { useEffect, useState } from 'react';
import { MapObject, BoardContext } from '../map-object';
import { NavigationPoint } from './navigation-point';
import { TargetPoint } from './target-point';
import { Position, findShortestRoute } from '../../route-detection';

interface NavigationPathProps {
  mapObjects: MapObject[];
  context: BoardContext;
}

export const NavigationPath: React.FC<NavigationPathProps> = ({
  mapObjects,
  context,
}) => {
  const origin = useState<Position>({ x: 18, y: 22 });
  const destination = useState<Position>({
    x: 560,
    y: 560,
  });
  const path = findShortestRoute(
    mapObjects,
    7,
    600,
    600,
    origin[0],
    destination[0]
  );
  const pathPoints = path.map(({ x, y }) => (
    <NavigationPoint cx={x} cy={y} key={`nv${x}_${y}`} />
  ));
  return (
    <g>
      {pathPoints}
      <TargetPoint
        targetState={origin}
        context={context}
        color="blue"
        mapObjects={mapObjects}
      />
      <TargetPoint
        targetState={destination}
        context={context}
        color="red"
        mapObjects={mapObjects}
      />
    </g>
  );
};
