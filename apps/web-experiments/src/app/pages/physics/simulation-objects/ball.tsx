import { useState, FC } from 'react';
import { SimulationObject } from './simulation-object';

interface BallProps {
  centerX: number;
  centerY: number;
}

export class BallObject implements SimulationObject {
  private simulation = useSimulation(this.props);
  constructor(private readonly props: BallProps) {}

  simulate(): void {
    this.simulation.simulate();
  }

  render(): JSX.Element {
    return <Ball {...this.simulation.props} />;
  }
}

interface SimulationResult {
  props: BallProps;
  simulate: () => void;
}

const useSimulation = (init: BallProps): SimulationResult => {
  const [props, setProps] = useState<BallProps>(init);
  const [speed, setSpeed] = useState(5);
  const simulate = () => {
    setProps((prev) => {
      const { centerX } = prev;
      if (centerX > 1200) {
        setSpeed(-5);
      }

      if (centerX < 0) {
        setSpeed(5);
      }
      const newCenterX = centerX + speed;
      return {
        ...prev,
        centerX: newCenterX,
      };
    });
  };
  return { props, simulate };
};

const Ball: FC<BallProps> = ({ centerX, centerY }) => {
  return (
    <circle
      cx={centerX}
      cy={centerY}
      r={8}
      stroke="black"
      strokeWidth={2}
      fill="lightblue"
    />
  );
};
