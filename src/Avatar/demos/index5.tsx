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
      <Avatar bgColor="#66ccff">A</Avatar>
      <Avatar bgColor="pink" shape='rounded'>B</Avatar>
      <Avatar bgColor="grey" shape='square'>C</Avatar>
    </div>
  );
}
