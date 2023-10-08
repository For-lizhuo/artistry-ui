import { Divider } from 'artistry-ui';
import React from 'react';

export default function DividerDemo8() {
  return (
    <>
      <div
        style={{
          height: '4rem',
          display: 'flex',
          flexDirection: 'row',
          fontSize: '1.6rem',
          marginBottom: '4rem',
          textAlign: 'center',
          lineHeight: '4rem',
        }}
      >
        <div style={{ flex: 1 }}>first</div>
        <div>
          <Divider vertical />
        </div>
        <div style={{ flex: 1 }}>second</div>
        <div>
          <Divider vertical />
        </div>
        <div style={{ flex: 1 }}>third</div>
        <div>
          <Divider vertical />
        </div>
        <div style={{ flex: 1 }}>fourth</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontSize: '1.6rem',
        }}
      >
        <div style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Sed malesuada lobortis
          pretium.
        </div>
        <div>
          <Divider vertical>VERTICAL</Divider>
        </div>
        <div style={{ flex: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Sed malesuada lobortis
          pretium.
        </div>
      </div>
    </>
  );
}
