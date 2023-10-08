import { Upload } from 'artistry-ui';
import React from 'react';

export default function UploadDemo() {
  return (
    <Upload draggable>
      <div
        style={{
          width: '300px',
          height: '120px',
          fontSize: '16px',
          textAlign: 'center',
          backgroundColor: '#F5F5F5',
          lineHeight: '120px',
          borderRadius: '10px',
        }}
      >
        Drag and drop files to this area.
      </div>
    </Upload>
  );
}
