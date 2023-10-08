import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '10px' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} href="https://www.github.com">
        Github
      </Button>
      <Button
        theme="error"
        style={buttonStyle}
        icon={<GithubOutlined />}
        href="https://www.github.com"
        width="20px"
        height="20px"
        circle
      ></Button>
    </div>
  );
}
