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
      <CircularProgress color="green" />
      <CircularProgress color="red" />
      <CircularProgress color="#9E9E9E" />
    </div>
  );
}
