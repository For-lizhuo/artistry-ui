import { Checkbox, CheckboxGroup } from 'artistry-ui';
import React from 'react';

export default function CheckboxDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CheckboxGroup defaultChecked={[1, 2]}>
        <Checkbox uid={1} value={'a'} color='orange'>
          Checkbox 1
        </Checkbox>
        <Checkbox uid={2} value={'b'} color='purple'>
          Checkbox 2
        </Checkbox>
        <Checkbox uid={3} value={'c'} color='red'>
          Checkbox 3
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
