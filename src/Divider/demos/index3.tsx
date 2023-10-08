import React from 'react';
import { Divider } from 'artistry-ui';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={16}>16px</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={20}>20px</Divider>
      </div>
      <div>
        <Divider fontSize={24}>24px</Divider>
      </div>
    </div>
  );
}
