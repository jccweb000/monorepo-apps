import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Select, Modal } from 'antd';
import { useTranslation, Translation, Trans } from 'react-i18next';
import { observer } from 'mobx-react-lite';

import { i18nStore } from '@/i18n';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  console.log('lang', i18nStore.currentLang);

  return (
    <div>
      <Select
        options={[
          { label: '中文', value: 'zh-CN' },
          { label: '英文', value: 'en-US' },
        ]}
        value={i18nStore.currentLang}
        onChange={(e) => {
          i18nStore.changeLang(e);
        }}
      />
      {t('jake')}
      {t('has Var', { page: 100 })}
      <Button
        onClick={() => {
          navigate('/home/detail');
        }}
      >
        detail
      </Button>
      <Translation>{(t) => t('jake')}</Translation>
      <Trans i18nKey="has Var" values={{ page: 999 }} />
      <Button
        onClick={() => {
          Modal.confirm({
            title: 'xxx',
          });
        }}
      >
        modal
      </Button>
    </div>
  );
};

export default observer(HomePage);
