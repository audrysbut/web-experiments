import { useRef, useState } from 'react';
import { MapObject } from './map-items/map-object';
import React from 'react';
import { BoardContext, BoardContextContent, BoardSettings, initBoardContext, useBoardContext } from './map-items/board-context';

interface BoardProps {
  mapObjects: MapObject[];
  settings: BoardSettings;
}

const BoardComponent: React.FC<BoardProps> = ({ mapObjects, settings }) => {
  const context = useBoardContext();
  const children = mapObjects.map((i) => i.toFC());
  const ref = useRef<SVGSVGElement>(null);
  return (
    <svg
      ref={ref}
      width={settings.width}
      height={settings.height}
      style={{ border: '2px solid black', borderRadius: '10px' }}
      onMouseMove={(e) => {
        if (ref.current) {
          const bound = ref.current.getBoundingClientRect();
          const x = e.clientX - bound.left;
          const y = e.clientY - bound.top;
          context.publishMouseMove({ x, y });
        }
      }}
    >
      {children}
    </svg>
  );
};

export const Board: React.FC<BoardProps> = (props) => {
  const [state] = useState<BoardContextContent>(initBoardContext(props.settings));
  return (
    <BoardContext.Provider value={state}>
      <BoardComponent {...props}></BoardComponent>
    </BoardContext.Provider>
  );
};
