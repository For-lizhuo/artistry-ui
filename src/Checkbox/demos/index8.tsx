import { Checkbox, CheckboxGroup } from 'artistry-ui';
import React, { useState } from 'react';

export default function CheckboxDemo() {
  const defaultChecked = [1, 2];
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CheckboxGroup
        defaultChecked={defaultChecked}
        style={{ marginBottom: '40px' }}
        onChange={(arr) => setChecked(arr)}
      >
        <Checkbox variant="checkAll" controll={[1, 2, 3]}>
          controll all checkboxs{' '}
        </Checkbox>
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
      <div style={{ fontSize: '16px' }}>
        {checked.length > 0 ? (
          <>
            Checked checkbox list:{' '}
            <span style={{ color: 'red' }}>{checked.join(', ')}</span>.
          </>
        ) : (
          <>no checked.</>
        )}
      </div>
    </div>
  );
}
