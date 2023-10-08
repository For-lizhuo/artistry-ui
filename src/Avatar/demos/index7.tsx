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
        src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
        objectFit='fill'
      ></Avatar>
      <Avatar
        src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
        objectFit='contain'
      ></Avatar>
      <Avatar
        src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
        objectFit='cover'
      ></Avatar>
      <Avatar
        src="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria-146x200.jpg"
        objectFit='none'
      ></Avatar>
    </div>
  );
}
