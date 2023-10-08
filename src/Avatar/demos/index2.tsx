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
        size="40px"
      ></Avatar>
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="60px"
      ></Avatar>
      <Avatar
        src="https://mui.com/static/images/avatar/2.jpg"
        size="80px"
      ></Avatar>
    </div>
  );
}
