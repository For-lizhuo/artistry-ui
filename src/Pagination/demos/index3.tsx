import { Pagination } from 'artistry-ui';
import React from 'react';

export default function PaginationDemo() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination size='25px'/>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}
      >
        <Pagination size='30px' />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination size='35px' />
      </div>
    </>
  );
}
