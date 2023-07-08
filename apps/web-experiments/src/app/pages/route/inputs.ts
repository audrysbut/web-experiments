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

export interface PositionData {
  row: number;
  column: number;
}

function getObsticles(): PositionData[] {
  const obsticles: PositionData[] = [];
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
      { row: 10, column: 0 },
      { row: 10, column: 5 },
      { row: 10, column: 6 },
      { row: 10, column: 11 },
      { row: 10, column: 12 },
      { row: 13, column: 16 },
      { row: 12, column: 16 },
      { row: 16, column: 16 },
      { row: 17, column: 16 },
    ]
  );
  return obsticles;
}

function addObsticleBlock(
  iStart: number,
  iEnd: number,
  jStart: number,
  jEnd: number
): PositionData[] {
  const obsticles: PositionData[] = [];
  for (let i = iStart; i < iEnd; i++) {
    for (let j = jStart; j < jEnd; j++) {
      const obsticle: PositionData = { row: i, column: j };
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

const startPosition: PositionData = { row: 1, column: 1 };
const destinationPosition: PositionData = { row: 12, column: 14 };
const obsticles = getObsticles();
const route = findRoute(
  startPosition,
  destinationPosition,
  obsticles,
  COLUMNS_COUNT,
  ROWS_COUNT
);

function getBlockType(i: number, j: number): BlockType {
  const isObsticle = obsticles.some((p) => p.row === i && p.column === j);
  if (isObsticle) {
    return BlockType.obsticle;
  }

  if (startPosition.row === i && startPosition.column === j) {
    return BlockType.origin;
  }

  if (destinationPosition.row === i && destinationPosition.column === j) {
    return BlockType.destination;
  }

  const isRoute = route.some((r) => r.row === i && r.column === j);
  if (isRoute) {
    return BlockType.route;
  }

  return BlockType.empty;
}
