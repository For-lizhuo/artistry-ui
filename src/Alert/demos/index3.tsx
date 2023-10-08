import { Alert } from 'artistry-ui';
import React from 'react';

export default function AlertDemo() {
  return (
    <div>
      <Alert type="info" closable={false}>
        This alert can not be closed.
      </Alert>
    </div>
  );
}
