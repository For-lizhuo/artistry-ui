import { LinearProgress } from 'artistry-ui';
import React from 'react';

export default function LinearProgressDemo() {
  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress theme='secondary' />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress theme='success' />
      </div>
      <div>
        <LinearProgress theme='error' />
      </div>
    </>
  );
}
