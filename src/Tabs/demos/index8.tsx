import { TabItem, Tabs } from 'artistry-ui';
import React, { useState } from 'react';

export default function TabsDemo() {
  const defaultSelected = 1;
  const [selected, setSelected] = useState(defaultSelected);
  return (
    <>
      <div style={{ fontSize: '16px', margin: '0 0 10px 10px' }}>
        selected tab:<span style={{ color: 'red' }}>{selected}</span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Tabs
          defaultSelected={defaultSelected}
          onChange={(uid) => setSelected(uid)}
        >
          <TabItem uid={0} label={'tabItem one'}>
            content one
          </TabItem>
          <TabItem uid={1} label={'tabItem two'}>
            content two
          </TabItem>
          <TabItem uid={2} label={'tabItem three'}>
            content three
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}
