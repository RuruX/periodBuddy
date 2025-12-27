
/**
 * app.js（全中文 JS-only MVP v3）
 * 新增/修改：
 * - AI agent 命名为 Sunnie + 晴天娃娃头像（聊天气泡也显示小头像）
 * - 增加滑动按钮：选择今天前后 3 天（共 7 天）的回顾/预测
 * - HTML 不再显示“模型参数入口”
 * - 不显示“范围/维度标签含emoji/模型参数可调”等 pill
 * - 雷达图 0–100，隐藏刻度数字与 tooltip 数字
 */

const SUNNIE = {
  名字: "Sunnie",
  头像: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%2796%27%20height%3D%2796%27%20viewBox%3D%270%200%2096%2096%27%3E%0A%3Cdefs%3E%0A%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%270%27%20y2%3D%271%27%3E%0A%20%20%20%20%3Cstop%20offset%3D%270%27%20stop-color%3D%27%23ffffff%27/%3E%0A%20%20%20%20%3Cstop%20offset%3D%271%27%20stop-color%3D%27%23f1f4ff%27/%3E%0A%20%20%3C/linearGradient%3E%0A%3C/defs%3E%0A%3Crect%20width%3D%2796%27%20height%3D%2796%27%20rx%3D%2748%27%20fill%3D%27%23ffffff%27/%3E%0A%3C%21--%20little%20sun%20--%3E%0A%3Ccircle%20cx%3D%2774%27%20cy%3D%2722%27%20r%3D%2710%27%20fill%3D%27%23ffcc33%27%20stroke%3D%27%23f2b400%27%20stroke-width%3D%272%27/%3E%0A%3Cg%20stroke%3D%27%23f2b400%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%3E%0A%20%20%3Cline%20x1%3D%2774%27%20y1%3D%276%27%20x2%3D%2774%27%20y2%3D%272%27/%3E%0A%20%20%3Cline%20x1%3D%2774%27%20y1%3D%2742%27%20x2%3D%2774%27%20y2%3D%2746%27/%3E%0A%20%20%3Cline%20x1%3D%2758%27%20y1%3D%2722%27%20x2%3D%2754%27%20y2%3D%2722%27/%3E%0A%20%20%3Cline%20x1%3D%2790%27%20y1%3D%2722%27%20x2%3D%2794%27%20y2%3D%2722%27/%3E%0A%20%20%3Cline%20x1%3D%2763%27%20y1%3D%2711%27%20x2%3D%2760%27%20y2%3D%278%27/%3E%0A%20%20%3Cline%20x1%3D%2785%27%20y1%3D%2733%27%20x2%3D%2788%27%20y2%3D%2736%27/%3E%0A%20%20%3Cline%20x1%3D%2763%27%20y1%3D%2733%27%20x2%3D%2760%27%20y2%3D%2736%27/%3E%0A%20%20%3Cline%20x1%3D%2785%27%20y1%3D%2711%27%20x2%3D%2788%27%20y2%3D%278%27/%3E%0A%3C/g%3E%0A%3C%21--%20teru%20teru%20bozu%20--%3E%0A%3Cpath%20d%3D%27M48%2018c-14%200-22%2010-22%2022%200%208%203%2015%209%2020l-7%2020h40l-7-20c6-5%209-12%209-20%200-12-8-22-22-22z%27%20fill%3D%27url%28%23g%29%27%20stroke%3D%27%23d9deee%27%20stroke-width%3D%272%27/%3E%0A%3Cpath%20d%3D%27M30%2058h36%27%20stroke%3D%27%23d9deee%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27/%3E%0A%3Ccircle%20cx%3D%2740%27%20cy%3D%2740%27%20r%3D%273%27%20fill%3D%27%23101322%27/%3E%0A%3Ccircle%20cx%3D%2756%27%20cy%3D%2740%27%20r%3D%273%27%20fill%3D%27%23101322%27/%3E%0A%3Cpath%20d%3D%27M42%2048c2%202%2010%202%2012%200%27%20stroke%3D%27%23101322%27%20stroke-width%3D%272%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27/%3E%0A%3Cpath%20d%3D%27M48%2060c0%200-6%207-10%2010%27%20stroke%3D%27%23c9cfe6%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27/%3E%0A%3Cpath%20d%3D%27M48%2060c0%200%206%207%2010%2010%27%20stroke%3D%27%23c9cfe6%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27/%3E%0A%3C/svg%3E"
};

// ===== 翻页导航（主页 -> 建议 -> 对话）=====
const pagesEl = document.getElementById("pages");
let 当前页 = 0; // 0=主页,1=建议,2=对话

function 跳转到页(i){
  当前页 = Math.max(0, Math.min(2, i));
  if (pagesEl) pagesEl.style.transform = `translateX(-${当前页*100}%)`;
}

// 主页五芒星 -> 建议页
const toAdviceBtn = document.getElementById("toAdvice");
if (toAdviceBtn) toAdviceBtn.addEventListener("click", () => 跳转到页(1));

// 建议页右上角头像 -> 对话页
const toChatBtn = document.getElementById("toChat");
if (toChatBtn) toChatBtn.addEventListener("click", () => 跳转到页(2));

// 返回按钮
const backHome1 = document.getElementById("backHome1");
if (backHome1) backHome1.addEventListener("click", () => 跳转到页(0));

const backAdvice = document.getElementById("backAdvice");
if (backAdvice) backAdvice.addEventListener("click", () => 跳转到页(1));

// 头像注入
const avatarBig = document.getElementById("sunnieAvatar");
const avatarSmall = document.getElementById("sunnieAvatarSmall");
if (avatarBig) avatarBig.src = SUNNIE.头像;
if (avatarSmall) avatarSmall.src = SUNNIE.头像;


// 雷达图维度（更大字体 + Emoji）
const 维度 = ["🏃‍♀️ 耐力", "💥 爆发力", "❤️ 亲密欲望", "🫶 舒适度", "🧠 专注"];

// ===== 模型参数（可配置）=====
const MODEL = {
  阶段参数: {
    排卵窗口天数: 2,
    卵泡期结束比例: 0.45,
    排卵日比例: 0.5,
    黄体末期开始比例: 0.8,
  },
  基线: {
    月经期:  { 耐力: 45, 爆发力: 45, 亲密欲望: 40, 舒适度: 30, 专注: 55 },
    卵泡期:  { 耐力: 75, 爆发力: 65, 亲密欲望: 60, 舒适度: 80, 专注: 80 },
    排卵期:  { 耐力: 70, 爆发力: 85, 亲密欲望: 90, 舒适度: 85, 专注: 75 },
    黄体期:  { 耐力: 55, 爆发力: 55, 亲密欲望: 45, 舒适度: 50, 专注: 55 },
  },
  形状: {
    排卵加成: { 爆发力: 8, 亲密欲望: 10, 专注: 4 },
    黄体末期下调: { 舒适度: 10, 专注: 8 },
  },
  建议: {
    阈值: { 低: 40, 高: 70 },
    颜色: { 高: "good", 中: "warn", 低: "bad" },
    文案: {
      运动: {
        高: "适合较高强度：力量/间歇/速度训练。注意热身、补水与拉伸。",
        中: "适合中等强度：快走/瑜伽/轻力量。以“做完更舒服”为目标。",
        低: "优先温和活动：拉伸/散步/泡沫轴。把恢复放第一位。",
      },
      工作: {
        高: "适合推进困难任务、做决策、开会表达。把最重要的事放到今天。",
        中: "适合常规推进：分块完成、保持节奏。用番茄钟更稳。",
        低: "适合低认知负荷任务：整理/复盘/沟通对齐。减少硬刚。",
      },
      休息: {
        高: "保持稳定作息：适度放松即可，别熬夜消耗“高能量”。",
        中: "安排短休：午间 15–25 分钟小憩、减少咖啡因过量。",
        低: "优先睡眠与恢复：早点睡、热敷/泡脚、补水与温和饮食。",
      },
      亲密: {
        高: "亲密与社交意愿更强：主动表达需求与边界，享受连接感。",
        中: "以舒适为先：慢一点、沟通更重要，尊重当下状态。",
        低: "更需要安全感与空间：可以选择拥抱/陪伴/独处，不必勉强。",
      },
    }
  },
  aiAgent: {
    mode: "fetch",           // "mock" | "fetch" | "window"
    endpoint: "/api/agent",
    windowObjectName: "PeriodAgent",
    timeoutMs: 12000,
  }
};

// ===== 工具函数 =====
function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

function daysBetween(a, b) {
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utcB - utcA) / (24 * 3600 * 1000));
}

function toISODate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function addDays(dateObj, delta) {
  const d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  d.setDate(d.getDate() + delta);
  return d;
}

function 格式化中文日期(d) {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}年${m}月${day}日`;
}

function 偏移标签(offset) {
  if (offset === 0) return "今天";
  if (offset > 0) return `预测 +${offset} 天`;
  return `回顾 ${offset} 天`;
}

// ===== 阶段与能量（0–100）=====
function 计算阶段(dayInCycle, 经期天数, 周期天数) {
  const p = MODEL.阶段参数;
  if (dayInCycle <= 经期天数) return "月经期";

  const 排卵日 = Math.round(周期天数 * p.排卵日比例);
  const 窗口 = p.排卵窗口天数;
  if (Math.abs(dayInCycle - 排卵日) <= 窗口) return "排卵期";

  const 卵泡期结束 = Math.round(周期天数 * p.卵泡期结束比例);
  if (dayInCycle <= 卵泡期结束) return "卵泡期";

  return "黄体期";
}

function 计算五维能量(lastStartISO, 经期天数, 周期天数, 基准日期ISO) {
  if (!(经期天数 >= 3 && 经期天数 <= 8)) throw new Error("经期持续天数必须在 3–8 天之间");
  if (!(周期天数 >= 28 && 周期天数 <= 35)) throw new Error("平均周期必须在 28–35 天之间");

  const start = new Date(lastStartISO + "T00:00:00");
  const baseDate = 基准日期ISO
    ? new Date(基准日期ISO + "T00:00:00")
    : (() => {
        const t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
      })();

  if (start >= baseDate) throw new Error("上次月经第一天必须早于所选日期");

  const daysSince = daysBetween(start, baseDate);
  const dayInCycle = (daysSince % 周期天数) + 1;

  const phase = 计算阶段(dayInCycle, 经期天数, 周期天数);
  const base = { ...MODEL.基线[phase] };

  const 排卵日 = Math.round(周期天数 * MODEL.阶段参数.排卵日比例);
  let proximity = 1 - (Math.abs(dayInCycle - 排卵日) / Math.max(1, 周期天数 / 2));
  proximity = clamp(proximity, 0, 1);

  for (const k of Object.keys(MODEL.形状.排卵加成)) {
    base[k] += MODEL.形状.排卵加成[k] * proximity;
  }

  if (phase === "黄体期") {
    const late = dayInCycle > Math.round(周期天数 * MODEL.阶段参数.黄体末期开始比例);
    if (late) {
      for (const k of Object.keys(MODEL.形状.黄体末期下调)) {
        base[k] -= MODEL.形状.黄体末期下调[k];
      }
    }
  }

  for (const k of Object.keys(base)) base[k] = Math.round(clamp(base[k], 0, 100));

  return {
    日期: 基准日期ISO ?? toISODate(baseDate),
    上次月经第一天: lastStartISO,
    经期天数,
    周期天数,
    周期第几天: dayInCycle,
    阶段: phase,
    五维_0_100: base,
  };
}

// ===== 建议卡片 =====
function 分档0_100(score) {
  const th = MODEL.建议.阈值;
  if (score >= th.高) return "高";
  if (score < th.低) return "低";
  return "中";
}
function 颜色类(档位) {
  const m = MODEL.建议.颜色;
  if (档位 === "高") return m.高;
  if (档位 === "中") return m.中;
  return m.低;
}
function 小圆点颜色(类名) {
  if (类名 === "good") return "var(--good)";
  if (类名 === "warn") return "var(--warn)";
  return "var(--bad)";
}
function 生成建议卡片(结果) {
  const e = 结果.五维_0_100;
  const 运动分 = Math.round((e.耐力 + e.爆发力) / 2);
  const 工作分 = e.专注;
  const 休息分 = Math.round((100 - e.舒适度 + 100 - e.耐力) / 2);
  const 亲密分 = Math.round((e.亲密欲望 + e.舒适度) / 2);

  const items = [
    { key: "运动", score: 运动分 },
    { key: "工作", score: 工作分 },
    { key: "休息", score: clamp(休息分, 0, 100) },
    { key: "亲密", score: 亲密分 },
  ];

  return items.map(({
    key, score
  }) => {
    const 档位 = 分档0_100(score);
    const text = MODEL.建议.文案[key][档位];
    const cls = 颜色类(档位);
    return { 标题: key, 档位, cls, text };
  });
}
function 渲染建议(cards) {
  const box = document.getElementById("adviceCards");
  box.innerHTML = "";
  for (const c of cards) {
    const el = document.createElement("div");
    el.className = "adviceCard";
    const dotColor = 小圆点颜色(c.cls);
    el.innerHTML = `
      <div class="tag">
        <span class="dot" style="background:${dotColor}"></span>
        <span>${c.标题}（${c.档位}）</span>
      </div>
      <div class="cardTitle">建议</div>
      <p class="cardText">${c.text}</p>
    `;
    box.appendChild(el);
  }
}

// ===== 雷达图（0–100，隐藏数字）=====

function 更新雷达标签字号(chart){
  if (!chart) return;
  const w = window.innerWidth || 1000;
  const size = w < 420 ? 13 : (w < 720 ? 14 : 16);
  chart.options.scales.r.pointLabels.font.size = size;
  chart.update();
}

function 创建雷达图(ctx) {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels: 维度,
      datasets: [{
        label: "所选日期能量（0–100）",
        data: [0,0,0,0,0],
        borderWidth: 2,
        fill: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { display: false },
          grid: { color: "rgba(16,19,34,0.08)" },
          angleLines: { color: "rgba(16,19,34,0.10)" },
          pointLabels: {
            font: { size: 16, weight: "700" },
            color: "#101322",
          }
        }
      },
      plugins: {
        legend: { labels: { color: "#101322" } },
        tooltip: { enabled: false }
      }
    }
  });
}

// ===== AI 对话接口 =====
function appendMsg(role, text) {
  const log = document.getElementById("chatLog");
  const el = document.createElement("div");
  el.className = `msg ${role === "user" ? "user" : "bot"}`;

  const top = document.createElement("div");
  top.className = "msgTop";

  if (role !== "user") {
    const img = document.createElement("img");
    img.className = "msgAvatar";
    img.alt = "Sunnie 头像";
    img.src = SUNNIE.头像;
    top.appendChild(img);
  }

  const roleEl = document.createElement("div");
  roleEl.className = "msgRole";
  roleEl.textContent = role === "user" ? "你" : SUNNIE.名字;
  top.appendChild(roleEl);

  const content = document.createElement("div");
  content.className = "content";
  content.textContent = text;

  el.appendChild(top);
  el.appendChild(content);

  log.appendChild(el);
  log.scrollTop = log.scrollHeight;
}

function mockReply(message, context) {
  const phase = context?.阶段 ?? "未知阶段";
  const d = context?.日期 ? context.日期 : "所选日期";
  const e = context?.五维_0_100 ?? {};
  const focus = e.专注 ?? null;
  const comfort = e.舒适度 ?? null;

  let extra = "";
  if (focus !== null && comfort !== null) {
    if (focus >= 70) extra += "这天专注度偏高，适合推进关键任务。";
    if (comfort < 40) extra += "舒适度偏低，建议把恢复放优先级更高。";
  }

  return `（Mock）我看到你在 ${d} 处于「${phase}」。${extra}你可以继续问：运动/工作/休息/亲密如何安排？`;
}

async function callAIAgent(message, context) {
  const cfg = MODEL.aiAgent;

  if (cfg.mode === "window") {
    const obj = window[cfg.windowObjectName];
    if (obj && typeof obj.send === "function") {
      const r = await obj.send({ message, context });
      return (r && r.reply) ? r.reply : String(r ?? "");
    }
    return "未找到 window 对接对象：请检查 MODEL.aiAgent.windowObjectName，并注入对应对象。";
  }

  if (cfg.mode === "fetch") {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), cfg.timeoutMs);
    try {
      const res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, context }),
        signal: controller.signal,
      });
      if (!res.ok) return `接口错误：HTTP ${res.status}`;
      const data = await res.json();
      return data.reply ?? data.message ?? data.text ?? data.answer ?? "接口返回缺少 reply/message/text/answer 字段";
    } catch (e) {
      return `接口调用失败：${String(e)}`;
    } finally {
      clearTimeout(t);
    }
  }

  return mockReply(message, context);
}

// ===== 页面交互 =====
const lastStart = document.getElementById("lastStart");
const periodLen = document.getElementById("periodLen");
const cycleLen  = document.getElementById("cycleLen");
const btn = document.getElementById("btn");

const dayOffset = document.getElementById("dayOffset");
const rangeLabel = document.getElementById("rangeLabel");

const radar = 创建雷达图(document.getElementById("radar"));
更新雷达标签字号(radar);
window.addEventListener("resize", () => 更新雷达标签字号(radar));

let 最新结果 = null;

function 设置默认日期() {
  const d = new Date();
  d.setDate(d.getDate() - 12);
  lastStart.value = toISODate(d);
}

function 当前所选日期ISO() {
  const today = new Date();
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const offset = Number(dayOffset.value || 0);
  const chosen = addDays(t0, offset);
  return toISODate(chosen);
}

function 更新范围标签() {
  const offset = Number(dayOffset.value || 0);
  const today = new Date();
  const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const chosen = addDays(t0, offset);

  rangeLabel.textContent = `${偏移标签(offset)} · ${格式化中文日期(chosen)}`;
  document.getElementById("chosenDate").textContent = 格式化中文日期(chosen);
}

function 更新() {
  try {
    更新范围标签();
    const chosenISO = 当前所选日期ISO();

    const out = 计算五维能量(lastStart.value, Number(periodLen.value), Number(cycleLen.value), chosenISO);
    最新结果 = out;

    document.getElementById("dayInCycle").textContent = String(out["周期第几天"]);
    document.getElementById("phase").textContent = out["阶段"];

    const e = out.五维_0_100;
    radar.data.datasets[0].data = [e.耐力, e.爆发力, e.亲密欲望, e.舒适度, e.专注];
    radar.update();

    渲染建议(生成建议卡片(out));
  } catch (e) {
    appendMsg("bot", `输入有误：${String(e)}`);
  }
}

btn.addEventListener("click", 更新);
dayOffset.addEventListener("input", 更新);

// Chat UI
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

async function sendChat() {
  const text = (chatInput.value || "").trim();
  if (!text) return;

  appendMsg("user", text);
  chatInput.value = "";

  const context = 最新结果 ?? (() => {
    try {
      更新范围标签();
      const chosenISO = 当前所选日期ISO();
      return 计算五维能量(lastStart.value, Number(periodLen.value), Number(cycleLen.value), chosenISO);
    } catch {
      return null;
    }
  })();

  // 先放一个占位
  appendMsg("bot", "（正在思考…）");

  const log = document.getElementById("chatLog");
  const placeholder = log.lastElementChild;

  const reply = await callAIAgent(text, context);

  if (placeholder) {
    placeholder.querySelector(".content").textContent = reply;
    placeholder.querySelector(".msgRole").textContent = SUNNIE.名字;
  } else {
    appendMsg("bot", reply);
  }
}

chatSend.addEventListener("click", sendChat);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    sendChat();
  }
});

// 初次加载
设置默认日期();
更新范围标签();
更新();
appendMsg("bot", `你好，我是 ${SUNNIE.名字} ☀️ 你可以用上方滑块查看今天前后 3 天的能量回顾/预测，也可以问我：那一天运动/工作/休息/亲密怎么安排更合适？`);


// ===== PWA：注册 Service Worker + 安装按钮 =====
(function 启动PWA(){
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  const installCard = document.getElementById("installCard");
  const installBtn = document.getElementById("installBtn");

  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    // Chrome/Edge/Android 支持
    e.preventDefault();
    deferredPrompt = e;
    if (installCard) installCard.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      try { await deferredPrompt.userChoice; } catch {}
      deferredPrompt = null;
      if (installCard) installCard.hidden = true;
    });
  }

  // iOS Safari 没有 beforeinstallprompt：给一个温和提示
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (isIOS && !isStandalone && installCard) {
    installCard.hidden = false;
    const sub = installCard.querySelector(".installSub");
    if (sub) sub.textContent = "iPhone/iPad：在 Safari 点“分享”→“添加到主屏幕”，即可像 App 一样使用。";
    const btn = installCard.querySelector("#installBtn");
    if (btn) { btn.textContent = "知道了"; btn.onclick = () => installCard.hidden = true; }
  }
})();


// 初始显示主页
跳转到页(0);
