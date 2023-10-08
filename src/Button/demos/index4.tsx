import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '10px' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} disabled>
        disabled
      </Button>
      <Button theme="error" style={buttonStyle} disabled>
        disabled
      </Button>
      <Button theme="warning" style={buttonStyle} disabled>
        disabled
      </Button>
    </div>
  );
}
