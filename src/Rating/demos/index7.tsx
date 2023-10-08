import { Rating } from 'artistry-ui';
import React from 'react';

export default function RatingDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Rating allowHalf defaultValue={2.5}/>
    </div>
  );
}
