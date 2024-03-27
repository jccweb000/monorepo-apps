# 多应用仓库

**node版本要求 >= 18.12.0** 建议使用volta进行node版本的控制
**仓库使用yarn进行包的依赖管理，安装请使用yarn！**

- 项目结构

```
monorepo
├─ .eslintrc.js
├─ .gitignore
├─ .husky
│  ├─ commit-msg
│  └─ pre-commit
├─ .prettierignore
├─ .prettierrc.js
├─ .vscode
│  └─ settings.json
├─ README.md
├─ commitlint.config.js
├─ package-lock.json
├─ package.json
├─ packages
│  ├─ common
│  ├─ first
│  └─ twice
├─ tsconfig.json
└─ yarn.lock
```

- 所有应用在packages目录下，该仓库包含三个应用的代码 —— common、first、twice

```
该项目使用yarn进行包的依赖管理，当某个应用单独需要某个包，建议安装在当前的项目中
否则使用 yarn add @yourNeed -W 去安装在仓库的最外层。
```

- 该仓库集成了eslint、prettier

```
仓库中的代码在onSave的时候会自动触发prettier的规则，以及eslint的相关校验；
更多rules配置请参考eslint官网
建议安装vsCode相关插件 Prettier-Code 、 Eslint，以便有更好的开发体验
```

- 该仓库集成了husky、commitlint

```
分支名必须已下列枚举值开头，否则将校验不通过
chore|docs|feat|fix|perf|refactor|revert|style|test|hotfix|release

commit主体必须以下列枚举值开头，否则校验不通过
[
  'feat', // 新功能
  'fix', // bug fix
  'docs', // 文档更新
  'style', // 格式（不影响代码运行的变动）
  'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
  'test', // 增加测试
  'chore', // 构建过程或辅助工具的变动
]
```

在触发husky的pre-commit勾子的时候将执行lint-staged,仅对暂存区的代码进行lint
当waring大于3时，eslint也会抛出非0值，将校验失败，不允许提交

```
"lint-staged": {
  "packages/twice/src/**/*.{js,ts,jsx,tsx}": [
    "npx eslint --fix --max-warnings=3"
  ]
}
```

# TODO

- 开发环境代理域名区分
