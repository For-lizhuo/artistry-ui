import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider align="left">left</Divider>
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider>center</Divider>
      </div>
      <div>
        <Divider align="right">right</Divider>
      </div>
    </div>
  );
}
