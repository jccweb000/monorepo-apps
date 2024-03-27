import React from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import AppLayout from './layout';
import { i18nStore } from './i18n';

export const App = observer(() => {
  return (
    <ConfigProvider locale={i18nStore.currentLang === 'zh-CN' ? zhCN : enUS}>
      <Router>
        <AppLayout />
      </Router>
    </ConfigProvider>
  );
});
