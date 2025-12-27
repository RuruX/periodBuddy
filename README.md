# 经期能量雷达（JS-only MVP · 全中文 · v3）

## 本版新增
- ✅ AI agent 改名 **Sunnie**，并配了「晴天娃娃」头像（聊天里也显示）
- ✅ 增加滑动按钮：选择今天前后 3 天（共 7 天）的能量回顾/预测
- ✅ 不再在 HTML 显示“模型参数入口”
- ✅ 不显示“范围/维度标签含emoji/模型参数可调”等提示块

## 运行
```bash
cd period_radar_mvp_cn_v3
python -m http.server 8000
```
打开：
http://localhost:8000

## 接入真实 AI agent
在 `app.js` 里改：
- `MODEL.aiAgent.mode = "fetch"` 并设置 `endpoint`（例如 `/api/agent`），请求体 `{message, context}`，返回 `{reply}`
- 或 `MODEL.aiAgent.mode = "window"`，在页面注入 `window.PeriodAgent.send({message, context})`

> 备注：JS-only MVP 本身不会自带大模型推理，只预留了“把对话交给外部 agent”的接口。
