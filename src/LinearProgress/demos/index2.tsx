import { LinearProgress } from 'artistry-ui';
import React from 'react';

export default function LinearProgressDemo() {
  return (
    <>
      <div style={{ paddingBottom: '40px' }}>
        <LinearProgress />
      </div>
      <div style={{ paddingBottom: '40px' }}>
        <LinearProgress color="green" />
      </div>
      <div style={{ paddingBottom: '40px' }}>
        <LinearProgress color="red" />
      </div>
      <div>
        <LinearProgress color="#9E9E9E" />
      </div>
    </>
  );
}
