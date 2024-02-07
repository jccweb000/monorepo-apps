import React from 'react';
import { Layout, Dropdown, MenuProps } from 'antd';

import userAvatar from '@/assets/images/user-avatar.jpg';

import './style.less';

const { Header: AntHeader } = Layout;

const dropItems: MenuProps['items'] = [
  {
    key: 'info',
    label: '详细信息'
  },
  {
    key: 'logout',
    danger: true,
    label: '退出登陆'
  }
]

export const Header = () => {

  return (
    <AntHeader className='app-header'>
      {/* logo and company name */}
      <div className='app-header-company-info'>
        <span className='app-header-company-info-name'>Hi~ 吴彦祖</span>
      </div>
      <div className='app-header-extra'>
        <Dropdown menu={{ items: dropItems }} >
          <img src={userAvatar} className='user-avatar' />
        </Dropdown>
      </div>
    </AntHeader>
  )
}