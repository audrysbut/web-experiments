import {
  Board,
  MapObject,
  NavigationMapObject,
  Scaffolding,
} from '@web-projects/map-routing';

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
  const route = new NavigationMapObject(mapObjects);
  const mapObjectsAndRoute = [...mapObjects, route];
  return (
    <Board
      mapObjects={mapObjectsAndRoute}
      settings={{ height: 600, width: 600, step: 7 }}
    />
  );
};
