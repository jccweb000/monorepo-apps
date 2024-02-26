import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { settingOneStore } from './store';

const SettingOne = () => {
  const { fetchList, fetching, list } = settingOneStore;

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      fetching: {fetching.toString()}
      <br />
      data: {list && JSON.stringify(list)}
    </div>
  );
};

export default observer(SettingOne);
