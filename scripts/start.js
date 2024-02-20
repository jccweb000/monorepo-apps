const prompts = require('prompts');
const child_process = require('child_process');

(async () => {
  const response = await prompts({
    type: 'select',
    name: 'service',
    message: '请选择需要启动的服务',
    choices: [
      {
        title: 'first',
        value: 'npm run start:first',
      },
      {
        title: 'twice',
        value: 'npm run start:twice',
      },
    ],
  });

  if (response.service) {
    child_process.execSync(response.service, {
      stdio: 'inherit',
    });
  }
})();
