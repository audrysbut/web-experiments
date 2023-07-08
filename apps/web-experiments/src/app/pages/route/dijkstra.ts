import Graph from 'node-dijkstra';
import { PositionData } from './inputs';

export function findRoute(
  start: PositionData,
  end: PositionData,
  obsticles: PositionData[],
  cols: number,
  rows: number
): PositionData[] {
  const graph = new Graph();
  for (let currentRow = 0; currentRow < rows; currentRow++) {
    for (let currentColumn = 0; currentColumn < cols; currentColumn++) {
      const isCurrenPositionObsticle = obsticles.some(
        (inp) => inp.row === currentRow && inp.column === currentColumn
      );
      if (isCurrenPositionObsticle) {
        continue;
      }
      const node = `${currentRow}_${currentColumn}`;
      const map = new Map<string, number>();
      for (let nextPositionRow = currentRow - 1; nextPositionRow < currentRow + 2; nextPositionRow++) {
        for (let nextPostionColumn = currentColumn - 1; nextPostionColumn < currentColumn + 2; nextPostionColumn++) {
          if (nextPositionRow < 0 || nextPositionRow > rows) {
            continue;
          }
          if (nextPostionColumn < 0 || nextPostionColumn > cols) {
            continue;
          }
          if (nextPostionColumn === currentColumn && nextPositionRow === currentRow) {
            continue
          }

          const isNextObsticle = obsticles.some(
            (inp) => inp.row === nextPositionRow && inp.column === nextPostionColumn
          );
          if (!isNextObsticle) {
            const nextNode = `${nextPositionRow}_${nextPostionColumn}`;
            const isCrossPosition = nextPositionRow !== currentRow && nextPostionColumn !== currentColumn
            const distance = isCrossPosition ? 1.414 : 1
            map.set(nextNode, distance);
          }

        }
      }
      graph.addNode(node, map);
    }
  }
  const startNode = `${start.row}_${start.column}`;
  const destinationNode = `${end.row}_${end.column}`;

  const shortestRoute = graph.path(startNode, destinationNode);
  if (Array.isArray(shortestRoute)) {
    const routeString = shortestRoute as string[];
    return routeString.map((inp) => {
      const [i, j] = inp.split('_');
      return { row: Number(i), column: Number(j) };
    });
  }
  return [];
}
