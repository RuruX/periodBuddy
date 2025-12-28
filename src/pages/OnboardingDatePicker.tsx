import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateButton from '../components/DateButton';

// 图片资源 URL
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/af90dfbe-1868-456c-a18f-a877efd99852";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/3e8ee56d-b8c3-4380-aa46-913758f2654f";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/a6790491-05bc-4855-b194-a9d19110d848";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/8c342023-e16d-481e-a498-7c1a6f3152df";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/926d9738-58d0-42ce-b980-1a063a0fa06b";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/22594493-c46d-4f08-8185-fe69517b64dc";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/a9584a2b-1b20-4b0a-a700-eb9b2994bf16";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/93a08525-faf1-4e3d-8683-f89dd7fe3bc3";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/6f9939d5-89ac-486f-ae52-aaf8d6a1409d";
const img = "https://www.figma.com/api/mcp/asset/2bf28ff8-203d-4f55-a205-3ba6e7b04381";
const img1 = "https://www.figma.com/api/mcp/asset/ac834ad9-4153-4e29-87b2-6319bd5c3fa0";
const img2 = "https://www.figma.com/api/mcp/asset/56c00bc7-45d9-4bf2-82c6-251f56c82620";
const img3 = "https://www.figma.com/api/mcp/asset/6e35075d-4fe5-479b-b610-a03327a53700";
const img4 = "https://www.figma.com/api/mcp/asset/0a71fff5-6420-419c-a287-bbacd513feb6";
const img5 = "https://www.figma.com/api/mcp/asset/093ec02f-6e26-4285-91b0-199e7f5423d0";
const img6 = "https://www.figma.com/api/mcp/asset/2fc03c56-dfea-4e7a-b1e1-f1ce01b0b07e";
const img7 = "https://www.figma.com/api/mcp/asset/f92e5801-34a0-4f5c-be3d-288fb37c4b11";
const img8 = "https://www.figma.com/api/mcp/asset/d8bb2844-0025-46b6-890d-9ce867792ade";
const img9 = "https://www.figma.com/api/mcp/asset/03673d1b-cd35-46c2-a4b9-602ee2ecd365";
const img10 = "https://www.figma.com/api/mcp/asset/7c428ba8-2dd3-4e8a-a044-72408717ed3c";
const img11 = "https://www.figma.com/api/mcp/asset/c864fbd7-e461-4672-af21-6d87ebdb1c80";
const img12 = "https://www.figma.com/api/mcp/asset/88fec4ad-d900-4a32-a4c3-d4636cd5dec8";
const img13 = "https://www.figma.com/api/mcp/asset/bf350143-b1da-4e37-8b02-db697b773176";
const img14 = "https://www.figma.com/api/mcp/asset/8f98f5a6-0918-45ef-9a8f-5af630c46b61";

export default function OnboardingDatePicker() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<number | null>(1);
  const [currentMonth] = useState({ year: 2025, month: 12 });
  
  const handleNext = () => {
    navigate('/onboarding/cycle');
  };

  const handleBack = () => {
    navigate(-1);
  };

  // 生成日历日期（2025年12月）
  const generateCalendarDates = () => {
    const dates = [];
    const daysInMonth = 31;
    const firstDayOfWeek = 1; // 2025年12月1日是周一
    
    // 添加空白日期
    for (let i = 0; i < firstDayOfWeek; i++) {
      dates.push(null);
    }
    
    // 添加实际日期
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    
    return dates;
  };

  const calendarDates = generateCalendarDates();

  return (
    <div className="bg-white overflow-clip relative rounded-[20px] h-screen w-full max-w-[375px] mx-auto" data-name="onboarding flow">
      {/* 背景装饰元素 */}
      <div className="absolute contents left-[-191px] top-[-108px]">
        <div className="absolute h-[517px] left-[55px] top-[530px] w-[518px]">
          <div className="absolute inset-[-28.39%_-28.34%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse6} />
          </div>
        </div>
        <div className="absolute h-[261.847px] left-[128.66px] top-[442px] w-[209.342px]">
          <div className="absolute inset-[-27%_-33.77%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse5} />
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
          <div className="absolute inset-[-40.57%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse4} />
          </div>
        </div>
        <div className="absolute left-[302px] size-[126px] top-[442px]">
          <div className="absolute inset-[-67.3%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse8} />
          </div>
        </div>
        <div className="absolute flex h-[231.275px] items-center justify-center left-[-158px] top-[30px] w-[586.052px]">
          <div className="flex-none rotate-[82.062deg]">
            <div className="h-[570.248px] relative w-[154px]">
              <div className="absolute inset-[-12.4%_-45.91%]">
                <img alt="" className="block max-w-none size-full" src={imgEllipse9} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[396px] left-[-191px] top-[-108px] w-[412px]">
          <div className="absolute inset-[-56.11%_-53.93%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse2} />
          </div>
        </div>
        <div className="absolute left-[109px] size-[121px] top-[-31px]">
          <div className="absolute inset-[-58.43%]">
            <img alt="" className="block max-w-none size-full" src={imgEllipse3} />
          </div>
        </div>
        <div className="absolute backdrop-blur-[45.15px] backdrop-filter bg-[rgba(255,255,255,0.4)] h-[812px] left-0 mix-blend-luminosity top-0 w-[375px]" />
      </div>

      {/* 状态栏 */}
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0" data-name="Property 1=Status Bar">
        <div className="absolute h-[30px] left-0 right-0 top-0" data-name="Visible=NO" />
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]" data-name="Auto Layout Horizontal">
          <div className="h-[14px] relative shrink-0 w-[20px]" data-name="Network Signal / Light">
            <div className="absolute inset-[28.57%_30%_14.29%_55%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
            <div className="absolute inset-[42.86%_52.5%_14.29%_32.5%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img1} />
              </div>
            </div>
            <div className="absolute bottom-[14.29%] left-[10%] right-3/4 top-[53.57%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img2} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]" data-name="WiFi Signal / Light">
            <div className="absolute inset-[63.85%_35.56%_14.29%_37.11%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img7} />
              </div>
            </div>
            <div className="absolute inset-[39.07%_20.1%_37.26%_21.66%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img8} />
              </div>
            </div>
            <div className="absolute inset-[14.29%_4.69%_54.84%_6.25%]" data-name="Path">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img9} />
              </div>
            </div>
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]" data-name="Battery / Light">
            <div className="absolute h-[4px] left-[24px] top-[5px] w-px">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img10} />
              </div>
            </div>
            <div className="absolute h-[12px] left-0 top-px w-[23px]" data-name="Rectangle 21 (Stroke)">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img11} />
              </div>
            </div>
            <div className="absolute bg-black h-[8px] left-[2px] rounded-[1px] top-1/2 translate-y-[-50%] w-[19px]" />
          </div>
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]" data-name="Color=Clear">
          <div className="absolute h-[15px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]" data-name="9:41">
            <img alt="" className="block max-w-none size-full" src={img12} />
          </div>
        </div>
      </div>

      {/* 底部栏 */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="backdrop-blur-[15px] backdrop-filter h-[49px]" data-name="Home">
          <div className="bg-black h-[2px] mx-auto rounded-[100px] w-[40px] mt-[33px]" data-name="Rectangle" />
        </div>
      </div>

      {/* 返回按钮 */}
      <div className="absolute content-stretch flex items-center left-0 px-[12px] py-[10px] top-[46px] w-[375px]">
        <button onClick={handleBack} className="relative shrink-0 size-[24px]" data-name="chevron-left">
          <div className="absolute inset-[21.19%_33.69%_21.19%_31.61%]" data-name="Union">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={img13} />
            </div>
          </div>
        </button>
      </div>

      {/* 标题 */}
      <div className="absolute content-stretch flex items-center left-0 px-[12px] py-[10px] top-[116px] w-[375px]">
        <div className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="mb-0">轻触记录</p>
          <p>上次月经开始日期：</p>
        </div>
      </div>

      {/* 日历卡片 */}
      <div className="absolute bg-[rgba(255,255,255,0.7)] border border-solid border-white content-stretch flex flex-col gap-[12px] items-start left-[10px] pb-[20px] pt-0 px-0 rounded-[10px] top-[222px] w-[351px]">
        {/* 月份选择器 */}
        <div className="border-white border-b border-l-0 border-r-0 border-solid border-t-0 content-stretch flex items-center justify-between px-[12px] py-[10px] relative shrink-0 w-full">
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-[#333]">
            {currentMonth.year}年{currentMonth.month}月
          </p>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
            <button className="col-[1] ml-[20px] mt-0 relative row-[1] size-[20px]" data-name="chevron-right">
              <div className="absolute inset-[21.19%_31.61%_21.19%_33.69%]" data-name="Union">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none size-full" src={img14} />
                </div>
              </div>
            </button>
            <button className="col-[1] flex items-center justify-center ml-0 mt-0 relative row-[1] size-[20px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="relative size-[20px]" data-name="chevron-right">
                  <div className="absolute inset-[21.19%_31.61%_21.19%_33.69%]" data-name="Union">
                    <div className="absolute inset-0">
                      <img alt="" className="block max-w-none size-full" src={img14} />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 星期标题 */}
        <div className="content-stretch flex font-['jf-openhuninn-2.1:Regular',sans-serif] gap-[25px] items-center justify-center leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(60,60,67,0.6)] w-full">
          <p className="relative shrink-0">周日</p>
          <p className="relative shrink-0">周一</p>
          <p className="relative shrink-0">周二</p>
          <p className="relative shrink-0">周三</p>
          <p className="relative shrink-0">周四</p>
          <p className="relative shrink-0">周五</p>
          <p className="relative shrink-0">周六</p>
        </div>

        {/* 日历网格 */}
        <div className="grid grid-cols-7 gap-[7px] px-[12px]">
          {calendarDates.map((date, index) => (
            <div key={index} className="flex items-center justify-center">
              {date !== null ? (
                <DateButton
                  date={date}
                  variant={selectedDate === date ? "selected" : "default"}
                  onClick={() => setSelectedDate(date)}
                />
              ) : (
                <div className="w-[29px] h-[37px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 下一步按钮 */}
      <button 
        onClick={handleNext}
        className="absolute bg-white content-stretch cursor-pointer flex items-center justify-center left-[10px] p-[10px] rounded-[40px] top-[608px] w-[351px] hover:bg-gray-100 transition-colors"
      >
        <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[20px] text-[#333] text-left">
          下一步
        </p>
      </button>
    </div>
  );
}

