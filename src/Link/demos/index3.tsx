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
      <Link href="#" underline='hover'>Hover</Link>
      <Link href="#" underline='none'>None</Link>
    </div>
  );
}
