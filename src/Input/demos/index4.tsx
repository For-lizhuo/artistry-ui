import { UserOutlined } from '@ant-design/icons';
import { Input } from 'artistry-ui';
import React from 'react';

export default function InputDemo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
       <Input placeholder='username' prefix={<UserOutlined/>}/>
    </div>
  );
}
