import { GithubOutlined, Html5Outlined } from '@ant-design/icons';
import { Avatar } from 'artistry-ui';
import React from 'react';

export default function AvatarDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>
        <GithubOutlined />
      </Avatar>
      <Avatar>
        <Html5Outlined />
      </Avatar>
    </div>
  );
}
