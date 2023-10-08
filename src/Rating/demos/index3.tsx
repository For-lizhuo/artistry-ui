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
        <Rating  defaultValue={2}/>
      </div>
      <div style={{ paddingBottom: '40px' }}>
        <Rating color='pink' defaultValue={3}/>
      </div>
      <div>
        <Rating color='#00ffff' defaultValue={4}/>
      </div>
    </div>
  );
}
