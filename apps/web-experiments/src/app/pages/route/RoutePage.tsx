import {
  Board,
  EmptySpaceMapObject,
  MapObject,
  NavigationMapObject,
  Scaffolding,
} from '@web-projects/map-routing';
import { BoardSettings } from 'libs/map-routing/src/lib/map-items/board-context';

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

// function loadSpace(
//   obsticles: MapObject[],
//   settings: BoardSettings
// ): MapObject[] {
//   const spaces: MapObject[] = [];
//   for (let x = 0; x < settings.width; x += settings.step) {
//     for (let y = 0; y < settings.height; y += settings.step) {
//       const isObsticle = obsticles.some((o) => o.isCollision(x, y));
//       if (!isObsticle) {
//         const emptySpace = new EmptySpaceMapObject(
//           x,
//           y,
//           settings.step,
//           settings.step
//         );
//         spaces.push(emptySpace);
//       }
//     }
//   }
//   return spaces;
// }

const settings: BoardSettings = { height: 600, width: 600, step: 7 };
const mapObjects = loadMapObjects();
// const spaces = loadSpace(mapObjects, settings);
export const RoutePage: React.FC = () => {
  const route = new NavigationMapObject(mapObjects);

  const mapObjectsAndRoute = [...mapObjects, route];
  return <Board mapObjects={mapObjectsAndRoute} settings={settings} />;
};
