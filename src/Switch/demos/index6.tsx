import { Switch } from 'artistry-ui';
import React, { useState } from 'react';

export default function SwitchDemo() {
  const defaultState = true;
  const [checked, setChecked] = useState(defaultState);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ paddingBottom: '40px' }}>
        <Switch
          defaultChecked={defaultState}
          handleUpdateChecked={(state) => setChecked(state)}
        />
      </div>
      <div style={{ fontSize: '18px' }}>
        {`The state of switch is `}
        <span style={{ color: 'red' }}>{checked ? 'on' : 'off'}</span>
        {`.`}
      </div>
    </div>
  );
}
