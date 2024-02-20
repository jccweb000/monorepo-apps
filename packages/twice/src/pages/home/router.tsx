import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import { MissingPage } from 'common/component/missing-page';

const Home = loadable(() => import(`@/pages/home`));
const HomeDetail = loadable(() => import(`@/pages/home/detail`));

export const HomeRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="detail" element={<HomeDetail />} />
      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
};

export default HomeRouter;
