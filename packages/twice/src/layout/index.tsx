import React, { useEffect, useState, Suspense } from 'react';
import { Layout, Menu, MenuProps } from "antd";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { routes } from '@/routes';
import { useRoutes } from '@/hooks/useRoutes';
import { generateSubpaths } from '@/help';
import { HomeRouter } from '@/pages/home/router';
import { SettingRouter } from '@/pages/setting/router';
import { Header } from './header';

import './style.less';

const { Sider, Content } = Layout;

export default function AppLayout () {
  const { menuItems } = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const initPaths = pathname.split('/')?.filter((item) => !!item);
  const [openKeys, setOpenKeys] = useState<string[]>(initPaths);
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  const redirectPath = () => {
    if (!pathname || pathname === '/') {
      navigate('/home');
      return;
    }
    navigate(pathname);
  }

  const initMenuKeys = () => {
    const allPath = generateSubpaths(pathname);
    setOpenKeys(allPath);
    setSelectedKeys(allPath ? allPath : undefined);
  }

  useEffect(() => {
    redirectPath();
    initMenuKeys();
  }, [])

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKeys(e.keyPath)
    navigate(e.key);
  }

  const handleOpenKeysChange = (keys: string[]) => {
    setOpenKeys(keys)
  }
  
  return (
    <div className='AppLayout'>
      <Layout
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
          <Header />
          <Layout
          >
            <Sider theme='light'>
              <Menu 
                mode='inline' 
                items={menuItems} 
                onClick={(e) => handleMenuClick(e)}
                onOpenChange={handleOpenKeysChange}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
              />
            </Sider>
            <Suspense >
              <Content className='Page-content'>
                <Routes>
                  <Route path='home/*' element={<HomeRouter />} />
                  <Route path='setting/*' element={<SettingRouter />} />
                  <Route path='*' element={<div>404</div>} />
                </Routes>
              </Content>
            </Suspense>
          </Layout>
      </Layout>
    </div>
  )
}
