import { LinearProgress } from 'artistry-ui';
import React from 'react';

export default function LinearProgressDemo() {
  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress />
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <LinearProgress theme='secondary' thickness='10px' />
      </div>
      <div>
        <LinearProgress theme='success' thickness='1.5rem'/>
      </div>
    </>
  );
}
