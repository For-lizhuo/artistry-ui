import { QuestionCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert
        type="info"
        icon={<QuestionCircleOutlined />}
        style={{ marginBottom: '2rem' }}
      >
        Here is an alert with custom icon.
      </Alert>
      <Alert type="warning" icon={<WarningOutlined />} title="Custom Icon">
        Here is an alert with custom icon.
      </Alert>
    </div>
  );
}
