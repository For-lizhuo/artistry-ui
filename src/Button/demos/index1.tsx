import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '1rem' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button theme="primary" style={buttonStyle}>
        Primary
      </Button>
      <Button theme="error" style={buttonStyle}>
        Error
      </Button>
      <Button theme="warning" style={buttonStyle}>
        Waring
      </Button>
      <Button theme="info" style={buttonStyle}>
        Info
      </Button>
      <Button theme="success" style={buttonStyle}>
        Success
      </Button>
    </div>
  );
}
