import { useState } from 'react';
import { MapObject } from '../map-object';
import { NavigationPoint } from './navigation-point';
import { TargetPoint } from './target-point';
import { Position, findShortestRoute } from '../../route-detection';
import { useBoardContext } from '../board-context';

interface NavigationPathProps {
  mapObjects: MapObject[];
}

export const NavigationPath: React.FC<NavigationPathProps> = ({
  mapObjects,
}) => {
  const { settings } = useBoardContext();
  const origin = useState<Position>({ x: 18, y: 22 });
  const destination = useState<Position>({
    x: 560,
    y: 560,
  });
  const path = findShortestRoute(
    mapObjects,
    settings.step,
    settings.width,
    settings.height,
    origin[0],
    destination[0]
  );
  const pathPoints = path.map(({ x, y }) => (
    <NavigationPoint cx={x} cy={y} key={`nv${x}_${y}`} />
  ));
  return (
    <g>
      {pathPoints}
      <TargetPoint targetState={origin} color="blue" mapObjects={mapObjects} />
      <TargetPoint
        targetState={destination}
        color="red"
        mapObjects={mapObjects}
      />
    </g>
  );
};
