import React from 'react';
import { ConfigProvider, ConfigProviderProps } from 'antd';
// import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './layout';


type Locale = ConfigProviderProps['locale'];

export const App = () => {
  const [locale] = React.useState<Locale>(zhCN);
  
  return (
    <ConfigProvider locale={locale}>
      <Router>
        <AppLayout />
      </Router>
    </ConfigProvider>
  )
}