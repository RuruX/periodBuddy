import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 图片资源 URL
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/87646e64-f099-467e-86b6-ed71decac822";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/2d7761a4-2098-4488-bf77-8b0fd61f575f";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/9ec249e9-37e4-4203-aba0-22f39ed63972";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/190d1781-0bcf-4cd1-bde1-5e6950a9991d";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/386dc7c6-d917-4a94-99d3-91b4a62d3566";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/a2124f8a-c18d-464c-b23e-c346ab36b6ea";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/22a6e4da-8109-4ed9-b033-367d9d79f008";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/9dac5aa7-0140-468b-94d5-26ce56661b3d";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/2c89b121-1bc6-46b1-835f-a2272dc40194";
const img = "https://www.figma.com/api/mcp/asset/32dc54b4-4f57-4ccd-8332-de13bff2ea67";
const img1 = "https://www.figma.com/api/mcp/asset/e4dec2e7-1aa3-471d-94aa-0468e937bd7c";
const img2 = "https://www.figma.com/api/mcp/asset/281e65be-25c6-4858-bf87-ed31eab9d52e";
const img3 = "https://www.figma.com/api/mcp/asset/fc9c0463-9396-4077-b849-df20d2950206";
const img4 = "https://www.figma.com/api/mcp/asset/b1bddcc0-b2c6-48dc-acc8-2223c9e59cf9";
const img5 = "https://www.figma.com/api/mcp/asset/d950abd8-75be-41e4-a733-34d3bf313524";
const img6 = "https://www.figma.com/api/mcp/asset/23128c80-8f34-4e56-9e10-a085d43ac1d7";
const img7 = "https://www.figma.com/api/mcp/asset/cb167691-dfc5-4dc5-a4b9-fb439b4cbcfc";
const img8 = "https://www.figma.com/api/mcp/asset/4213be70-f146-4db7-bf05-f959ec7f6f9d";
const img9 = "https://www.figma.com/api/mcp/asset/0094b391-38b8-4888-b0b0-fb53639a37b2";
const img10 = "https://www.figma.com/api/mcp/asset/8f7d9f5d-381e-4966-81b5-8fd14e24c2b4";
const img11 = "https://www.figma.com/api/mcp/asset/f6d04ffa-48ba-4b64-9ef4-cb88af30c3fc";
const img12 = "https://www.figma.com/api/mcp/asset/30564cee-4789-46dc-a509-79aaefc22d69";
const img13 = "https://www.figma.com/api/mcp/asset/f14b5577-7ad7-4198-850b-b544d4b5e429";

export default function OnboardingCycleLength() {
  const navigate = useNavigate();
  const [selectedCycle] = useState(28);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 滚动到选中的周期（28天）
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const selectedIndex = 28 - 20; // 28天是从20开始的第9个选项
      const itemHeight = 51; // 每个选项的高度
      const scrollPosition = selectedIndex * itemHeight - (container.clientHeight / 2) + (itemHeight / 2);
      container.scrollTop = scrollPosition;
    }
  }, []);

  const handleNext = () => {
    // 导航到五芒星页面
    console.log('Selected cycle length:', selectedCycle);
    navigate('/daily-star');
  };

  const handleBack = () => {
    navigate(-1);
  };

  // 生成周期长度选项 (20-37天)
  const cycleLengths = Array.from({ length: 18 }, (_, i) => 20 + i);

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
          <p className="mb-0">选择你的</p>
          <p>月经周期长度：</p>
        </div>
      </div>

      {/* 滚动选择器容器 */}
      <div className="absolute left-0 top-[253px] w-[375px] h-[255px] overflow-hidden">
        {/* 背景层 */}
        <div className="absolute contents left-0 top-0">
          <div className="absolute bg-[rgba(255,255,255,0.1)] h-[51px] left-0 top-0 w-[375px]" />
          <div className="absolute bg-[rgba(255,255,255,0.4)] h-[51px] left-0 top-[51px] w-[375px]" />
          <div className="absolute bg-white h-[51px] left-0 top-[102px] w-[375px]" />
          <div className="absolute bg-[rgba(255,255,255,0.4)] h-[51px] left-0 top-[153px] w-[375px]" />
          <div className="absolute bg-[rgba(255,255,255,0.1)] h-[51px] left-0 top-[204px] w-[375px]" />
        </div>

        {/* 滚动选择器 */}
        <div 
          ref={scrollContainerRef}
          className="absolute left-0 top-0 w-[375px] h-[255px] overflow-y-scroll scrollbar-hide"
          style={{ scrollSnapType: 'y mandatory' }}
        >
          <div className="relative" style={{ paddingTop: '102px', paddingBottom: '102px' }}>
            {cycleLengths.map((length) => (
              <div
                key={length}
                className={`h-[51px] flex items-center justify-center font-['jf-openhuninn-2.1:Regular',sans-serif] text-[24px] leading-[1.3] not-italic ${
                  length === selectedCycle ? 'text-[#333]' : 'text-[#8e8e93]'
                }`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <p>{length}天</p>
              </div>
            ))}
          </div>
        </div>

        {/* 选择指示器遮罩 */}
        <div className="absolute pointer-events-none left-[105px] top-[102px] w-[149px] h-[51px] border-t-2 border-b-2 border-[#333]" />
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

