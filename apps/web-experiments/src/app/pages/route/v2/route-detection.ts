import { MapObject } from './map-object';
import Graph from 'node-dijkstra';

export interface Position {
  x: number;
  y: number;
}
export function findPath(
  mapObjects: MapObject[],
  step: number,
  width: number,
  height: number,
  start: Position,
  end: Position
): Position[] {
  const graph = new Graph();
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      const isCurrentPositionObsticle = mapObjects.some((o) =>
        o.isCollision(x, y)
      );
      if (isCurrentPositionObsticle) {
        continue;
      }
      const node = coordinateToNode(x, y, step);
      const map = new Map<string, number>();
      for (let nextX = x - step; nextX < x + 2 * step; nextX += step) {
        for (let nextY = y - step; nextY < y + 2 * step; nextY += step) {
          if (nextX < 0 || nextX > width) {
            continue;
          }
          if (nextY < 0 || nextY > height) {
            continue;
          }
          if (nextX === x && nextY === y) {
            continue;
          }
        //   if (nextX !== x && nextY !== y) {
        //     continue
        //   }

          const isNextObsticle = mapObjects.some((o) =>
            o.isCollision(nextX, nextY)
          );
          if (!isNextObsticle) {
            const nextNode = coordinateToNode(nextX, nextY, step);
            const distance = findDistance(x, nextX, y, nextY);
            map.set(nextNode, distance);
          }
        }
      }
      graph.addNode(node, map);
    }
  }
  const startNode = coordinateToNode(start.x, start.y, step);
  const endNode = coordinateToNode(end.x, end.y, step);
  const shortestRoute = graph.path(startNode, endNode);
  if (Array.isArray(shortestRoute)) {
    const routeString = shortestRoute as string[];
    return routeString.map((inp) => {
      const [i, j] = inp.split('_');
      const x = Number(i) * step;
      const y = Number(j) * step;
      return { x, y };
    });
  }
  return [];
}

function findDistance(x1: number, x2: number, y1: number, y2: number): number {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);
  return Math.sqrt(dy * dy + dx * dx);
}

function coordinateToNode(x: number, y: number, step: number): string {
  const i = Math.floor(x / step);
  const j = Math.floor(y / step);
  return `${i}_${j}`;
}
