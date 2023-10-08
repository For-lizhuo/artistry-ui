import { CircularProgress } from 'artistry-ui';
import React from 'react';

export default function CircularProgressDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <CircularProgress />
      <CircularProgress color='green' size={50} thickness={6}/>
      <CircularProgress color='red' size={60} thickness={8}/>
    </div>
  );
}
