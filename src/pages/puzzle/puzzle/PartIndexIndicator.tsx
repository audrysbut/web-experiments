interface PartIndexIndicatorProps {
  index: number;
  onClick: () => void;
}

export const PartIndexIndicator = ({
  onClick,
  index,
}: PartIndexIndicatorProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "5px",
        left: "5px",
        color: "white",
        background: "rgba(0,0,0,0.2)",
        borderRadius: "4px",
        padding: "4px",
      }}
      onClick={onClick}
    >
      {index + 1}
    </div>
  );
};
