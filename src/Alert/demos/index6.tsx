import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert type="info" showIcon={false} style={{ marginBottom: '2rem' }}>
        Here is an alert without icon.
      </Alert>
      <Alert type="success" showIcon={false} title="success">
        Here is an alert without icon.
      </Alert>
    </div>
  );
}
