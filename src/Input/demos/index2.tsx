import { Input } from 'artistry-ui';
import React from 'react';

export default function InputDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Input placeholder="small" width='60px'/>
      <Input placeholder="middle" height='36px' style={{ margin: '20px 0' }} />
      <Input placeholder="large" width='200px' height='42px'/>
    </div>
  );
}
