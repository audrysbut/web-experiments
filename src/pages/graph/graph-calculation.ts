export class Node {
  id: string = "";
  nodes?: Node[];
}

class NodeDataPoint {
  constructor(
    public readonly id: string,
    public readonly width: number,
    public readonly level: number,
    public readonly startPosition: number
  ) {}
}

class NodeTree {
  constructor(public readonly data: NodeDataPoint[]) {}
}

export interface GraphParams {
  widthConst: number;
}

interface GraphInternalParams {
  globalStart: number;
  widthConst: number;
}

export function calculateGraph(node: Node, params: GraphParams): NodeTree {
  const nodeDataPoints = calculateNodeData(
    node,
    [],
    0,
    {
      globalStart: 0,
      widthConst: params.widthConst,
    },
    0
  );
  return new NodeTree(nodeDataPoints);
}

function calculateNodeData(
  o: Node,
  nodePoints: NodeDataPoint[],
  level: number,
  params: GraphInternalParams,
  startPosition: number
): NodeDataPoint[] {
  const nodesCount = o.nodes?.length || 0;
  if (nodesCount === 0) {
    nodePoints.push({
      id: o.id,
      level,
      startPosition,
      width: params.widthConst,
    });
    return nodePoints;
  }

  let childNodesWidth = 0;
  for (let i = 0; i < nodesCount; i++) {
    const n = o.nodes![i];
    if (i > 0) {
      params.globalStart += params.widthConst * 1.5;
    }
    calculateNodeData(n, nodePoints, level + 1, params, params.globalStart);
    childNodesWidth += nodePoints[nodePoints.length - 1].width;
  }

  nodePoints.push({
    id: o.id,
    level,
    startPosition,
    width: childNodesWidth + (nodesCount - 1) * 0.5 * params.widthConst,
  });
  return nodePoints;
}
