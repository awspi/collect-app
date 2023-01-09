import React from 'react';
import { ConfigProvider, theme } from 'antd';
import Layout from './pages/layout';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#2f54eb',
      },
      algorithm:theme.defaultAlgorithm
    }}
  >
    <Layout/>
  </ConfigProvider>
  );
}

export default App;
