export class Node {
  id: string = "";
  nodes?: Node[];
}

export class NodeDataPoint {
  constructor(
    public readonly id: string,
    public readonly width: number,
    public readonly level: number,
    public readonly startPosition: number
  ) {}
}

class NodeTree {
  constructor(public readonly dataPoints: NodeDataPoint[]) {}
}

export interface GraphParams {
  widthConst: number;
}

interface GraphInternalParams {
  globalStart: number;
  widthConst: number;
}

export function calculateGraph(node: Node, params: GraphParams): NodeTree {
  const dataPoints: NodeDataPoint[] = [];
  const level = 0;
  const internalParams: GraphInternalParams = {
    globalStart: 0,
    widthConst: params.widthConst,
  };
  const startPosition = 0;

  return calculateNodeTree(
    node,
    dataPoints,
    level,
    internalParams,
    startPosition
  );
}

function calculateNodeTree(
  parentNode: Node,
  nodePoints: NodeDataPoint[],
  level: number,
  params: GraphInternalParams,
  startPosition: number
): NodeTree {
  const nodesCount = parentNode.nodes?.length || 0;
  if (nodesCount === 0) {
    nodePoints.push({
      id: parentNode.id,
      level,
      startPosition,
      width: params.widthConst,
    });
    return new NodeTree(nodePoints);
  }

  let childNodesWidth = 0;
  for (let i = 0; i < nodesCount; i++) {
    const n = parentNode.nodes![i];
    if (i > 0) {
      params.globalStart += params.widthConst * 1.5;
    }
    calculateNodeTree(n, nodePoints, level + 1, params, params.globalStart);

    const childNode = nodePoints[nodePoints.length - 1];
    childNodesWidth += childNode.width;
  }

  nodePoints.push({
    id: parentNode.id,
    level,
    startPosition,
    width: childNodesWidth + (nodesCount - 1) * 0.5 * params.widthConst,
  });
  return new NodeTree(nodePoints);
}
