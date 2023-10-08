import React from 'react';
import { Pagination } from 'artistry-ui';

export default function PaginationDemo() {
  return (
    <div style={{display: 'flex',justifyContent:'center'}}>
      <Pagination count={10} defaultPage={5}/>
    </div>
  );
}
