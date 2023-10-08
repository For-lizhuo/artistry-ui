import { MailFilled } from '@ant-design/icons';
import { Badge } from 'artistry-ui';
import React from 'react';

export default function BadgeDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <Badge count={6} color="red">
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
      <Badge count={6} color="purple">
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
      <Badge count={6} color="orange">
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
    </div>
  );
}
