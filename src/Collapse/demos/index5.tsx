import { Collapse } from 'artistry-ui';
import React, { useState } from 'react';

export default function CollapseDemo() {
  const [state, setState] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
      }}
    >
      <Collapse header={'title'} onChange={(openState) => setState(openState)}>
        content
      </Collapse>
      <div style={{ marginTop: '20px' }}>
        The state of collapse is
        {state ? (
          <span style={{ color: 'red' }}> open</span>
        ) : (
          <span style={{ color: 'red' }}> fold</span>
        )}
        .
      </div>
    </div>
  );
}
