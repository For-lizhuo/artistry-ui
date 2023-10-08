import { Pagination } from 'artistry-ui';
import React from 'react';

export default function PaginationDemo() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination defaultPage={6} siblingCount={0}/>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Pagination defaultPage={6} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Pagination defaultPage={6} siblingCount={0} boundaryCount={2}/>
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <Pagination defaultPage={6} boundaryCount={2}/>
      </div>
    </>
  );
}
