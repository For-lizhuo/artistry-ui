import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider align="left">left</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider>center</Divider>
      </div>
      <div>
        <Divider align="right">right</Divider>
      </div>
    </div>
  );
}
