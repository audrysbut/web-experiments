import { Node, NodeParams } from './graph-calculation';
import { GraphView, TitleData } from './graph-view';

const mbti: Node<TitleData> = {
  content: { title: 'Pick' },
  nodes: [
    {
      content: { title: 'Ni' },
      nodes: [
        {
          id: '111',
          content: { title: 'Te' },
          nodes: [
            {
              id: '1111',
              content: { title: 'Fi' },
              nodes: [{ id: '11111', content: { title: 'Se' } }],
            },
          ],
        },
        {
          id: '112',
          content: { title: 'Fe' },
          nodes: [
            {
              id: '1121',
              content: { title: 'Ti' },
              nodes: [{ id: '11211', content: { title: 'Se' } }],
            },
          ],
        },
      ],
    },
    {
      content: { title: 'Te' },
      nodes: [
        {
          id: '121',
          content: { title: 'Si' },
          nodes: [
            {
              id: '1211',
              content: { title: 'Ne' },
              nodes: [{ id: '12111', content: { title: 'Fi' } }],
            },
          ],
        },
        {
          id: '122',
          content: { title: 'Ni' },
          nodes: [
            {
              id: '1221',
              content: { title: 'Se' },
              nodes: [{ id: '12211', content: { title: 'Fi' } }],
            },
          ],
        },
      ],
    },
    {
      content: { title: 'Fi' },
      nodes: [
        {
          id: '131',
          content: { title: 'Ne' },
          nodes: [
            { content: { title: 'Si' }, nodes: [{ content: { title: 'Te' } }] },
          ],
        },
        {
          id: '132',
          content: { title: 'Se' },
          nodes: [
            { content: { title: 'Ni' }, nodes: [{ content: { title: 'Te' } }] },
          ],
        },
      ],
    },
    {
      content: { title: 'Se' },
      nodes: [
        {
          id: '141',
          content: { title: 'Ti' },
          nodes: [
            { content: { title: 'Fe' }, nodes: [{ content: { title: 'Ni' } }] },
          ],
        },
        { id: '142', content: { title: 'Fi' } },
      ],
    },
    {
      content: { title: 'Ne' },
      nodes: [
        { id: '151', content: { title: 'Ti' } },
        { id: '152', content: { title: 'Fi' } },
      ],
    },
    {
      content: { title: 'Ti' },
      nodes: [
        { id: '161', content: { title: 'Ne' } },
        { id: '162', content: { title: 'Se' } },
      ],
    },
    {
      content: { title: 'Fe' },
      nodes: [
        { id: '171', content: { title: 'Si' } },
        { id: '172', content: { title: 'Ti' } },
      ],
    },
    {
      content: { title: 'Si' },
      nodes: [
        { id: '181', content: { title: 'Te' } },
        { id: '182', content: { title: 'Fe' } },
      ],
    },
  ],
};

// const graph: Node<TitleData> = {
//   content: { title: '1 ' },
//   nodes: [
//     {
//       content: { title: '11' },
//       nodes: [
//         {
//           content: { title: '111' },
//           nodes: [
//             {
//               content: { title: '1111' },
//             },
//             {
//               content: { title: '1112' },
//             },
//             {
//               content: { title: '1113' },
//             },
//           ],
//         },
//         {
//           content: { title: '112' },
//           nodes: [
//             {
//               id: '1121',
//               content: { title: '1121' },
//             },
//           ],
//         },
//         {
//           content: { title: '113' },
//         },
//         {
//           content: { title: '114' },
//         },
//         {
//           content: { title: '115' },
//           nodes: [
//             { id: '1151', content: { title: '1151' } },
//             { id: '1152', content: { title: '1152' } },
//           ],
//         },
//         {
//           content: { title: '116' },
//         },
//       ],
//     },
//     {
//       content: { title: '12' },
//       nodes: [
//         {
//           content: { title: '121' },
//         },
//         {
//           content: { title: '122' },
//         },
//       ],
//     },
//   ],
// };

export const GraphPage = () => {
  const params: NodeParams = {
    height: 50,
    width: 50,
    horizontalGap: 25,
    verticalGap: 25,
  };
  return (
    <>
      <GraphView graph={mbti} params={params} />
      {/* <GraphView graph={graph} params={params} /> */}
    </>
  );
};
