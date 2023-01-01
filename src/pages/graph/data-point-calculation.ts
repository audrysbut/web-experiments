import { Params, Node } from "./graph-calculation";

export function getDataPoints<T>(node: Node<T>, params: Params): NodeInfo<T>[] {
  const dataPoints: NodeInfo<T>[] = [];
  const state: State<T> = {
    startPosition: 0,
    dataPoints,
  };
  const level = 0;
  getNodeInfo(node, state, params, level);
  return dataPoints;
}

interface State<T> {
  startPosition: number;
  dataPoints: NodeInfo<T>[];
}

export interface NodeInfo<T> {
  x: number;
  y: number;
  content: T
  id: string
}

function getNodeInfo<T>(
  graph: Node<T>,
  state: State<T>,
  params: Params,
  level: number
): NodeInfo<T> {
  if (graph.nodes === undefined || graph.nodes.length === 0) {
    const point: NodeInfo<T> = {
      x: state.startPosition,
      y: level * (params.height + params.verticalGap),
      id: graph.id,
      content: graph.content
    };
    state.dataPoints.push(point);
    state.startPosition += params.width + params.horizontalGap;
    return point;
  }
  const children: NodeInfo<T>[] = [];
  for (const node of graph.nodes || []) {
    const p = getNodeInfo(node, state, params, level + 1);
    children.push(p);
  }
  const maxX = children.reduce((prev, cur) => Math.max(prev, cur.x), 0);
  const minX = children.reduce((prev, cur) => Math.min(prev, cur.x), 9999);
  const middleX = (minX + maxX + params.width) / 2;
  const point: NodeInfo<T> = {
    x: middleX - params.width / 2,
    y: level * (params.height + params.verticalGap),
    id: graph.id,
    content: graph.content
  };
  state.dataPoints.push(point);
  return point;
}
