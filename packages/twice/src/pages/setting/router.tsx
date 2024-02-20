import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const SettingOne = loadable(() => import(`../setting-one`));
const SettingTwo = loadable(() => import(`../setting-two`));
const Index = loadable(() => import(`./index`));

export function SettingRouter() {
  return (
    <Routes>
      <Route path="" element={<Index />} />
      <Route path="one" element={<SettingOne />} />
      <Route path="two" element={<SettingTwo />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
