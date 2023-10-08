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
      <div style={{ paddingBottom: '4rem' }}>
        <Rating  defaultValue={2}/>
      </div>
      <div style={{ paddingBottom: '4rem' }}>
        <Rating color='#FF6D75' defaultValue={3} variant='heart'/>
      </div>
      <div>
        <Rating color='red' defaultValue={4} variant='fire'/>
      </div>
    </div>
  );
}
