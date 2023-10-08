import { Collapse } from 'artistry-ui';
import React from 'react';

export default function CollapseDemo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize:'16px'
      }}
    >
      <Collapse header={'title'} defaultOpen disabled>content</Collapse>
    </div>
  );
}
