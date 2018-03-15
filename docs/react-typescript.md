# typescript

## [react & typescript](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tutorials/React.html)

### 项目安装

``` bash
npm install -g create-react-app

create-react-app [projectName] --scripts-version=react-scripts-ts
cd [projectName]
npm start
```

> 如果遇到以下错误，执行 `yarn add @types/react-dom@16.0.4 `。参考[issues](https://github.com/wmonk/create-react-app-typescript/issues/274)
  ``` bash
    .../nervjs-typescript/node_modules/@types/react-dom/node_modules/@types/react/index.d.ts
(3631,13): Subsequent property declarations must have the same type.  Property 'a' must be of type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>', but here has type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
  ```

state管理 Redux：

``` bash
  yarn add redux react-redux @types/react-redux -S
```

项目结构：

``` bash
  react-ts/
  ├─ .gitignore
  ├─ node_modules/
  ├─ public/
  ├─ src/
  │  ├─ actions/      # actions
  │  ├─ api/          # api
  │  ├─ components/   # 组件
  │  ├─ constants/    # 定义ActionTypes
  │  ├─ containers/   # 容器
  │  ├─ reducers/     # reducers
  │  ├─ types/        # StoreState
  │  └─ index.tsx     # 入口文件
  ├─ package.json
  ├─ tsconfig.json
  └─ tslint.json
```