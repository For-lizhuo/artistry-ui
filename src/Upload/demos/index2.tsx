import { Button, Upload } from 'artistry-ui';
import React from 'react';

export default function UploadDemo() {
  return (
    <Upload multiple>
      <Button width="fit-content">Select files</Button>
    </Upload>
  );
}
