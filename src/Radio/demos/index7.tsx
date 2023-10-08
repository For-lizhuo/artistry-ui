import { Radio, RadioGroup } from 'artistry-ui';
import React, { useState } from 'react';

export default function RadioDemo() {
  const defaultChecked = 1;
  const [checked, setChecked] = useState<number | undefined>(defaultChecked);
  const radio = [
    { uid: 0, value: 'a' },
    { uid: 1, value: 'b' },
    { uid: 2, value: 'c' },
  ];
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <RadioGroup
        defaultChecked={defaultChecked}
        onChange={(uid) => setChecked(uid)}
      >
        {radio.map(({ uid, value }) => (
          <Radio key={uid} uid={uid} value={value}>
            radio {uid}
          </Radio>
        ))}
      </RadioGroup>
      <div style={{ fontSize: '16px', marginTop: '20px' }}>
        The <span style={{ color: 'red' }}>radio {checked}</span> is checked now.
      </div>
    </div>
  );
}
