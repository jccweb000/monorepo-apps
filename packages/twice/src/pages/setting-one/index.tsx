import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { settingOneStore, autoDispose } from './store';
import {
  Box,
  Button,
  AddTextBtn,
  ColorWithOpen,
  Item,
  CustomBtn,
  AnimationBox,
} from './style';

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
    open,
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
    <Box>
      fetching: {fetching.toString()}
      <br />
      {list?.map((item) => {
        return <Item key={item.id}>{item.name}</Item>;
      })}
      <Button onClick={addItem}>增加一个元素</Button>
      <span>total: {total}</span>
      <AddTextBtn onClick={changeText}>changeText</AddTextBtn>
      <div>{text}</div>
      <AddTextBtn onClick={changeOpen}>changeOpen</AddTextBtn>
      <ColorWithOpen open={open}>{open.toString()}</ColorWithOpen>
      <CustomBtn color="green">自定义按钮</CustomBtn>
      <AnimationBox>陈冠希</AnimationBox>
    </Box>
  );
};

export default observer(SettingOne);
