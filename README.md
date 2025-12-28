# 月经周期追踪器 - 前端

这是一个基于 React + TypeScript + Tailwind CSS 的月经周期追踪应用的前端项目。

## 功能特性

- ✨ 引导流程：选择上次月经开始日期
- 📅 日历选择器：直观的日期选择界面
- 🔄 周期长度选择：自定义月经周期长度（20-37天）
- ⭐ 今日五芒星：展示每日身体状态和能力分析
- 💪 工作/运动表现：个性化的表现建议
- 🎨 精美的UI设计：基于Figma设计稿实现

## 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **React Router** - 路由管理

## 项目结构

```
frontend/
├── src/
│   ├── components/
│   │   └── DateButton.tsx          # 日历日期按钮组件
│   ├── pages/
│   │   ├── OnboardingDatePicker.tsx    # 选择月经开始日期页面
│   │   ├── OnboardingCycleLength.tsx   # 选择周期长度页面
│   │   └── DailyStarCard.tsx           # 今日五芒星能力图页面
│   ├── App.tsx                     # 应用入口
│   ├── main.tsx                    # React 入口
│   └── index.css                   # 全局样式
├── index.html                      # 主入口文件
├── index2.html                     # 五芒星页面入口
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 安装依赖

```bash
npm install
```

## 开发运行

```bash
npm run dev
```

应用将在 `http://localhost:5173` 运行

## 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录

## 预览生产版本

```bash
npm run preview
```

## 页面路由

- `/` - 重定向到引导流程第一步
- `/onboarding/date` - 选择月经开始日期
- `/onboarding/cycle` - 选择月经周期长度
- `/daily-star` - 今日五芒星能力图页面

## 组件说明

### DateButton

日历日期按钮组件，支持三种状态：
- `default` - 默认状态
- `selected` - 选中状态（红色背景）
- `highlighted` - 高亮状态（浅色背景）

### OnboardingDatePicker

选择月经开始日期的页面，包含：
- 完整的日历视图
- 月份切换功能
- 日期选择功能

### OnboardingCycleLength

选择月经周期长度的页面，包含：
- 滚动选择器
- 支持20-37天的周期选择
- 视觉反馈效果

### DailyStarCard

今日五芒星能力图页面，包含：
- 五芒星能力雷达图（耐力、爆发力、专注度、舒适度、亲密欲望）
- 可交互的五芒星形状（点击切换大小）
- 日期切换功能（前一天/后一天）
- 工作表现卡片：展示当日工作状态建议
- 运动表现卡片：展示当日运动强度建议
- AI助手Sunnie聊天入口

## 设计资源

本项目基于以下Figma设计稿实现：
- 日期按钮组件：`node-id=43-787`
- 日期选择页面：`node-id=13-88`
- 周期长度选择页面：`node-id=1-3`
- 今日五芒星页面（小星）：`node-id=1-4`
- 今日五芒星页面（大星）：`node-id=63-263`

## 注意事项

1. 项目使用了来自Figma的临时图片资源，这些资源会在7天后过期
2. 建议在生产环境中替换为本地静态资源
3. 字体使用了 `jf-openhuninn-2.1`，需要确保字体文件可用

## License

MIT

