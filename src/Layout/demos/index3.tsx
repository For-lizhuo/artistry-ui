import { Content, Footer, Header, Layout } from 'artistry-ui';
import React from 'react';

const LayoutStyle: React.CSSProperties = {
  width: '100%',
  color: 'white',
  fontSize: '16px',
  textAlign: 'center',
};

const HeaderStyle: React.CSSProperties = {
  height: '50px',
  backgroundColor: '#7DBCEA',
  lineHeight: '50px',
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
      <Header style={HeaderStyle}>Header</Header>
      <Content style={ContentStyle}>Content</Content>
      <Footer style={FooterStyle}>Footer</Footer>
    </Layout>
  );
}
