import { useState } from 'react';
import { BLOCK_SIZE, BlockProps, BlockType } from './inputs';

export const Block: React.FC<BlockProps> = (props) => {
  switch (props.blockType) {
    case BlockType.empty: {
      return <EmptySpace {...props} />;
    }
    case BlockType.obsticle: {
      return <Obsticle {...props} />;
    }
    case BlockType.origin: {
      return <Origin {...props} />;
    }
    case BlockType.destination: {
      return <Destination {...props} />;
    }
    case BlockType.route: {
      return <Route {...props} />;
    }
  }
};

const EmptySpace: React.FC<BlockProps> = ({ x, y }) => {
  const [hover, setHover] = useState(false);
  const fill = hover ? 'blue' : 'transparent';
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);
  return (
    <rect
      x={x}
      y={y}
      width={BLOCK_SIZE}
      height={BLOCK_SIZE}
      stroke="black"
      fill={fill}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

const Obsticle: React.FC<BlockProps> = ({ x, y }) => {
  return (
    <rect
      x={x}
      y={y}
      width={BLOCK_SIZE}
      height={BLOCK_SIZE}
      stroke="black"
      fill="Brown"
    />
  );
};

const Origin: React.FC<BlockProps> = ({ x, y }) => {
  return (
    <rect
      x={x}
      y={y}
      width={BLOCK_SIZE}
      height={BLOCK_SIZE}
      stroke="black"
      fill="green"
    />
  );
};

const Destination: React.FC<BlockProps> = ({ x, y }) => {
  return (
    <rect
      x={x}
      y={y}
      width={BLOCK_SIZE}
      height={BLOCK_SIZE}
      stroke="black"
      fill="red"
    />
  );
};

const Route: React.FC<BlockProps> = ({ x, y }) => {
  return (
    <rect
      x={x}
      y={y}
      width={BLOCK_SIZE}
      height={BLOCK_SIZE}
      stroke="black"
      fill="blue"
    />
  );
};
