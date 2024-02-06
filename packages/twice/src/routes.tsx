import React from 'react';
import { ProductOutlined } from '@ant-design/icons';
import loadable from '@loadable/component';

import { RouteItem } from '@/types';

export const routes: RouteItem[] = [
  {
    path: '/home/detail',
    component: loadable(() => import(`@/pages/home/detail`)),
    inMenu: false,
    key: 'home-detail',
  },
  {
    path: '/home',
    component: loadable(() => import(`@/pages/home`)),
    inMenu: true,
    icon: <ProductOutlined />,
    name: '首页',
    key: 'home',
  },
  {
    path: '/setting',
    component: loadable(() => import(`@/pages/setting`)),
    inMenu: true,
    icon: <ProductOutlined />,
    name: '设置',
    key: 'setting',
    children: [
      {
        path: '/setting/one',
        component: loadable(() => import(`@/pages/setting-one`)),
        inMenu: true,
        icon: <ProductOutlined />,
        name: '子页面1',
        key: 'setting-one',
      },
      {
        path: '/setting/two',
        component: loadable(() => import(`@/pages/setting-two`)),
        inMenu: true,
        icon: <ProductOutlined />,
        name: '子页面2',
        key: 'setting-two',
      }
    ]
  }
];
