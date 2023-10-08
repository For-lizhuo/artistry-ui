import { Content, Footer, Header, Layout, Sider } from 'artistry-ui';
import React from 'react';

const LayoutStyle: React.CSSProperties = {
  width: '100%',
  height:'300px',
  color: 'white',
  fontSize: '16px',
  textAlign: 'center',
};

const HeaderStyle: React.CSSProperties = {
  height: '50px',
  backgroundColor: '#7DBCEA',
  lineHeight: '50px',
};
const SiderStyle: React.CSSProperties = {
  backgroundColor: '#3BA0E9',
  width: '30%',
  lineHeight: '300px',
  height: '100%',
};
const ContentStyle: React.CSSProperties = {
  backgroundColor: '#108EE9',
  lineHeight: '200px',
  height: '200px',
};
const FooterStyle: React.CSSProperties = {
  height: '50px',
  backgroundColor: '#7DBCEA',
  lineHeight: '50px',
};

export default function LayoutDemo() {
  return (
    <Layout style={LayoutStyle}>
      <Sider style={SiderStyle}>Sider</Sider>
      <Layout style={LayoutStyle}>
        <Header style={HeaderStyle}>Header</Header>
        <Content style={ContentStyle}>Content</Content>
        <Footer style={FooterStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
