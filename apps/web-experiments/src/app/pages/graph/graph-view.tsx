import { useState } from 'react';
import { GenericGraphView } from './generic-graph-view';
import { NodeParams, Node } from './graph-calculation';
import { renderToStaticMarkup } from 'react-dom/server';

export interface TitleData {
  title: string;
  active?: boolean;
}

interface GraphViewProps {
  params: NodeParams;
  graph: Node<TitleData>;
}

export const GraphView = ({ params, graph }: GraphViewProps) => {
  const [state, setState] = useState(graph);

  const setActiveNodes = (node?: Node<TitleData>) => {
    setState((prev) => {
      const newNode = Object.create(prev);
      setActiveFalse(newNode);
      if (node) {
        const allParents = findAllparents(node, prev);
        for (const p of allParents) {
          p.content.active = true;
        }
      }
      return newNode;
    });
  };

  return (
    <GenericGraphView
      graph={state}
      nodeParams={params}
      drawNode={(g, dataPoints, params) => {
        const nodes = g.selectAll('#nodes').data(dataPoints);
        nodes
          .enter()
          .append('rect')
          .attr('id', `nodes`)
          .attr('x', (d) => d.x)
          .attr('y', (d) => d.y)
          .attr('rx', 5)
          .attr('fill', (d) => (d.content.active ? 'salmon' : 'lightgreen'))
          .attr('stroke', 'black')
          .attr('stroke-width', 2)
          .attr('width', params.width)
          .attr('height', params.height)
          .on('mouseenter', (i, d) => {
            setActiveNodes(d);
          })
          .on('mouseleave', () => setActiveNodes())

        nodes.attr('fill', (d) => (d.content.active ? 'salmon' : 'lightgreen'));

        const text = g.selectAll('#nodeText').data(dataPoints);
        text
          .enter()
          .append('text')
          .attr('id', 'nodeText')
          .attr('x', (d) => d.x + params.width / 2)
          .attr('y', (d) => d.y + params.height / 2)
          .attr('fill', 'black')
          .attr('font-size', `${params.width * 0.33}`)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .style('user-select', 'none')
          .style('pointer-events', 'none')
          .text((d) => d.content.title);
      }}
    />
  );
};

function setActiveFalse(root: Node<TitleData>) {
  root.content.active = false;
  for (const c of root.nodes || []) {
    setActiveFalse(c);
  }
}

function findAllparents<T>(origin: Node<T>, root: Node<T>): Node<T>[] {
  const parentNodes: Node<T>[] = [origin];
  findParents(origin, root, parentNodes);
  return parentNodes;
}

function findParents<T>(
  originalNode: Node<T>,
  parentNode: Node<T>,
  parents: Node<T>[] = []
): Node<T> | undefined {
  for (const c of parentNode.nodes || []) {
    if (c.id === originalNode.id) {
      parents.push(parentNode);
      return parentNode;
    }
    const parent = findParents(originalNode, c, parents);
    if (parent) {
      parents.push(parentNode);
      return parentNode;
    }
  }
  return undefined;
}
