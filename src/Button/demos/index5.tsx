import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '1rem' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} dashed variant="outlined">
        dashed
      </Button>
      <Button
        theme="error"
        style={buttonStyle}
        dashed
        variant="outlined"
        circle
        width={'20px'} height={'20px'}
      >
        d
      </Button>
    </div>
  );
}
