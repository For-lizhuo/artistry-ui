import { EnterOutlined } from '@ant-design/icons';
import { Link } from 'artistry-ui';
import React from 'react';

export default function LinkDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <Link href="#" disabled>
        Disabled
      </Link>
      <Link href="#" underline="none" disabled color='red'>
        Disabled
      </Link>
      <Link href="#" disabled color='#000000'>
        <EnterOutlined />
      </Link>
    </div>
  );
}
