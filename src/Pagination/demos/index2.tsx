import { Pagination } from 'artistry-ui';
import React from 'react';

export default function PaginationDemo() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination color="grey" />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}
      >
        <Pagination color="purple" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination color="pink" />
      </div>
    </>
  );
}
