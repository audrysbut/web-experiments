import { MapObject, BoardContext } from '../map-object';
import { NavigationPath } from './navigation-path';

export class NavigationMapObject implements MapObject {
  constructor(private readonly mapObjects: MapObject[]) {}

  isCollision(x: number, y: number): boolean {
    return false;
  }
  toFC(context: BoardContext): JSX.Element {
    return <NavigationPath mapObjects={this.mapObjects} context={context} />;
  }
}
