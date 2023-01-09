import React from 'react';
import { ConfigProvider, theme } from 'antd';
import routes from './router';
import { useRoutes } from 'react-router-dom';

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
    {useRoutes(routes)}
  </ConfigProvider>
  );
}

export default App;
