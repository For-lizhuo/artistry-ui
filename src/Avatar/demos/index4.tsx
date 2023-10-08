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
      <Avatar bgColor='#66ccff'>A</Avatar>
      <Avatar bgColor='pink'>B</Avatar>
      <Avatar bgColor='grey'>
        <GithubOutlined />
      </Avatar>
      <Avatar bgColor='orange'>
        <Html5Outlined />
      </Avatar>
    </div>
  );
}
