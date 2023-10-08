import { Radio, RadioGroup } from 'artistry-ui';
import React from 'react';

export default function RadioDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <RadioGroup defaultChecked={1}>
        <Radio uid={1} value={'a'} >
          radio 1
        </Radio>
        <Radio uid={2} value={'b'} size='20px'>
          radio 2
        </Radio>
        <Radio uid={3} value={'c'} size='24px'>
          radio 3
        </Radio>
      </RadioGroup>
    </div>
  );
}
