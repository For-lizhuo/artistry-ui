import { LinearProgress } from 'artistry-ui';
import React from 'react';

export default function LinearProgressDemo() {
  return (
    <>
      <div style={{ paddingBottom: '40px' }}>
        <LinearProgress />
      </div>
      <div style={{ paddingBottom: '40px' }}>
        <LinearProgress theme='secondary' thickness='10px' />
      </div>
      <div>
        <LinearProgress theme='success' thickness='15px'/>
      </div>
    </>
  );
}
