import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert type="info" title="info" style={{ marginBottom: '2rem' }}>
        Here is an info text with title.
      </Alert>
      <Alert type="success" title="success">
        Here is a success text with title.
      </Alert>
    </div>
  );
}
