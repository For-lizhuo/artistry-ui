import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider>solid</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider type="dotted">dotted</Divider>
      </div>
      <div>
        <Divider type="dashed">dashed</Divider>
      </div>
    </div>
  );
}
