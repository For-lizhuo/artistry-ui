import { CloseCircleOutlined } from '@ant-design/icons';
import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert type="info" style={{ marginBottom: '2rem' }} closeElement={'close'}>
        The close button is a string.
      </Alert>
      <Alert
        type="success"
        style={{ marginBottom: '2rem' }}
        closeElement={<button type="button">close</button>}
      >
        The close button is a React Element.
      </Alert>
      <Alert
        type="warning"
        closeElement={<CloseCircleOutlined />}
      >
        The close button is a icon.
      </Alert>
    </div>
  );
}
