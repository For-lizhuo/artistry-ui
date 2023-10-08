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
      <Slider style={{ marginBottom: '40px' }} color='purple'/>
      <Slider style={{ marginBottom: '40px' }} color='grey'/>
      <Slider color='orange'/>
    </div>
  );
}
