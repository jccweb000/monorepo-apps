/* eslint-disable no-undef */
const prompts = require('prompts');
const fs = require('fs').promises;
const path = require('path');

function firstUpperCase(str) {
  if (!str) return '';
  if (str.length === 1) return str;
  const first = str.slice(0, 1);
  const rest = str.slice(1);
  return first.toUpperCase() + rest;
}

function handleComponentName(fileName) {
  if (fileName.indexOf('-') !== -1) {
    const splitNames = fileName.split('-');
    const uppercaseNames = splitNames.map((item) => {
      return firstUpperCase(item);
    });
    return uppercaseNames.join('');
  }
  return firstUpperCase(fileName);
}

async function createDir(name) {
  try {
    await fs.access(name);
    console.log('该文件名已存在!');
  } catch (_) {
    const filePath = path.join(__dirname, `../src/pages/${name}`);
    await fs.mkdir(filePath);
    console.log(`文件 ${name} 创建成功`);
    const indexPath = filePath + '/index.tsx';

    const upperCaseName = handleComponentName(name);

    const template = `import React from 'react';

export const ${upperCaseName} = () => {
  return <div>${upperCaseName}</div>;
};
`;

    await fs.writeFile(indexPath, template);
    console.log(`文件 index.tsx 创建成功`);
  }
}

(async () => {
  const file = await prompts({
    type: 'text',
    name: 'filename',
    message: '请输入页面名称',
    validate: (filename) => {
      const reg = new RegExp(/^[A-Za-z-]+$/);
      if (!reg.test(filename)) return false;
      return true;
    },
  });
  await createDir(file.filename);

  const router = await prompts({
    type: 'text',
    name: 'routeName',
    message: '路由名称',
  });
})();
