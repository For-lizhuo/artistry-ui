import { Link } from 'artistry-ui';
import React from 'react';

export default function LinkDemo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <Link href="#">Default</Link>
      <Link href="#" color='red'>Red</Link>
      <Link href="#" color='#000000'>#000000</Link>
    </div>
  );
}
