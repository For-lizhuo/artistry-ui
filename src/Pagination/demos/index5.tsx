import { Pagination } from 'artistry-ui';
import React from 'react';

export default function PaginationDemo() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination shape="rounded" />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Pagination shape="rounded" variant="outlined" />
      </div>
    </>
  );
}
