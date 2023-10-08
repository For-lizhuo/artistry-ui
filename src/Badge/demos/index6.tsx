import { MailFilled } from '@ant-design/icons';
import { Badge } from 'artistry-ui';
import React from 'react';

export default function BadgeDemo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      }}
    >
      <Badge count={0}>
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
      <Badge count={0} showZero>
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
    </div>
  );
}
