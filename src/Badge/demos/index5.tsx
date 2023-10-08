import { MailFilled } from '@ant-design/icons';
import { Badge, Button, Switch } from 'artistry-ui';
import React, { useState } from 'react';

export default function BadgeDemo() {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(true);
  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Badge count={count}>
          <div style={{ fontSize: '24px', color: 'grey' }}>
            <MailFilled />
          </div>
        </Badge>
        <div style={{ marginLeft: '20px' }}>
          <Button width="16px" height="8px" onClick={decrement}>
            -
          </Button>
          <Button
            width="16px"
            height="8px"
            style={{ marginLeft: '10px' }}
            onClick={increment}
          >
            +
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <Badge variant='dot' invisible={!visible}>
          <div style={{ fontSize: '24px', color: 'grey' }}>
            <MailFilled />
          </div>
        </Badge>
        <div
          style={{
            marginLeft: '20px',
            fontSize: '16px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Switch handleUpdateChecked={(state) => setVisible(state)} defaultChecked/>
          <div style={{ marginLeft: '10px' }}>show badge</div>
        </div>
      </div>
    </>
  );
}
