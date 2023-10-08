import { Button, Upload } from 'artistry-ui';
import React from 'react';

export default function UploadDemo() {
  return (
    <Upload directory>
      <Button width="fit-content">Select directory</Button>
    </Upload>
  );
}
