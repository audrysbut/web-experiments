export class Node {
  id: string = "";
  nodes?: Node[] = [];
  width?: number;
  level?: number;
  startPosition?: number;
}

export const widthConst = 100;
let globalStart = 0;

export function updateNode(node: Node) {
  globalStart = 0;
  return updateNodeInternal(node, 0, 0);
}

function updateNodeInternal(node: Node, level: number, startPosition: number) {
  const nodesCount = node.nodes ? node.nodes.length : 0;
  if (nodesCount === 0) {
    node.width = widthConst;
    node.level = level;
    node.startPosition = startPosition;
    return;
  }

  let childNodesWidth = 0;
  for (let i = 0; i < nodesCount; i++) {
    const n = node.nodes![i];
    if (i > 0) {
      globalStart += widthConst * 1.5;
    }
    updateNodeInternal(n, level + 1, globalStart);
    childNodesWidth += n.width!;
  }
  node.width = childNodesWidth + (nodesCount - 1) * 0.5 * widthConst;
  node.level = level;
  node.startPosition = startPosition;
}

export function getListNode(o: Node, nodeList: Node[] = []): Node[] {
  for (const n of o.nodes || []) {
    getListNode(n, nodeList);
  }
  nodeList.push(o);
  return nodeList;
}
