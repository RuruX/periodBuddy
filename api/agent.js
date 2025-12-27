// /api/agent.js  (Vercel Serverless Function)
// 目的：把前端 Sunnie 对话框接到同仓库 /agent 目录里的“规则模型”（rules.json）
// 返回格式：{ reply: "..." }
//
// 本接口是极简 demo：按关键词命中规则并回复固定文案。
// 你后续可以把这里替换为真正的 LLM / RAG / Python 服务调用。

import fs from "fs";
import path from "path";

function loadRules() {
  const rulesPath = path.join(process.cwd(), "agent", "rules.json");
  const raw = fs.readFileSync(rulesPath, "utf-8");
  return JSON.parse(raw);
}

function pickBestRule(message, rules) {
  const msg = (message || "").toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const r of rules) {
    let score = 0;
    for (const kw of (r.keywords || [])) {
      if (!kw) continue;
      if (msg.includes(String(kw).toLowerCase())) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = r;
    }
  }
  return { best, bestScore };
}

export default async function handler(req, res) {
  try {
    const cfg = loadRules();
    const rules = cfg.rules || [];
    const defaultReply = cfg.settings?.default_response || "抱歉，我暂时无法回答这个问题。";

    if (req.method === "GET") {
      res.status(200).json({ ok: true, reply: "Sunnie 在线：请用 POST 发送 {message, context}。" });
      return;
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const message = body.message || body.text || body.question || "";
    const context = body.context || null;

    const { best, bestScore } = pickBestRule(message, rules);

    let reply = defaultReply;
    if (best && bestScore > 0) {
      reply = best.response || defaultReply;
    }

    if (context?.阶段 && context?.日期) {
      reply = `（${context.日期} · ${context.阶段}）\n` + reply;
    }

    res.status(200).json({ reply });
  } catch (e) {
    res.status(500).json({ reply: `接口异常：${String(e)}` });
  }
}
