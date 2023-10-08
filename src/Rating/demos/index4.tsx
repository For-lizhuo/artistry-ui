import { Rating } from 'artistry-ui';
import React from 'react';

export default function RatingDemo() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ paddingBottom: '40px' }}>
        <Rating size='20px' defaultValue={2}/>
      </div>
      <div style={{ paddingBottom: '40px' }}>
        <Rating size='25px' defaultValue={3}/>
      </div>
      <div>
        <Rating size='30px' defaultValue={4}/>
      </div>
    </div>
  );
}
