import { Slider } from 'artistry-ui';
import React, { useState } from 'react';

export default function SliderDemo() {
  const defaultValue = 20;
  const [value, setValue] = useState(defaultValue);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Slider
        labelDisplay
        min={0}
        max={100}
        defaultValue={defaultValue}
        step={10}
        onChange={(value) => setValue(value)}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          fontSize: '16px',
          width: '50%',
          marginTop: '20px',
        }}
      >
        <div>min: 0</div>
        <div>max: 100</div>
        <div>value: {value}</div>
      </div>
    </div>
  );
}
