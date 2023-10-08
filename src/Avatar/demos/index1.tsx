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
      <Avatar src="https://mui.com/static/images/avatar/1.jpg"></Avatar>
      <Avatar src="https://mui.com/static/images/avatar/2.jpg"></Avatar>
      <Avatar src="https://mui.com/static/images/avatar/3.jpg"></Avatar>
    </div>
  );
}
