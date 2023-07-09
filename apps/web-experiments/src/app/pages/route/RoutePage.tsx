import { MapObject } from './map-items/map-object';
import { Scaffolding } from './map-items/scaffolding';
import { Board } from './board';
import { RoutePath } from './map-items/route-path';

function loadMapObjects(): MapObject[] {
  const mapItems: MapObject[] = [];
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 4; row++) {
      const x = col * 80 + 30;
      const y = row * 150 + 20;
      const scaffolding = new Scaffolding(x, y);
      mapItems.push(scaffolding);
    }
  }
  return mapItems;
}

const mapObjects = loadMapObjects();
export const RoutePage: React.FC = () => {
  const route = new RoutePath(mapObjects, 4);
  const mapObjectsAndRoute = [...mapObjects, route];
  return <Board mapObjects={mapObjectsAndRoute} />;
};
