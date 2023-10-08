import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider>solid</Divider>
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider type="dotted">dotted</Divider>
      </div>
      <div>
        <Divider type="dashed">dashed</Divider>
      </div>
    </div>
  );
}
