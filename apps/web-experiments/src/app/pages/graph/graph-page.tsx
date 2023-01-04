import { Node, NodeParams } from './graph-calculation';
import { Selection, BaseType, select } from 'd3';
import { NodeInfo } from './data-point-calculation';
import { GraphView } from './graph-view';
import { useState } from 'react';

interface TitleData {
  title: string;
  active?: boolean
}

const mbti: Node<TitleData> = {
  id: '1',
  content: { title: 'Pick' },
  nodes: [
    {
      id: '11',
      content: { title: 'Ni' },
      nodes: [
        { id: '111', content: { title: 'Te' } },
        { id: '112', content: { title: 'Fe' } },
      ],
    },
    {
      id: '12',
      content: { title: 'Te' },
      nodes: [
        { id: '121', content: { title: 'Si' } },
        { id: '121', content: { title: 'Ni' } },
      ],
    },
    {
      id: '13',
      content: { title: 'Fi' },
      nodes: [
        { id: '131', content: { title: 'Ne' } },
        { id: '132', content: { title: 'Se' } },
      ],
    },
    {
      id: '14',
      content: { title: 'Se' },
      nodes: [
        { id: '141', content: { title: 'Ti' } },
        { id: '142', content: { title: 'Fi' } },
      ],
    },
    {
      id: '15',
      content: { title: 'Ne' },
      nodes: [
        { id: '151', content: { title: 'Ti' } },
        { id: '152', content: { title: 'Fi' } },
      ],
    },
    {
      id: '16',
      content: { title: 'Ti' },
      nodes: [
        { id: '161', content: { title: 'Ne' } },
        { id: '162', content: { title: 'Se' } },
      ],
    },
    {
      id: '17',
      content: { title: 'Fe' },
      nodes: [
        { id: '171', content: { title: 'Si' } },
        { id: '172', content: { title: 'Ti' } },
      ],
    },
    {
      id: '18',
      content: { title: 'Si' },
      nodes: [
        { id: '181', content: { title: 'Te' } },
        { id: '182', content: { title: 'Fe' } },
      ],
    },
  ],
};

// const graph: Node<TitleData> = {
//   id: "1",
//   content: { title: "1 " },
//   nodes: [
//     {
//       id: "11",
//       content: { title: "11" },
//       nodes: [
//         {
//           id: "111",
//           content: { title: "111" },
//           nodes: [
//             {
//               id: "1111",
//               content: { title: "1111" },
//             },
//             {
//               id: "1112",
//               content: { title: "1112" },
//             },
//             {
//               id: "1113",
//               content: { title: "1113" },
//             },
//           ],
//         },
//         {
//           id: "112",
//           content: { title: "112" },
//           nodes: [
//             {
//               id: "1121",
//               content: { title: "1121" },
//             },
//           ],
//         },
//         {
//           id: "113",
//           content: { title: "113" },
//         },
//         {
//           id: "114",
//           content: { title: "114" },
//         },
//         {
//           id: "115",
//           content: { title: "115" },
//           nodes: [
//             { id: "1151", content: { title: "1151" } },
//             { id: "1152", content: { title: "1152" } },
//           ],
//         },
//         {
//           id: "116",
//           content: { title: "116" },
//         },
//       ],
//     },
//     {
//       id: "12",
//       content: { title: "12" },
//       nodes: [
//         {
//           id: "121",
//           content: { title: "121" },
//         },
//         {
//           id: "122",
//           content: { title: "122" },
//         },
//       ],
//     },
//   ],
// };

export const GraphPage = () => {
  const [state, setState] = useState(mbti)
  const nodeParams: NodeParams = {
    height: 52,
    width: 50,
    horizontalGap: 25,
    verticalGap: 25,
  };

  return (
    <div>
      {/* <GraphView graph={graph} nodeParams={nodeParams} drawNode={drawNodes} /> */}
      <GraphView graph={state} nodeParams={nodeParams} drawNode={drawNodes} />
      <button onClick={() => {
        setState((prev) => {
          // prev.content.active = true
          const newNode: Node<TitleData> = {
            content: prev.content,
            id: prev.id,
            nodes: prev.nodes
          }
          newNode.nodes![0].content.active = true
          return newNode
        })
      }}>Update Ni</button>
    </div>
  );
};

function drawNodes(
  g: Selection<BaseType, unknown, HTMLElement, any>,
  dataPoints: NodeInfo<TitleData>[],
  params: NodeParams
) {
  const nodes = g.selectAll('#nodes').data(dataPoints);
  nodes
    .enter()
    .append('circle')
    .attr('id', `nodes`)
    .attr('cx', (d) => d.x + params.width / 2)
    .attr('cy', (d) => d.y + params.height / 2)
    .attr('r', params.width / 2)
    .attr('stroke', (d) => d.content.active ? 'red' : 'black')
    .attr('stroke-width', 2)
    .attr('fill', 'lightgreen')
    .on('mouseenter', function (i, d) {
      select(this).attr('fill', 'salmon');
    })
    .on('mouseleave', function () {
      select(this).attr('fill', 'lightgreen');
    });

  nodes
    .attr('stroke', (d) => d.content.active ? 'red' : 'black')

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
}
