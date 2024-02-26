import { makeAutoObservable } from 'mobx';

import {
  SellStatus,
  ListItemWithStatus,
  fetchListWithStatus,
} from '@/api/setting-api';

class SettingOneStore {
  fetching: boolean = false;

  list?: ListItemWithStatus[] = undefined;

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
}

export const settingOneStore = new SettingOneStore();
