import { Select } from 'artistry-ui';
import React, { useState } from 'react';

export default function SelectDemo() {
  const options = [
    {
      label: 'abc',
      value: '1',
    },
    {
      label: 'bcd',
      value: '2',
    },
    {
      label: 'cde',
      value: '3',
    },
    {
      label: 'def',
      value: '4',
    },
    {
      label: 'abcd',
      value: '5',
    },
    {
      label: 'bcde',
      value: '6',
    },
    {
      label: 'cdef',
      value: '7',
    },
    {
      label: 'abcde',
      value: '8',
    },
    {
      label: 'bcdef',
      value: '9',
    },
    {
      label: 'abcdef',
      value: '10',
    },
  ];
  const defaultOption = options[0];
  const [label, setLabel] = useState(defaultOption.label);
  const [value, setValue] = useState(defaultOption.value);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Select
        options={options}
        defaultOption={defaultOption}
        handleSelectCallback={(label, value) => {
          setLabel(label);
          setValue(value);
        }}
      />
      <div
        style={{ marginTop: '40px', fontSize: '20px' }}
      >{`You are choosing option "label: ${label}, value: ${value}". `}</div>
    </div>
  );
}
