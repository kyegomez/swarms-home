import React from 'react';
import Draggable from 'react-draggable';

interface Props {
  width: number;
  height: number;
  dotSpacing: number;
}

const Editor: React.FC<Props> = ({ width, height, dotSpacing }) => {
  return (
    <div style={{ width, height, position: 'relative', border: '1px solid #000' }}>
      {Array.from({ length: Math.ceil(width / dotSpacing) }).map((_, i) =>
        Array.from({ length: Math.ceil(height / dotSpacing) }).map((_, j) => (
          <div
            key={`dot-${i}-${j}`}
            style={{
              position: 'absolute',
              top: j * dotSpacing,
              left: i * dotSpacing,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#000',
            }}
          ></div>
        ))
      )}

      {/* Example draggable block */}
      <Draggable>
        <div style={{ width: 100, height: 50, background: '#e0e0e0', position: 'absolute', top: 50, left: 50, cursor: 'pointer' }}>
          Drag Me
        </div>
      </Draggable>
    </div>
  );
};

export default Editor;
