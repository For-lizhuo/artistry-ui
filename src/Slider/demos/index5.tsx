import { Slider } from 'artistry-ui';
import React from 'react';

export default function SliderDemo() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <Slider labelDisplay min={0} max={10} defaultValue={6} step={2} />
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
          <div>max: 10</div>
          <div>step: 2</div>
        </div>
      </div>
    </>
  );
}
