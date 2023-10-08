import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '10px' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} circle width={'40px'} height={'40px'}>
        P
      </Button>
      <Button theme="error" style={buttonStyle} width={'60px'} height={'60px'} circle>
        E
      </Button>
      <Button theme="warning" style={buttonStyle} width={'80px'} height={'80px'} circle>
        W
      </Button>
    </div>
  );
}
