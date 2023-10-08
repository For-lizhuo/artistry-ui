import { Pagination } from 'artistry-ui';
import React, { useState } from 'react';

export default function PaginationDemo() {
  const defaultPage = 5;
  const [page, setPage] = useState(defaultPage);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={10}
          defaultPage={defaultPage}
          onChange={(value) => setPage(value)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '16px',
          marginTop: '20px',
        }}
      >
        page:<span style={{ color: 'red' }}>{page}</span>
      </div>
    </>
  );
}
