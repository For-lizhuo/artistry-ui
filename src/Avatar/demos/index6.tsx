import { FileUnknownOutlined } from '@ant-design/icons';
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
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        fallback={'E'}
      ></Avatar>
      <Avatar
        src="https://mui.com/static/images/avatar/.jpg"
        fallback={'E'}
        bgColor='red'
      ></Avatar>
      <Avatar
        src="https://mui.com/static/images/avatar/.jpg"
        fallback={<FileUnknownOutlined />}
        bgColor='orange'
      ></Avatar>
    </div>
  );
}
