interface NavigationPointProps {
  cx: number;
  cy: number;
}
export const NavigationPoint: React.FC<NavigationPointProps> = ({ cx, cy }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={2}
      stroke="black"
      fill="lightgreen"
      strokeWidth={1}
    />
  );
};
