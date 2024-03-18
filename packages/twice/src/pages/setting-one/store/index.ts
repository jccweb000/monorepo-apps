import { makeAutoObservable, autorun, when, reaction } from 'mobx';

import {
  SellStatus,
  ListItemWithStatus,
  fetchListWithStatus,
} from '@/api/setting-api';

class SettingOneStore {
  fetching: boolean = false;

  list?: ListItemWithStatus[] = undefined;

  total: number = 0;

  text?: string = '';

  open: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchList = async () => {
    try {
      this.fetching = true;
      const res = await fetchListWithStatus(SellStatus.available);
      if (res) {
        this.list = res.data;
      }
      this.fetching = false;
    } catch (err) {
      this.fetching = false;
    }
  };

  addItem = () => {
    const item = {
      id: Math.random(),
      name: 'xxx',
      status: SellStatus.available,
      tags: [{ name: 'x', id: Math.random() }],
    };
    this.list = [...(this.list || []), item];
  };

  changeText = () => {
    this.text = Math.random().toString();
  };

  changeOpen = () => {
    this.open = !this.open;
  };
}

export const settingOneStore = new SettingOneStore();

/**依赖的状态发生变化时执行autorun中的函数, 开始时就会执行一次，与计算属性不同的是，刚开始就会执行，没有产生新的状态 */
export const autoDispose = autorun(() => {
  console.log('autorun');
  settingOneStore.total = settingOneStore.list?.length || 0;
});

/**when只会执行一次 */
when(
  () => settingOneStore.open,
  () => {
    console.log('when open is true');
  },
);

/**首次不会执行，当第一个参数依赖项变了，才会触发，相当于更细粒度的控制依赖状态，并可以提供了清理函数 */
reaction(
  () => settingOneStore.list?.map((item) => item.name),
  (names, _, reaction) => {
    console.log(names?.join(','));
    if (names && names.length >= 2) {
      reaction.dispose();
    }
  },
);
