import { FC, useEffect } from 'react';
import { SimulationObject } from './simulation-objects/simulation-object';
import { BallObject } from './simulation-objects/ball';

function generateObjects(): SimulationObject[] {
  const objects: SimulationObject[] = [];
  for (let i = 0; i < 10; i++) {
    const ball = new BallObject({ centerX: i * 100, centerY: i * 100 + 10 });
    objects.push(ball);
  }
  return objects;
}

export const PhysicsPage = () => {
  const settings: BoardSettings = {
    width: 1200,
    height: 750,
  };

  const simulationObjects = generateObjects();
  return (
    <PhysicsBoard simulationObjects={simulationObjects} settings={settings} />
  );
};

interface BoardSettings {
  width: number;
  height: number;
}

interface PhysicsBoardProps {
  simulationObjects: SimulationObject[];
  settings: BoardSettings;
}

const PhysicsBoard: FC<PhysicsBoardProps> = ({
  simulationObjects,
  settings,
}) => {
  const { width, height } = settings;
  const children = simulationObjects.map((i) => i.render());
  useEffect(() => {
    const interval = setInterval(() => {
      simulationObjects.forEach((o) => o.simulate());
    }, 5);
    return () => {
      clearInterval(interval);
    };
  }, [simulationObjects]);
  return (
    <svg width={width} height={height} style={{ border: '2px solid black' }}>
      {children}
    </svg>
  );
};
