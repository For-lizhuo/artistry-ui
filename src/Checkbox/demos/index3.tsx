import { Checkbox, CheckboxGroup } from 'artistry-ui';
import React from 'react';

export default function CheckboxDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CheckboxGroup defaultChecked={[1, 2]} direction='column'>
        <Checkbox uid={1} value={'a'}>
          Checkbox 1
        </Checkbox>
        <Checkbox uid={2} value={'b'}>
          Checkbox 2
        </Checkbox>
        <Checkbox uid={3} value={'c'}>
          Checkbox 3
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}
