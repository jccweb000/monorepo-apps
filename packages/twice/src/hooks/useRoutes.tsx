import React from 'react';
import { MenuProps } from "antd";
import { ProductOutlined } from '@ant-design/icons';

import { RouteItem } from "@/types";

type AntMenuItem = MenuProps['items'];

// 把routes转化为antd的menu需要的数据结构
const formatMenu = (routes: RouteItem[]): AntMenuItem => {
  return routes.filter(route => route.inMenu).map((route) => {
    const item = {
      icon: <ProductOutlined />,
      label: route.name,
      key: route.path,
      children: route.children ? formatMenu(route.children) : undefined,
    };
    return item;
  });
};

export function useRoutes(routes?: RouteItem[]) {
  if (!routes) return {};

  const menu = formatMenu(routes);

  return {menuItems: menu};
}