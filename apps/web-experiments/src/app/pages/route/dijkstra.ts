import Graph from 'node-dijkstra';
import { ObsticleData } from './inputs';

export function findRoute(
  start: ObsticleData,
  end: ObsticleData,
  obsticles: ObsticleData[],
  cols: number,
  rows: number
): ObsticleData[] {
  const graph = new Graph();
  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      const isObsticle = obsticles.some((inp) => inp.i === i && inp.j === j);
      if (isObsticle) {
        continue;
      }

      const isRightObsticle = obsticles.some(
        (inp) => inp.i === i + 1 && inp.j === j
      );
      const map = new Map<string, number>();
      if (!isRightObsticle) {
        const rightNode = `${i + 1}_${j}`;
        map.set(rightNode, 1);
      }

      const isBottomObsticle = obsticles.some(
        (inp) => inp.i === i && inp.j === j + 1
      );
      if (!isBottomObsticle) {
        const bottomNode = `${i}_${j + 1}`;
        map.set(bottomNode, 1);
      }

      const isBottomRightObsticle = obsticles.some(
        (inp) => inp.i === i + 1 && inp.j === j + 1
      );
      if (!isBottomRightObsticle) {
        const bottomRightNode = `${i + 1}_${j + 1}`;
        map.set(bottomRightNode, 1.4);
      }

      const node = `${i}_${j}`;
      graph.addNode(node, map);
    }
  }
  const startNode = `${start.i}_${start.j}`;
  const destinationNode = `${end.i}_${end.j}`;

  const shortestRoute = graph.path(startNode, destinationNode);
  if (Array.isArray(shortestRoute)) {
    const routeString = shortestRoute as string[];
    return routeString.map((inp) => {
      const [i, j] = inp.split('_');
      return { i: Number(i), j: Number(j) };
    });
  }
  return [];
}
