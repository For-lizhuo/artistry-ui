import { Divider } from 'artistry-ui';
import React from 'react';
export default function DividerDemo() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider color="#66ccff" fontColor="#66ccff">
          #66ccff
        </Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider color="red" fontColor="red">
          red
        </Divider>
      </div>
      <div>
        <Divider color="black" fontColor="black">
          black
        </Divider>
      </div>
    </div>
  );
}
