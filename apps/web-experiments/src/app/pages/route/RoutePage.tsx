import { BLOCK_SIZE, COLUMNS_COUNT, ROWS_COUNT, loadBlocks } from './inputs';
import { Block } from './Block';

export const RoutePage = () => {
  const blocks = loadBlocks();

  const children = blocks.map((p) => <Block key={`${p.x}_${p.y}`} {...p} />);
  return <Board>{children}</Board>;
};

interface BoardProps {
  children: React.ReactNode;
}

const Board: React.FC<BoardProps> = ({ children }) => {
  return (
    <svg
      width={COLUMNS_COUNT * BLOCK_SIZE + 2}
      height={ROWS_COUNT * BLOCK_SIZE + 2}
      style={{ border: '2px solid black', borderRadius: '10px' }}
    >
      {children}
    </svg>
  );
};
