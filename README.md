# PeriodBuddy（PWA）

线上地址：`https://period-buddy-sand.vercel.app`

## Mission
用更亲密、但尽量科学的方式，把月经周期的变化翻译成“今天怎么安排更舒服”的小建议——不制造焦虑，只给你一点点可执行的支持。

## 四个阶段（激素水平简介）
- **月经期**：雌激素、孕激素都低；内膜脱落，身体更需要休息与补给。
- **卵泡期**：雌激素逐步上升；很多人会感觉更清爽、更有动力。
- **排卵期**：雌激素峰值并触发 LH 峰；有时会更外向、更想社交/亲密。
- **黄体期**：孕激素升高后再回落；经前可能更疲惫、情绪更敏感。

## 连接同仓库的 agent（/agent）
本项目已新增 Vercel 接口：`/api/agent`（见 `api/agent.js`）  
它会读取同仓库 `agent/rules.json`，按关键词命中规则并返回 `{reply}`。

> 本地想测试 `/api`：用 `vercel dev`（`python -m http.server` 不会跑 serverless 接口）。
