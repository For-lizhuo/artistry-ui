import { Radio, RadioGroup } from 'artistry-ui';
import React from 'react';

export default function RadioDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <RadioGroup defaultChecked={1}>
        <Radio uid={1} value={'a'} color='orange'>
          radio 1
        </Radio>
        <Radio uid={2} value={'b'} color='red'>
          radio 2
        </Radio>
        <Radio uid={3} value={'c'} color='purple'>
          radio 3
        </Radio>
      </RadioGroup>
    </div>
  );
}
