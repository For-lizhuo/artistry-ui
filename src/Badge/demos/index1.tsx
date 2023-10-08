import { MailFilled } from '@ant-design/icons';
import { Badge } from 'artistry-ui';
import React from 'react';

export default function BadgeDemo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Badge count={6}>
        <div style={{ fontSize: '24px', color: 'grey' }}>
          <MailFilled />
        </div>
      </Badge>
    </div>
  );
}
