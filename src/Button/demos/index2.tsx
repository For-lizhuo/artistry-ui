import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '1rem' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button style={buttonStyle} width={'60px'} height={'30px'}>
        60x30
      </Button>
      <Button theme="error" style={buttonStyle} width={"100px"} height={"40px"}>
        100x40
      </Button>
      <Button theme="warning" style={buttonStyle} width={'100px'} height={'60px'}>
        100x60
      </Button>
      <Button theme="info" style={buttonStyle} width={'200px'} height={'60px'}>
        200x60
      </Button>
    </div>
  );
}
