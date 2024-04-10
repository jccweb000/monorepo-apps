/* eslint-disable no-undef */
const prompts = require('prompts');
const fs = require('fs').promises;
const path = require('path');
const ejs = require('ejs');

const { handleComponentName } = require('./helper/index');

const templatePath = path.join(__dirname, './template');
const srcPath = path.join(__dirname, '../../src');
const pagesPath = path.join(__dirname, '../../src/pages');

async function createDir(name) {
  try {
    await fs.access(name);
    console.log('该文件名已存在!');
  } catch (_) {
    const pagePath = pagesPath + `/${name}`;
    await fs.mkdir(pagePath);
    const indexPath = pagePath + '/index.tsx';

    const upperCaseName = handleComponentName(name);

    const templateData = {
      componentName: upperCaseName,
    };

    const templateContent = await fs.readFile(
      templatePath + '/index.tsx.ejs',
      'utf-8',
    );

    const renderContent = ejs.render(templateContent, templateData);

    await fs.writeFile(indexPath, renderContent);

    console.log(`文件 index.tsx 创建成功`);
  }
}

async function createApiFile(name) {
  try {
    await fs.access(name);
    console.log('api 文件名称已存在');
  } catch (_) {
    const apiDirPath = srcPath + '/api';
    const filePath = apiDirPath + `/${name}.ts`;
    const renderContent = await fs.readFile(
      templatePath + '/api.ts.ejs',
      'utf-8',
    );
    await fs.writeFile(filePath, renderContent);

    const appendContent = `export * as ${name} from './${name}';\n`;

    await fs.appendFile(apiDirPath + '/index.ts', appendContent);
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

  const apiAsk = await prompts([
    {
      type: 'select',
      name: 'flag',
      message: '是否需要创建api相关文件',
      choices: [
        {
          title: '是',
          value: true,
        },
        {
          title: '否',
          value: false,
        },
      ],
    },
    {
      type: 'text',
      name: 'name',
      message: '请输入api的文件夹名称',
      validate: (name) => {
        const reg = new RegExp(/^[A-Za-z]+$/);
        if (!reg.test(name)) return false;
        return true;
      },
    },
  ]);

  if (apiAsk.flag && apiAsk.name) {
    console.log('开始创建api文件...');
    await createApiFile(apiAsk.name);
    console.log('api 文件创建成功');
  }
})();
