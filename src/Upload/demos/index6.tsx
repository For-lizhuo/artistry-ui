import { Slider } from 'artistry-ui';
import React from 'react';

export default function SliderDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Slider disabled labelDisplay/>
    </div>
  );
}
