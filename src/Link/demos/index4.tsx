import { ArrowRightOutlined, EnterOutlined } from '@ant-design/icons';
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
      <Link href="#">
        <span>Link</span>
        <EnterOutlined />
      </Link>
      <Link href="#">
        <ArrowRightOutlined />
        <span>Link</span>
      </Link>
      <Link href="#">
        <EnterOutlined />
      </Link>
    </div>
  );
}
