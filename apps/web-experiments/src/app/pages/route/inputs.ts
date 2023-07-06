import { findRoute } from './dijkstra';

export const ROWS_COUNT = 30;
export const COLUMNS_COUNT = 30;
export const BLOCK_SIZE = 20;

export enum BlockType {
  empty = 'empty',
  obsticle = 'obsticle',
  origin = 'origin',
  destination = 'destination',
  route = 'route',
}

export interface BlockProps {
  x: number;
  y: number;
  blockType: BlockType;
}

export function loadBlocks(): BlockProps[] {
  const blocks: BlockProps[] = [];
  for (let i = 0; i < COLUMNS_COUNT; i++) {
    for (let j = 0; j < ROWS_COUNT; j++) {
      const block: BlockProps = getBlockData(i, j);
      blocks.push(block);
    }
  }
  return blocks;
}

export interface ObsticleData {
  i: number;
  j: number;
}

function getObsticles(): ObsticleData[] {
  const obsticles: ObsticleData[] = [];
  for (let row = 0; row < 8; row++) {
    const iStart = COLUMNS_COUNT - row * 4;
    const iEnd = iStart + 2;
    for (let col = 0; col < 5; col++) {
      const jStart = col * 6 + 1;
      const jEnd = jStart + 4;
      obsticles.push(...addObsticleBlock(iStart, iEnd, jStart, jEnd));
    }
  }
  //TODO: remove bellow hardcoded obsticles
  obsticles.push(
    ...[
      { i: 10, j: 0 },
      { i: 10, j: 5 },
      { i: 10, j: 6 },
      { i: 10, j: 11 },
      { i: 10, j: 12 },
    ]
  );
  return obsticles;
}

function addObsticleBlock(
  iStart: number,
  iEnd: number,
  jStart: number,
  jEnd: number
): ObsticleData[] {
  const obsticles: ObsticleData[] = [];
  for (let i = iStart; i < iEnd; i++) {
    for (let j = jStart; j < jEnd; j++) {
      const obsticle: ObsticleData = { i, j };
      obsticles.push(obsticle);
    }
  }
  return obsticles;
}

function getBlockData(i: number, j: number) {
  const blockType = getBlockType(i, j);
  const block: BlockProps = {
    x: i * BLOCK_SIZE + 1,
    y: j * BLOCK_SIZE + 1,
    blockType,
  };
  return block;
}

const startPosition: ObsticleData = { i: 0, j: 0 };
const destinationPosition: ObsticleData = { i: 28, j: 28 };
const obsticles = getObsticles();
const route = findRoute(
  startPosition,
  destinationPosition,
  obsticles,
  COLUMNS_COUNT,
  ROWS_COUNT
);

function getBlockType(i: number, j: number): BlockType {
  const isObsticle = obsticles.some((p) => p.i === i && p.j === j);
  if (isObsticle) {
    return BlockType.obsticle;
  }

  if (startPosition.i === i && startPosition.j === j) {
    return BlockType.origin;
  }

  if (destinationPosition.i === i && destinationPosition.j === j) {
    return BlockType.destination;
  }

  const isRoute = route.some((r) => r.i === i && r.j === j);
  if (isRoute) {
    return BlockType.route;
  }

  return BlockType.empty;
}
