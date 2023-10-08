import { GithubOutlined } from '@ant-design/icons';
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
      <Link href="https://www.github.com" target="_self">
        <GithubOutlined />
        <span> Github</span>
      </Link>
      <Link href="https://www.github.com" target="_blank">
        Open in a new tab
      </Link>
    </div>
  );
}
