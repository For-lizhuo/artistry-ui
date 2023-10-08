import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider>default</Divider>
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <Divider thickness="2px">2px</Divider>
      </div>
      <div>
        <Divider thickness="0.5rem">0.5rem</Divider>
      </div>
    </div>
  );
}
