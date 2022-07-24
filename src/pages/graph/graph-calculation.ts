import { GraphParams } from "./Graph";

export interface Node {
  id: string;
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

export interface NodeDataConnection {
  parent: NodeDataPoint;
  child: NodeDataPoint;
}
export class NodeTree {
  constructor(
    public readonly dataPoints: NodeDataPoint[],
    public readonly connections: NodeDataConnection[],
    public readonly width: number,
    public readonly height: number
  ) {}
}

interface GraphInternalParams {
  globalStart: number;
  widthConst: number;
}

interface NodeConnection {
  parentId: string;
  childId: string;
}

interface CalculationResult {
  dataPoints: NodeDataPoint[];
  connections: NodeConnection[];
}

export function calculateGraph(params: GraphParams): NodeTree {
  const level = 0;
  const internalParams: GraphInternalParams = {
    globalStart: 0,
    widthConst: params.widthConst,
  };
  const startPosition = 0;
  const calculationResult: CalculationResult = {
    dataPoints: [],
    connections: [],
  };

  const { dataPoints, connections } = calculate(
    params.graph,
    calculationResult,
    level,
    internalParams,
    startPosition
  );
  const nodes = new Map(dataPoints.map((i) => [i.id, i]));
  const nodeDataConnections: NodeDataConnection[] = connections.map(
    ({ parentId, childId }) => ({
      parent: nodes.get(parentId)!,
      child: nodes.get(childId)!,
    })
  );
  const lastDataPoint = dataPoints[dataPoints.length - 1];
  const rootWidth = lastDataPoint.width;

  const maxLevel = Math.max(...dataPoints.map((r) => r.level));
  const height =
    (maxLevel + 1) * params.widthConst + 0.53 * maxLevel * params.widthConst;
  return new NodeTree(dataPoints, nodeDataConnections, rootWidth + 5, height);
}

function calculate(
  parentNode: Node,
  calculationResult: CalculationResult,
  level: number,
  params: GraphInternalParams,
  startPosition: number
): CalculationResult {
  const nodesCount = parentNode.nodes?.length || 0;
  if (nodesCount === 0) {
    calculationResult.dataPoints.push({
      id: parentNode.id,
      level,
      startPosition,
      width: params.widthConst,
    });
    return calculationResult;
  }

  let childNodesWidth = 0;
  for (let i = 0; i < nodesCount; i++) {
    const n = parentNode.nodes![i];
    if (i > 0) {
      params.globalStart += params.widthConst * 1.5;
    }
    calculate(n, calculationResult, level + 1, params, params.globalStart);

    const childNode =
      calculationResult.dataPoints[calculationResult.dataPoints.length - 1];
    childNodesWidth += childNode.width;

    calculationResult.connections.push({
      parentId: parentNode.id,
      childId: childNode.id,
    });
  }

  calculationResult.dataPoints.push({
    id: parentNode.id,
    level,
    startPosition,
    width: childNodesWidth + (nodesCount - 1) * 0.5 * params.widthConst,
  });
  return calculationResult;
}
