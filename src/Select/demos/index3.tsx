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
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Select options={options} />
      <Select options={options} color='grey'/>
      <Select options={options} color='#ff0000'/>
    </div>
  );
}
