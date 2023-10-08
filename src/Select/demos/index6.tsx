import { Select } from 'artistry-ui';
import React from 'react';

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
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Select options={options} searchable />
    </div>
  );
}
