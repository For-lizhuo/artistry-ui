import { LinearProgress } from 'artistry-ui';
import React from 'react';

export default function LinearProgressDemo() {
  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress color="green" />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress color="red" />
      </div>
      <div>
        <LinearProgress color="#9E9E9E" />
      </div>
    </>
  );
}
