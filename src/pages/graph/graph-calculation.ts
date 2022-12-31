import { GraphParams } from "./Graph";

export interface Node<T> {
  id: string;
  content: T,
  nodes?: Node<T>[];
}

export class NodeDataPoint<T> {
  constructor(
    public readonly id: string,
    public readonly content: T,
    public readonly width: number,
    public readonly level: number,
    public readonly startPosition: number
  ) {}
}

export interface NodeDataConnection<T> {
  parent: NodeDataPoint<T>;
  child: NodeDataPoint<T>;
}
export class NodeTree<T> {
  constructor(
    public readonly dataPoints: NodeDataPoint<T>[],
    public readonly connections: NodeDataConnection<T>[],
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

interface CalculationResult<T> {
  dataPoints: NodeDataPoint<T>[];
  connections: NodeConnection[];
}

export function calculateGraph<T>(params: GraphParams<T>): NodeTree<T> {
  const level = 0;
  const internalParams: GraphInternalParams = {
    globalStart: 0,
    widthConst: params.width,
  };
  const startPosition = 0;
  const calculationResult: CalculationResult<T> = {
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
  const nodeDataConnections: NodeDataConnection<T>[] = connections.map(
    ({ parentId, childId }) => ({
      parent: nodes.get(parentId)!,
      child: nodes.get(childId)!,
    })
  );
  const lastDataPoint = dataPoints[dataPoints.length - 1];
  const rootWidth = lastDataPoint.width;

  const maxLevel = Math.max(...dataPoints.map((r) => r.level));
  const height =
    (maxLevel + 1) * params.width + 0.53 * maxLevel * params.width;
  return new NodeTree(dataPoints, nodeDataConnections, rootWidth + 5, height);
}

function calculate<T>(
  parentNode: Node<T>,
  calculationResult: CalculationResult<T>,
  level: number,
  params: GraphInternalParams,
  startPosition: number
): CalculationResult<T> {
  const nodesCount = parentNode.nodes?.length || 0;
  if (nodesCount === 0) {
    calculationResult.dataPoints.push({
      id: parentNode.id,
      content: parentNode.content,
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
    content: parentNode.content,
    level,
    startPosition,
    width: childNodesWidth + (nodesCount - 1) * 0.5 * params.widthConst,
  });
  return calculationResult;
}
