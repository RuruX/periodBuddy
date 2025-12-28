import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 图片资源
const img22 = "https://www.figma.com/api/mcp/asset/1de6576a-3f5f-44a6-a222-8bc627d98870";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/bb76f10e-5b2b-4ad5-9d5d-c59b76e150a0";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/de86652f-906f-4cfe-b062-fa6e58ac8032";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/b7d69eac-5292-443b-991b-d3106739c7a6";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/edbf2c2a-8fd2-4f8e-90f3-b740c2ed0231";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/2e050ae6-9291-4a92-817e-8262e1ccf05c";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/599fd5dd-9fcf-4110-bf2d-62c918ad5e13";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/e000aa88-4f1c-4b64-8bfb-7c188331d383";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/2ce6df6a-09ac-4a8c-ad33-ed33b44f82d2";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/d63ac994-77ce-4fe1-999e-e620ae2fea59";
const img = "https://www.figma.com/api/mcp/asset/c903680b-09b6-4884-8b8b-43fd62bba697";
const img1 = "https://www.figma.com/api/mcp/asset/07c387ee-02cf-4c5e-9add-8c4dd3e3fbbd";
const img2 = "https://www.figma.com/api/mcp/asset/86aa43ad-7305-4b68-be6a-6e57c5924f47";
const img3 = "https://www.figma.com/api/mcp/asset/4b40a746-dd19-4036-aa99-fcbfbc6bfc8a";
const img4 = "https://www.figma.com/api/mcp/asset/824eae13-07ed-4218-b37e-5ef15da03a62";
const img5 = "https://www.figma.com/api/mcp/asset/499a8f5b-d940-4d92-bbca-2d4936b12b39";
const img6 = "https://www.figma.com/api/mcp/asset/75e081fa-6162-4526-a6bd-8153f7d2a283";
const img7 = "https://www.figma.com/api/mcp/asset/842797d6-64cc-4576-9994-f10379aca2ed";
const img8 = "https://www.figma.com/api/mcp/asset/cbd0d051-a07d-425f-9517-855ad60ec2ed";
const img9 = "https://www.figma.com/api/mcp/asset/bb2bac67-989c-4de9-b394-cdcd3aa7593b";
const img10 = "https://www.figma.com/api/mcp/asset/f04ba792-821f-4078-86a2-0c414ed2d483";
const img11 = "https://www.figma.com/api/mcp/asset/059c1d21-6f7c-48f7-9489-b856ed13d343";
const img12 = "https://www.figma.com/api/mcp/asset/4a053a5a-1dc7-4953-9a9f-91b315f54ab2";
const img13 = "https://www.figma.com/api/mcp/asset/6910967f-8e63-4371-b8d8-0f47aa4936ea";
const imgGroup1171275352 = "https://www.figma.com/api/mcp/asset/20886f64-2179-4ca3-9fb0-8932f4a06f9d";
const imgEllipse13 = "https://www.figma.com/api/mcp/asset/2f0e7f72-50af-4f46-9f23-0786dafd016d";

// 聊天消息类型
interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  source?: string;
}

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  // 快捷问题
  const quickQuestions = [
    '我这次的经期超过10天是怎么回事？',
    '运动/工作/休息/亲密怎么安排更合适？'
  ];

  // AI回复内容
  const aiReply = `一般来说，单次月经持续 3–7 天较为常见。
超过 10 天，在医学上通常被视为「经期延长」，值得留意，但不等于一定有严重问题。

比较常见的问题可能有：

→激素波动或暂时失衡
例如最近压力明显增加；作息紊乱、熬夜；体重短期变化；剧烈运动或突然停止运动

 →排卵异常 / 无排卵周期：
如果这一周期没有正常排卵，
 体内雌激素持续作用，内膜脱落不完全，就可能表现为**"一直没干净"**。`;

  const handleQuickQuestion = (question: string) => {
    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question
    };
    
    setMessages([userMessage]);

    // 模拟AI延迟回复
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiReply,
        source: 'NHS'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputText
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // 模拟AI延迟回复
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '感谢你的提问！我会尽力为你解答关于经期的问题。',
        source: 'Sunnie'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 500);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[20px] h-screen w-full max-w-[375px] mx-auto" data-name="chat">
      {/* 背景渐变元素 */}
      <div className="absolute contents left-[-459px] top-[-289px]">
        <div className="absolute h-[517px] left-[116px] top-[335px] w-[518px]">
          <div className="absolute inset-[-28.39%_-28.34%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse6} />
          </div>
        </div>
        <div className="absolute left-[-143px] size-[364px] top-[530px]">
          <div className="absolute inset-[-19.42%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
          </div>
        </div>
        <div className="absolute left-[-154px] size-[561px] top-[-31px]">
          <div className="absolute inset-[-30.55%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse7} />
          </div>
        </div>
        <div className="absolute left-[230px] size-[209px] top-[-51px]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
        </div>
        <div className="absolute left-[302px] size-[126px] top-[442px]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse8} />
        </div>
        <div className="absolute h-[517px] left-[12px] top-[-289px] w-[518px]">
          <div className="absolute inset-[-28.39%_-28.34%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse6} />
          </div>
        </div>
        <div className="absolute flex h-[231.275px] items-center justify-center left-[-459px] top-[290px] w-[586.052px]">
          <div className="flex-none rotate-[82.062deg]">
            <div className="h-[570.248px] relative w-[154px]">
              <div className="absolute inset-[-12.4%_-45.91%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse9} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[486px] left-[-284px] top-[61px] w-[505px]">
          <div className="absolute inset-[-45.72%_-44%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
          </div>
        </div>
        <div className="absolute h-[261.847px] left-[270px] top-[204px] w-[209.342px]">
          <div className="absolute inset-[-27%_-33.77%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
          </div>
        </div>
        <div className="absolute left-[249px] size-[205px] top-[-117px]">
          <div className="absolute inset-[-34.49%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
          </div>
        </div>
        <div className="absolute backdrop-blur-[45.15px] backdrop-filter bg-[rgba(255,255,255,0.6)] h-[812px] left-0 mix-blend-luminosity top-0 w-[375px]" />
      </div>

      {/* 状态栏 */}
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0">
        <div className="absolute h-[30px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]">
          <div className="h-[14px] relative shrink-0 w-[20px]">
            <div className="absolute inset-[28.57%_30%_14.29%_55%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
            <div className="absolute inset-[42.86%_52.5%_14.29%_32.5%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img1} />
              </div>
            </div>
            <div className="absolute bottom-[14.29%] left-[10%] right-3/4 top-[53.57%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img2} />
              </div>
            </div>
            <div className="absolute inset-[14.29%_7.5%_14.29%_77.5%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img3} />
              </div>
            </div>
            <div className="absolute inset-[28.57%_30%_14.29%_55%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img4} />
              </div>
            </div>
            <div className="absolute inset-[42.86%_52.5%_14.29%_32.5%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img5} />
              </div>
            </div>
            <div className="absolute bottom-[14.29%] left-[10%] right-3/4 top-[53.57%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img6} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]">
            <div className="absolute inset-[63.85%_35.56%_14.29%_37.11%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img7} />
              </div>
            </div>
            <div className="absolute inset-[39.07%_20.1%_37.26%_21.66%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img8} />
              </div>
            </div>
            <div className="absolute inset-[14.29%_4.69%_54.84%_6.25%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img9} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]">
            <div className="absolute h-[4px] left-[24px] top-[5px] w-px">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img10} />
              </div>
            </div>
            <div className="absolute h-[12px] left-0 top-px w-[23px]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img11} />
              </div>
            </div>
            <div className="absolute bg-black h-[8px] left-[2px] rounded-[1px] top-1/2 translate-y-[-50%] w-[19px]" />
          </div>
        </div>
        <div className="absolute right-[71px] size-[6px] top-[8px]" />
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]">
          <div className="absolute h-[15px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]">
            <img alt="" className="block max-w-none size-full" src={img12} />
          </div>
        </div>
      </div>

      {/* 返回按钮 */}
      <div className="absolute content-stretch flex items-center left-0 px-[12px] py-[10px] top-[46px] w-[375px]">
        <button onClick={handleBack} className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity">
          <div className="absolute inset-[21.19%_33.69%_21.19%_31.61%]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={img13} />
            </div>
          </div>
        </button>
      </div>

      {/* Sunnie头像 */}
      <div className="absolute contents left-[20px] top-[97px]">
        <div className="absolute contents left-[20px] top-[97px]">
          <div className="absolute left-[21.19px] size-[68.43px] top-[98.79px]">
            <div className="absolute inset-[-42.23%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse13} />
            </div>
          </div>
          <div className="absolute h-[72px] left-[20px] top-[97px] w-[71.405px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[210.84%] left-[-29.21%] max-w-none top-[-62.81%] w-[158.91%]" src={img22} />
            </div>
          </div>
        </div>
      </div>

      {/* 初始欢迎卡片和快捷问题 */}
      {messages.length === 0 && (
        <div className="absolute contents left-[12px] top-[133px]">
          <div className="absolute bg-[rgba(255,255,255,0.7)] h-[212px] left-[12px] rounded-[20px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)] top-[133px] w-[351px]" />
          <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[24px] not-italic text-[14px] text-[#404040] top-[198px] w-[327px] whitespace-pre-wrap">
            你好，我是 Sunnie，你可以向我提问关于经期的困惑/基础知识。
          </p>
          <button
            onClick={() => handleQuickQuestion(quickQuestions[0])}
            className="absolute content-stretch cursor-pointer flex items-center justify-center left-[24px] px-[10px] py-[8px] rounded-[40px] top-[249px] w-[327px] hover:opacity-90 transition-opacity"
            style={{ backgroundImage: "linear-gradient(110.51499488154593deg, rgba(255, 224, 212, 0.5) 5.342%, rgba(255, 200, 184, 0.75) 73.125%, rgba(255, 156, 126, 1) 97.343%)" }}
          >
            <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-[#404040] text-left">
              {quickQuestions[0]}
            </p>
          </button>
          <button
            onClick={() => handleQuickQuestion(quickQuestions[1])}
            className="absolute content-stretch cursor-pointer flex items-center justify-center left-[24px] px-[10px] py-[8px] rounded-[40px] top-[291px] w-[327px] hover:opacity-90 transition-opacity"
            style={{ backgroundImage: "linear-gradient(110.51499488154593deg, rgba(255, 224, 212, 0.5) 5.342%, rgba(255, 200, 184, 0.75) 73.125%, rgba(255, 156, 126, 1) 97.343%)" }}
          >
            <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-[#404040]">
              {quickQuestions[1]}
            </p>
          </button>
        </div>
      )}

      {/* 聊天消息区域 */}
      {messages.length > 0 && (
        <div className="absolute left-[9px] top-[357px] right-[9px] bottom-[150px] overflow-y-auto hide-scrollbar">
          {messages.map((message) => (
            <div key={message.id} className="mb-4">
              {message.type === 'user' ? (
                // 用户消息
                <div className="flex justify-end">
                  <div className="bg-[#ff986f] content-stretch flex max-w-[261px] items-center justify-center px-[12px] py-[17px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
                    <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic text-[14px] text-white">
                      {message.content}
                    </p>
                  </div>
                </div>
              ) : (
                // AI消息
                <div className="flex justify-start mt-4">
                  <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col max-w-[351px] items-start px-[13px] py-[12px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.12)]">
                    <div className="content-stretch flex flex-col font-['jf-openhuninn-2.1:Regular',sans-serif] gap-[14px] items-end leading-[1.3] not-italic whitespace-pre-wrap">
                      <p className="text-[14px] text-[#333] w-full">
                        {message.content}
                      </p>
                      {message.source && (
                        <p className="text-[#0267ff] text-[12px] text-right w-full">
                          来源：{message.source}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 底部输入区域 */}
      <div className="absolute contents left-[-16px] top-[663px]">
        <div className="absolute bg-gradient-to-b blur-[9.75px] filter from-[rgba(255,142,128,0)] h-[173px] left-[-16px] to-[#ff9d7f] top-[663px] via-50% via-[#ff8e80] w-[415px]" />
        <div className="absolute bg-white content-stretch flex items-center justify-between left-[11px] pl-[20px] pr-[10px] py-[6px] rounded-[40px] top-[707px] w-[351px]">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="开启和Sunnie的对话吧~"
            className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic flex-1 outline-none bg-transparent text-[14px] text-[#333] placeholder:text-[#ccc]"
          />
          <button
            onClick={handleSendMessage}
            className="relative shrink-0 size-[44px] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="absolute inset-[-2.27%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1171275352} />
            </div>
          </button>
        </div>
      </div>

      {/* 底部导航条 */}
      <div className="absolute bottom-0 contents left-0 right-0">
        <div className="absolute backdrop-blur-[15px] backdrop-filter bottom-0 h-[49px] left-0 right-0">
          <div className="absolute bg-black bottom-[15px] h-[2px] left-[calc(50%-0.5px)] rounded-[100px] translate-x-[-50%] w-[40px]" />
        </div>
      </div>
    </div>
  );
}

