import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import(`./index`));
const HomeDetail = loadable(() => import(`@/pages/home/detail`));

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="detail" element={<HomeDetail />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default HomeRouter;