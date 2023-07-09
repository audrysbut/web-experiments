import { MapObject } from '../map-object';
import { NavigationPath } from './navigation-path';

export class NavigationMapObject implements MapObject {
  constructor(
    private readonly mapObjects: MapObject[],
    private readonly step: number
  ) {}

  isCollision(x: number, y: number): boolean {
    return false;
  }
  toFC(): JSX.Element {
    return (
      <NavigationPath mapObjects={this.mapObjects} step={this.step} />
    );
  }
}
