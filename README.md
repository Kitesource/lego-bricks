# SMILE LEGO Bricks — Vue 3 画布组件库

乐高（Lego）低代码平台的画布组件库，基于 Vue 3 + TypeScript 开发，提供可视化编辑器所需的基础渲染组件（文本、图片、形状）及页面组装能力。作为独立 npm 包发布，同时支撑 [lego-frontend](https://github.com/Kitesource/lego-frontend) 编辑器项目。

## 特性

- **Vue 3 Composition API**：采用 `setup` 与组合式 API 编写
- **TypeScript 全类型支持**：完整的 Props 类型定义与类型导出
- **双模式构建**：同时输出 ESM（`lego-bricks.esm.js`）与 UMD（`lego-bricks.umd.js`）格式
- **单元测试覆盖**：基于 Vue Test Utils + Jest 的组件测试
- **按需引入**：支持全局注册或单独引入组件
- **自动化发布**：`prepublishOnly` 钩子自动执行 lint → test → build

## 安装

```bash
npm install @smilekite/lego-bricks
# 或
yarn add @smilekite/lego-bricks
# 或
pnpm add @smilekite/lego-bricks
```

## 快速开始

### 全局引入

```typescript
import { createApp } from 'vue'
import LegoBricks from '@smilekite/lego-bricks'
import '@smilekite/lego-bricks/dist/bundle.css'
import App from './App.vue'

const app = createApp(App)
app.use(LegoBricks)
app.mount('#app')
```

### 按需引入

```typescript
import { createApp } from 'vue'
import { LText, LImage, LShape, FinalPage } from '@smilekite/lego-bricks'
import '@smilekite/lego-bricks/dist/bundle.css'
import App from './App.vue'

const app = createApp(App)
app.component('LText', LText)
app.component('LImage', LImage)
app.component('LShape', LShape)
app.component('FinalPage', FinalPage)
app.mount('#app')
```

## 组件文档

### LText — 文本组件

用于渲染可配置样式的文本元素，支持 `div`、`h2`、`p`、`button` 等标签切换。

**Props**

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `tag` | `string` | `'div'` | 渲染标签名 |
| `text` | `string` | `'正文内容'` | 文本内容 |
| `fontSize` | `string` | `'14px'` | 字体大小 |
| `fontFamily` | `string` | `''` | 字体族 |
| `fontWeight` | `string` | `'normal'` | 字重 |
| `fontStyle` | `string` | `'normal'` | 字体样式 |
| `textDecoration` | `string` | `'none'` | 文本装饰 |
| `lineHeight` | `string` | `'1'` | 行高 |
| `textAlign` | `string` | `'left'` | 文本对齐 |
| `color` | `string` | `'#000000'` | 文字颜色 |
| `backgroundColor` | `string` | `''` | 背景颜色 |
| `width` | `string` | `'373px'` | 宽度 |
| `height` | `string` | `''` | 高度 |
| `paddingLeft` / `paddingRight` / `paddingTop` / `paddingBottom` | `string` | `'0px'` | 内边距 |
| `borderStyle` | `string` | `'none'` | 边框样式 |
| `borderColor` | `string` | `'#000'` | 边框颜色 |
| `borderWidth` | `string` | `'0'` | 边框宽度 |
| `borderRadius` | `string` | `'0'` | 圆角 |
| `boxShadow` | `string` | `'0 0 0 #000000'` | 阴影 |
| `opacity` | `string` | `'1'` | 不透明度 |
| `position` | `string` | `'absolute'` | 定位方式 |
| `left` / `top` / `right` | `string` | `'0'` | 定位偏移 |
| `actionType` | `string` | `''` | 交互动作类型 |
| `url` | `string` | `''` | 跳转链接 |
| `isEditing` | `boolean` | `false` | 是否处于编辑模式 |

**示例**

```vue
<template>
  <l-text
    tag="h2"
    text="Hello World"
    fontSize="24px"
    color="#1890ff"
    :isEditing="false"
  />
</template>
```

---

### LImage — 图片组件

用于渲染可配置样式的图片元素。

**Props**

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `src` | `string` | `''` | 图片地址 |
| `width` / `height` / `padding*` / `border*` / `boxShadow` / `opacity` / `position` / `left` / `top` / `right` / `actionType` / `url` / `isEditing` | — | — | 同 LText 的通用样式属性 |

**示例**

```vue
<template>
  <l-image
    src="https://example.com/image.png"
    width="200px"
    height="150px"
  />
</template>
```

---

### LShape — 形状组件

用于渲染可配置样式的几何形状（矩形、圆形等通过 CSS 控制）。

**Props**

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `backgroundColor` | `string` | `''` | 背景颜色 |
| `width` / `height` / `padding*` / `border*` / `borderRadius` / `boxShadow` / `opacity` / `position` / `left` / `top` / `right` / `actionType` / `url` / `isEditing` | — | — | 同 LText 的通用样式属性 |

**示例**

```vue
<template>
  <l-shape
    width="100px"
    height="100px"
    backgroundColor="#52c41a"
    borderRadius="50%"
  />
</template>
```

---

### FinalPage — 页面渲染组件

用于将组件数据数组渲染为完整页面，是编辑器「预览」和「发布」功能的核心渲染器。

**Props**

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `page` | `PageData` | 否 | 页面级别属性（背景、标题等） |
| `components` | `ComponentData[]` | 是 | 组件列表，每个项包含 `id`、`name`、`props` |

**类型定义**

```typescript
interface ComponentData {
  id: string
  name: string           // 组件名：'l-text' | 'l-image' | 'l-shape'
  props: { [key: string]: any }
  layerName?: string
  isHidden?: boolean
  isLocked?: boolean
}

interface PageData {
  props: { [key: string]: any }
  setting: { [key: string]: any }
  title?: string
  desc?: string
  coverImg?: string
}
```

**示例**

```vue
<template>
  <final-page
    :page="{ props: { backgroundColor: '#f5f5f5' } }"
    :components="[
      { id: '1', name: 'l-text', props: { text: '标题', fontSize: '20px' } },
      { id: '2', name: 'l-image', props: { src: 'https://example.com/pic.jpg', width: '300px' } }
    ]"
  />
</template>
```

## 工具函数与类型导出

组件库同时导出类型定义与工具函数，方便上层项目使用：

```typescript
import {
  // 类型
  TextComponentProps,
  ImageComponentProps,
  ShapeComponentProps,
  AllComponentProps,
  ComponentData,
  PageData,
  // 默认值
  textDefaultProps,
  imageDefaultProps,
  shapeDefaultProps,
  commonDefaultProps,
  // 工具
  textStylePropNames,
  imageStylePropsNames,
  shapeStylePropsNames,
  transformToComponentProps,
} from '@smilekite/lego-bricks'
```

| 导出项 | 说明 |
|--------|------|
| `TextComponentProps` / `ImageComponentProps` / `ShapeComponentProps` | 各组件 Props 的 TypeScript 接口 |
| `AllComponentProps` | 所有 Props 的联合类型 |
| `textDefaultProps` / `imageDefaultProps` / `shapeDefaultProps` | 各组件的默认属性值对象 |
| `textStylePropNames` / `imageStylePropNames` / `shapeStylePropNames` | 纯样式属性名数组（用于过滤出 style 对象） |
| `transformToComponentProps` | 将默认值对象转换为 Vue `props` 定义的工具函数 |

## 开发指南

### 环境要求
- Node.js >= 16.0.0
- Vue 3.x（peer dependency）

### 克隆与安装

```bash
git clone https://github.com/Kitesource/lego-bricks.git
cd lego-bricks
npm install
```

### 开发调试

```bash
# 启动本地开发服务器（src/main.ts）
npm run serve
```

### 构建

```bash
# 完整构建：先 clean，再并行构建 ESM + UMD + 类型声明
npm run build

# 单独构建 ESM
npm run build:esm

# 单独构建 UMD
npm run build:umd
```

构建产物位于 `dist/` 目录：

| 文件 | 说明 |
|------|------|
| `lego-bricks.esm.js` | ESM 格式，支持 Tree Shaking |
| `lego-bricks.umd.js` | UMD 格式，可直接通过 `<script>` 引入 |
| `bundle.css` | 组件样式 |
| `index.d.ts` | 类型声明入口 |
| `components/` / `hooks/` / `defaultProps.d.ts` / `main.d.ts` | 细粒度类型定义 |

### 测试

```bash
# 运行单元测试
npm run test

# 监听模式
npm run test:watch
```

### 代码检查

```bash
npm run lint
```

### 发布

```bash
npm run publish
```

> `prepublishOnly` 钩子会自动执行 `lint → test → build`，确保发布质量。

## 项目结构

```
lego-bricks/
├── build/                    # Rollup 构建配置
│   ├── rollup.config.js
│   ├── rollup.esm.config.js
│   └── rollup.umd.config.js
├── dist/                     # 构建产物（ESM + UMD + CSS + 类型声明）
├── src/
│   ├── components/           # 组件源码
│   │   ├── LText/
│   │   │   ├── LText.vue
│   │   │   └── index.ts
│   │   ├── LImage/
│   │   ├── LShape/
│   │   └── FinalPage/
│   ├── hooks/
│   │   └── useComponentCommon.ts   # 组件通用逻辑（样式过滤、点击跳转）
│   ├── defaultProps.ts       # Props 类型定义、默认值、工具函数
│   ├── index.ts              # 组件库入口（导出组件 + install 方法）
│   ├── main.ts               # 开发环境入口
│   └── App.vue               # 开发调试页面
├── tests/unit/               # 单元测试
│   ├── LText.spec.ts
│   ├── LImage.spec.ts
│   └── LShape.spec.ts
├── package.json
└── README.md
```

## 核心设计

### useComponentCommon Hook

所有渲染组件（LText、LImage、LShape）共享 `useComponentCommon` 组合式函数，负责：
1. **样式过滤**：从 Props 中过滤出纯 CSS 属性生成 `styleProps`
2. **点击跳转**：当 `actionType === 'url'` 且存在 `url` 时，点击组件跳转到对应链接

### transformToComponentProps

将平铺的默认值对象（如 `textDefaultProps`）转换为 Vue 3 的 `props` 定义格式，减少重复代码：

```typescript
// 输入
{ text: '正文内容', fontSize: '14px' }

// 输出
{
  text: { type: String, default: '正文内容' },
  fontSize: { type: String, default: '14px' }
}
```

## 相关项目

- [lego-frontend](https://github.com/Kitesource/lego-frontend) — Vue 3 可视化页面编辑器
- [lego-backend](https://github.com/Kitesource/lego-backend) — Egg.js + TypeScript 后端 API 服务

## 许可证

[MIT](LICENSE)