import { Node, NodeParams } from './graph-calculation';
import { GraphView, TitleData } from './graph-view';

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

const graph: Node<TitleData> = {
  id: '1',
  content: { title: '1 ' },
  nodes: [
    {
      id: '11',
      content: { title: '11' },
      nodes: [
        {
          id: '111',
          content: { title: '111' },
          nodes: [
            {
              id: '1111',
              content: { title: '1111' },
            },
            {
              id: '1112',
              content: { title: '1112' },
            },
            {
              id: '1113',
              content: { title: '1113' },
            },
          ],
        },
        {
          id: '112',
          content: { title: '112' },
          nodes: [
            {
              id: '1121',
              content: { title: '1121' },
            },
          ],
        },
        {
          id: '113',
          content: { title: '113' },
        },
        {
          id: '114',
          content: { title: '114' },
        },
        {
          id: '115',
          content: { title: '115' },
          nodes: [
            { id: '1151', content: { title: '1151' } },
            { id: '1152', content: { title: '1152' } },
          ],
        },
        {
          id: '116',
          content: { title: '116' },
        },
      ],
    },
    {
      id: '12',
      content: { title: '12' },
      nodes: [
        {
          id: '121',
          content: { title: '121' },
        },
        {
          id: '122',
          content: { title: '122' },
        },
      ],
    },
  ],
};

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
      <GraphView graph={graph} params={params} />
    </>
  );
};
