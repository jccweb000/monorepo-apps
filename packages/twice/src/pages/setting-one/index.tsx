import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { settingOneStore, autoDispose } from './store';

const SettingOne = () => {
  const {
    fetchList,
    fetching,
    list,
    addItem,
    total,
    changeText,
    text,
    changeOpen,
  } = settingOneStore;

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (total >= 5) {
      console.log('清理autorun');
      autoDispose();
    }
  }, [total]);

  return (
    <div>
      fetching: {fetching.toString()}
      <br />
      data: {list && JSON.stringify(list)}
      <div onClick={addItem}>add</div>
      <span>total: {total}</span>
      <div onClick={changeText}>changeText: {text}</div>
      <div onClick={changeOpen}>changeOpen</div>
    </div>
  );
};

export default observer(SettingOne);
