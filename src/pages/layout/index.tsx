import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { Layout, theme } from 'antd';
import Aside from './components/aside';
import Header from './components/header';

const {  Content, Footer, Sider } = Layout;




export default function (){
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          paddingTop:64
        }}
        theme='light'
      >
        <Aside/>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header/>
        <Content style={{ margin: '80px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24,minHeight:'calc(100vh - 68px - 80px - 16px)', background: colorBgContainer }}>
            <Suspense fallback="loading">
              <div className="main">{useRoutes(routes)}</div>
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>交作业 ©2023 Created by pithy</Footer>
      </Layout>
    </Layout>
  );
}
