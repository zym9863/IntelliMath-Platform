# 智学高数 (IntelliMath Platform)

[中文](README.md) | [English](README_EN.md)

![智学高数](https://img.shields.io/badge/智学高数-结构化高等数学学习平台-1976d2)
![React](https://img.shields.io/badge/React-19.x-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6)
![MUI](https://img.shields.io/badge/MUI-7.x-007fff)

智学高数是一个结构化的高等数学学习平台，旨在帮助学生更好地理解和掌握高等数学概念。通过清晰的知识组织和直观的界面设计，让复杂的数学变得简单易懂。

## 项目特点

- **结构化知识体系**：按照章节、知识点、定理、公式等层次清晰组织内容，帮助用户系统掌握高等数学
- **数学公式清晰呈现**：使用LaTeX渲染数学公式，确保公式显示准确、美观，提升学习体验
- **丰富的例题与解析**：每个知识点配有相关例题和详细解析，帮助用户加深理解和应用
- **现代化UI设计**：采用Material Design设计语言，提供美观、直观的用户界面
- **响应式布局**：适配各种设备屏幕尺寸，提供一致的用户体验

## 技术栈

- **前端框架**：React 19 + TypeScript
- **构建工具**：Vite
- **UI组件库**：Material-UI (MUI) 7
- **路由管理**：React Router 7
- **数学公式渲染**：KaTeX + react-latex-next

## 项目结构

```
src/
├── components/         # 组件
│   ├── calculus/       # 数学相关组件
│   │   ├── ChapterList.tsx
│   │   ├── ConceptCard.tsx
│   │   ├── TheoremCard.tsx
│   │   ├── FormulaCard.tsx
│   │   └── ExampleCard.tsx
│   └── layout/         # 布局组件
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── data/               # 数据
│   └── calculusData.ts # 高等数学课程数据
├── pages/              # 页面
│   ├── HomePage.tsx
│   ├── ChaptersPage.tsx
│   ├── ChapterDetailPage.tsx
│   └── NotFoundPage.tsx
├── types/              # 类型定义
│   └── calculus.ts
├── App.tsx             # 应用入口
├── App.css             # 全局样式
└── main.tsx            # 渲染入口
```

## 功能模块

1. **首页**：展示平台介绍和课程概览
2. **章节列表**：展示所有章节及其简介
3. **章节详情**：展示特定章节的所有知识点
4. **知识点卡片**：展示知识点的详细内容，包括定理、公式和例题

## 安装与运行

### 前提条件

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 设计亮点

- **渐变色标题**：使用CSS渐变为标题添加视觉吸引力
- **卡片悬浮效果**：卡片在悬浮时有轻微上浮和阴影增强效果
- **章节导航**：在章节详情页使用固定侧边栏，方便在知识点间快速导航
- **数学公式样式**：优化了KaTeX渲染的数学公式样式，提高可读性
- **响应式设计**：针对不同屏幕尺寸优化布局和字体大小

## 未来计划

- [ ] 添加用户认证系统
- [ ] 实现学习进度跟踪
- [ ] 添加练习题和自测功能
- [ ] 支持暗色模式
- [ ] 添加搜索功能

## 贡献指南

欢迎贡献代码、报告问题或提出新功能建议。请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件
