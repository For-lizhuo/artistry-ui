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
      <Switch defaultChecked/>
      <Switch defaultChecked size='30px'/>
      <Switch defaultChecked size='40px'/>
    </div>
  );
}
