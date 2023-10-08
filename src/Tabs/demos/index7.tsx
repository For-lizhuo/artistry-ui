import { NotificationOutlined, ShoppingCartOutlined, TeamOutlined } from '@ant-design/icons';
import { TabItem, Tabs } from 'artistry-ui';
import React from 'react';

export default function TabsDemo() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Tabs>
        <TabItem uid={0} label={<NotificationOutlined />}>
          content one
        </TabItem>
        <TabItem uid={1} label={<ShoppingCartOutlined />}>
          content two
        </TabItem>
        <TabItem uid={2} label={<TeamOutlined />}>
          content three
        </TabItem>
      </Tabs>
    </div>
  );
}
