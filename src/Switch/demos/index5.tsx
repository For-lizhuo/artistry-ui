import { Switch } from 'artistry-ui';
import React from 'react';

export default function SwitchDemo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent:'space-evenly',
        flexDirection: 'row',
      }}
    >
      <Switch disabled/>
      <Switch defaultChecked disabled/>
    </div>
  );
}
