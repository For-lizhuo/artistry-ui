import { Slider } from 'artistry-ui';
import React from 'react';

export default function SliderDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
      }}
    >
      <Slider style={{ marginBottom: '40px' }} thickness='4px'/>
      <Slider style={{ marginBottom: '40px' }} />
      <Slider width='400px'/>
    </div>
  );
}
