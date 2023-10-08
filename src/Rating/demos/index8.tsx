import { Rating } from 'artistry-ui';
import React, { useState } from 'react';

export default function RatingDemo() {
  const defaultScore = 2.5;
  const [score, setScore] = useState(defaultScore);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ paddingBottom: '40px' }}>
        <Rating
          allowHalf
          defaultValue={defaultScore}
          handleRatingCallback={(value) => setScore(value)}
        />
      </div>
      <div style={{ fontSize: '18px' }}>
        {`The score is `}
        <span style={{ color: 'red' }}>{score}</span>
        {`.`}
      </div>
    </div>
  );
}
