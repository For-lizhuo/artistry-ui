import { Input } from 'artistry-ui';
import React from 'react';

export default function InputDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Input placeholder="......" maxLength={8} showCount/>
    </div>
  );
}
