import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '1rem' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} variant="contained">
        contained
      </Button>
      <Button theme="error" style={buttonStyle} variant="outlined">
        outlined
      </Button>
      <Button theme="warning" style={buttonStyle} variant="text">
        text
      </Button>
      <Button theme="info" style={buttonStyle}>
        default
      </Button>
    </div>
  );
}
