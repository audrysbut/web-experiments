import { Position } from '../../route-detection';

interface OriginPointProps {
  origin: [Position, React.Dispatch<React.SetStateAction<Position>>];
}

export const OriginPoint: React.FC<OriginPointProps> = ({ origin }) => {
  const [{ x, y }] = origin;
  return (
    <circle
      cx={x - 2.5}
      cy={y - 2.5}
      r={5}
      stroke="black"
      strokeWidth={1}
      fill="blue"
    />
  );
};
