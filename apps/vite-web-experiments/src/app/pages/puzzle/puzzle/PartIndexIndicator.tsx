import "./PartIndicator.css";
interface PartIndexIndicatorProps {
  index: number;
  onClick: () => void;
}

export const PartIndexIndicator = ({
  onClick,
  index,
}: PartIndexIndicatorProps) => {
  return (
    <div className="PartIndexIndicator" onClick={onClick} style={{
      fontSize: "13px"
    }}>
      {index + 1}
    </div>
  );
};
