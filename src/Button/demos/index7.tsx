import {
  DeleteOutlined,
  SettingOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Button } from 'artistry-ui';
import React from 'react';

export default function ButtonDemo() {
  const buttonStyle = { margin: '10px' };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Button style={buttonStyle} icon={<StarOutlined />} />
      <Button
        theme="error"
        style={buttonStyle}
        icon={<SettingOutlined />}
        variant="outlined"
        width={'80px'}
      >
        setting
      </Button>
      <Button
        theme="warning"
        style={buttonStyle}
        icon={<DeleteOutlined />}
        width={'20px'} height={'20px'}
        circle
      />
    </div>
  );
}
