import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider>default</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider thickness="2px">2px</Divider>
      </div>
      <div>
        <Divider thickness="5px">5px</Divider>
      </div>
    </div>
  );
}
