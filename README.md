# SMILE LEGO 业务组件库

SMILE LEGO 是一个基于 Vue3 + TypeScript 开发的业务组件库，提供了一系列可复用的 UI 组件，帮助开发者快速构建现代化的 Web 应用。

## 特性
* ✅ **TypeScript 支持**：完整的类型定义，提供良好的开发体验
* ✅ **Vue3 组合式 API**：采用最新的 Vue3 特性，支持组合式 API
* ✅ **单元测试**：完善的测试用例，确保组件质量
* ✅ **提交发布前验证**：自动化的代码检查和测试流程
* ✅ **Travis CI 自动发布**：持续集成，自动发布新版本
* ✅ **轻量化**：按需引入，减少打包体积

## 安装

使用 npm 安装：

```bash
npm install @smilekite/lego-bricks
```

使用 yarn 安装：

```bash
yarn add @smilekite/lego-bricks
```

## 快速开始

### 全局引入

```javascript
import { createApp } from 'vue'
import LegoBricks from '@smilekite/lego-bricks'
import '@smilekite/lego-bricks/dist/bundle.css'
import App from './App.vue'

const app = createApp(App)
app.use(LegoBricks)
app.mount('#app')
```

### 按需引入

```javascript
import { createApp } from 'vue'
import { LText, LImage, LShape } from '@smilekite/lego-bricks'
import '@smilekite/lego-bricks/dist/bundle.css'
import App from './App.vue'

const app = createApp(App)
app.component('LText', LText)
app.component('LImage', LImage)
app.component('LShape', LShape)
app.mount('#app')
```

## 组件列表

### LText
文本组件，用于展示和编辑文本内容。

### LImage
图片组件，用于展示和处理图片。

### LShape
形状组件，用于绘制各种几何形状。

### FinalPage
最终页面组件，用于展示最终的页面效果。

## 开发指南

### 克隆仓库

```bash
git clone https://github.com/Kitesource/lego-bricks.git
cd lego-bricks
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run serve
```

### 构建组件库

```bash
npm run build
```

### 运行单元测试

```bash
# 运行所有测试
npm run test

# 监听模式运行测试
npm run test:watch
```

### 代码检查

```bash
npm run lint
```

### 发布
```
npm run publish --access public
```

## 项目结构

```
lego-bricks/
├── build/              # 构建配置文件
├── dist/               # 构建输出目录
├── src/                # 源代码目录
│   ├── components/     # 组件目录
│   ├── hooks/          # 自定义 hooks
│   ├── App.vue         # 应用入口组件
│   ├── index.ts        # 组件库入口
│   └── main.ts         # 开发环境入口
├── tests/              # 测试目录
├── package.json        # 项目配置
└── README.md           # 项目说明
```

## 贡献指南

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request