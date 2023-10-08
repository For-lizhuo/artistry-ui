import { TabItem, Tabs } from 'artistry-ui';
import React from 'react';

export default function TabsDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Tabs vertical>
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
  );
}
