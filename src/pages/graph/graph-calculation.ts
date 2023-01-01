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
  params: NodeParams
) => void;

export interface NodeParams {
  height: number;
  width: number;
  horizontalGap: number;
  verticalGap: number;
}

export interface GraphParams<T> {
  nodeParams: NodeParams
  graph: Node<T>
  drawNode: DrawNode<T>
}

export function getGraphData<T>({ nodeParams, graph }: GraphParams<T>): GraphInfo<T> {
  const parameters: Params = {
    height: nodeParams.height,
    width: nodeParams.width,
    horizontalGap: nodeParams.horizontalGap,
    verticalGap: nodeParams.verticalGap,
  };
  const dataPoints = getDataPoints<T>(graph, parameters);
  const connections = getConnections<T>(graph, parameters);
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
  return { height: height * 1.01, width: width * 1.1 }
}
