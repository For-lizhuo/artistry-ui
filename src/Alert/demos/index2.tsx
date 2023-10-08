import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert type="info" style={{ marginBottom: '2rem' }}>
        Here is an info text.
      </Alert>
      <Alert type="success" style={{ marginBottom: '2rem' }}>
        Here is an success text.
      </Alert>
      <Alert type="warning" style={{ marginBottom: '2rem' }}>
        Here is an warning text.
      </Alert>
      <Alert type="error">
        Here is an error text.
      </Alert>
    </div>
  );
}
