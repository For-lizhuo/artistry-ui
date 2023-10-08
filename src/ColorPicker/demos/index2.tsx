import { ColorPicker } from 'artistry-ui';
import React from 'react';

export default function ColorPickerDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ColorPicker style={{ marginBottom: '30px' }} size='24px'/>
      <ColorPicker style={{ marginBottom: '30px' }} size='32px'/>
      <ColorPicker size='40px'/>
    </div>
  );
}
