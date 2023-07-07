import { Node, Params } from "./graph-calculation";

interface Point {
  x: number;
  y: number;
}

export interface ConnectionPoint {
  parent: Point;
  child: Point;
}

interface State {
  startPoint: number;
}

export function getConnections<T>(
  node: Node<T>,
  params: Params
): ConnectionPoint[] {
  const connections: ConnectionPoint[] = [];
  const state: State = { startPoint: 0 };
  const level = 0;
  fillConnections(node, connections, state, params, level);
  return connections;
}

function fillConnections<T>(
  node: Node<T>,
  connections: ConnectionPoint[],
  state: State,
  params: Params,
  level: number
): Point {
  if (node.nodes === undefined || node.nodes.length === 0) {
    const child: Point = {
      x: state.startPoint + params.width / 2,
      y: level * (params.height + params.verticalGap),
    };
    state.startPoint += params.width + params.horizontalGap;
    return child;
  }

  const childrenPoints: Point[] = [];
  for (const c of node.nodes) {
    const childPoint = fillConnections(
      c,
      connections,
      state,
      params,
      level + 1
    );
    childrenPoints.push(childPoint);
  }

  const minX = childrenPoints.reduce(
    (prev, next) => Math.min(prev, next.x),
    9999
  );
  const maxX = childrenPoints.reduce((prev, next) => Math.max(prev, next.x), 0);
  const dx = maxX - minX;

  for (const child of childrenPoints) {
    const centerX = minX + (maxX - minX) / 2;
    const parent: Point = {
      x: parentX(centerX, child.x, params),
      y: parentY(centerX, child.x, params, level)
    };
    const connection: ConnectionPoint = { child, parent };
    connections.push(connection);
  }

  return {
    x: minX + dx / 2,
    y: level * (params.height + params.verticalGap),
  };
}

function parentY(centerX: number, childX: number, params: Params, level: number): number {
  if (centerX !== childX) {
    return level * (params.height + params.verticalGap) + params.height / 2
  }
  return level * (params.height + params.verticalGap) + params.height
}

function parentX(centerX: number, childX: number, params: Params): number {
  if (centerX > childX) {
    return centerX - params.width / 2;
  }

  if (centerX < childX) {
    return centerX + params.width / 2;
  }

  return centerX
}
