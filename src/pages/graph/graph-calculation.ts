import { ConnectionPoint, getConnections } from "./connection-calculation";
import { NodeInfo, getDataPoints } from "./data-point-calculation";
import { Selection, BaseType } from "d3";

interface GraphInfo<T> {
  dataPoints: NodeInfo<T>[];
  connections: ConnectionPoint[];
  height: number;
  width: number;
}

export interface Params {
  height: number;
  width: number;
  horizontalGap: number;
  verticalGap: number;
}

export interface Node<T> {
  id: string;
  content: T;
  nodes?: Node<T>[];
}

type DrawNode<T> = (
  g: Selection<BaseType, unknown, HTMLElement, any>,
  dataPoints: NodeInfo<T>[],
  params: Graph2Params<T>
) => void;
export interface Graph2Params<T> {
  height: number;
  width: number;
  horizontalGap: number;
  verticalGap: number;
  graph: Node<T>;
  drawNode: DrawNode<T>;
}

export function getGraphData<T>(params: Graph2Params<T>): GraphInfo<T> {
  const parameters: Params = {
    height: params.height,
    width: params.width,
    horizontalGap: params.horizontalGap,
    verticalGap: params.verticalGap,
  };
  const dataPoints = getDataPoints<T>(params.graph, parameters);
  const connections = getConnections<T>(params.graph, parameters);
  const { height, width } = getDimensions(dataPoints, parameters);
  return { dataPoints, connections, height, width };
}

function getDimensions<T>(
  nodes: NodeInfo<T>[],
  params: Params
): { width: number; height: number } {
  const maxX = nodes.reduce((prev, next) => Math.max(prev, next.x), 0);
  const maxY = nodes.reduce((prev, next) => Math.max(prev, next.y), 0);
  const height = maxY + params.height + params.verticalGap;
  const width = maxX + params.width;
  return { height: height * 1.01, width: width * 1.1 };
}
