import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 图片资源 URL
const img13 = "https://www.figma.com/api/mcp/asset/d5c65945-73be-46b7-b22c-637c0a627a22";
const img15 = "https://www.figma.com/api/mcp/asset/c7f78423-89b1-4694-bac2-0b5233283aea";
const img22 = "https://www.figma.com/api/mcp/asset/e5f0fd64-16d8-40ee-8048-44145328e77e";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/e70db91a-8420-4ee6-8ce5-c9ff2903fe84";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/3a04c350-bcca-41ab-999a-927e46bf983e";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/1175c7a6-cbed-4480-9112-27177ed3d679";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/57f46ca7-6df5-458b-bf96-457002cdb6d4";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/ecc9e5ea-2fa9-4a64-95a1-eef247b65eab";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/c993bae0-eb30-47b4-9d54-d79d45bfe9e6";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/2a7485ed-1e9e-44d0-b56e-778855b2025b";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/b0b392ae-cdd3-42d7-8e3e-10a1da66f7f9";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/4e090ac5-4658-4fe0-90af-fb5650962a60";
const img = "https://www.figma.com/api/mcp/asset/4b13261a-bdea-4c74-b772-3099e9db4ed2";
const img1 = "https://www.figma.com/api/mcp/asset/14c30ebe-f517-474e-bc14-265d60906a44";
const img2 = "https://www.figma.com/api/mcp/asset/517ae320-dcaa-47cd-88c2-c34996e6f102";
const img3 = "https://www.figma.com/api/mcp/asset/96957d5f-07e9-45cf-bb6b-8c1831efb79f";
const img4 = "https://www.figma.com/api/mcp/asset/ebb2e141-07e2-44c2-8046-a6064f44aa1e";
const img5 = "https://www.figma.com/api/mcp/asset/46d6a169-4dc9-4b97-9892-7da1e6f262e8";
const img6 = "https://www.figma.com/api/mcp/asset/1216da04-ce47-4518-93d4-8443a1c3b090";
const img7 = "https://www.figma.com/api/mcp/asset/029f80f9-18c7-410a-98d8-065ccf97914d";
const img8 = "https://www.figma.com/api/mcp/asset/58291e48-cbe8-494c-af04-516de903827e";
const img9 = "https://www.figma.com/api/mcp/asset/0a5f9d9f-ceef-4d86-90d0-e2c571cf4657";
const img10 = "https://www.figma.com/api/mcp/asset/2a216142-0946-4973-a204-fc13efd0a424";
const img11 = "https://www.figma.com/api/mcp/asset/e22fed9c-c40b-4597-8047-9dee436bdd14";
const img12 = "https://www.figma.com/api/mcp/asset/8005cd12-19fc-45af-af31-768ad21eb0a0";
const imgSubtract = "https://www.figma.com/api/mcp/asset/fcf35cfd-72b6-450c-8668-78683bce4344";
const imgSubtract1 = "https://www.figma.com/api/mcp/asset/7adaa03c-b94f-4c36-8a0a-7d10b11cc499";
const imgGroup1171275345 = "https://www.figma.com/api/mcp/asset/b2ffbdc8-b80e-423b-b169-6597bf08cb00";
const imgVector1 = "https://www.figma.com/api/mcp/asset/debe44ed-f757-4069-8763-1d0a2ea92ce8";
const imgStar1 = "https://www.figma.com/api/mcp/asset/b9e89d32-f1af-4a4f-8700-d47536c2d64c";
const imgVector2 = "https://www.figma.com/api/mcp/asset/fa442d1a-0ed6-499f-8e4d-da6093d64732";
const imgGroup1171275346 = "https://www.figma.com/api/mcp/asset/bb9fc70e-707d-48da-8e81-adfced507634";
const imgGroup1171275347 = "https://www.figma.com/api/mcp/asset/6319682d-628c-46f2-856c-c9cd2c43bb3f";
const imgLine8 = "https://www.figma.com/api/mcp/asset/0f105266-afb0-4132-abea-8da9c7a52afb";
const img14 = "https://www.figma.com/api/mcp/asset/f2477add-49d3-48d4-b370-af3f08caca37";
const imgPolygon1 = "https://www.figma.com/api/mcp/asset/713948a4-827d-4ce1-9550-0d3858af2da7";
const imgPolygon1Large = "https://www.figma.com/api/mcp/asset/70607332-a4b2-40ba-8c87-2844b969ac6f";
const imgEllipse13 = "https://www.figma.com/api/mcp/asset/8005002c-6aac-4c74-98d1-dafd36f10c21";

export default function DailyStarCard() {
  const navigate = useNavigate();
  const [currentDate] = useState('12月28日');
  const [starType, setStarType] = useState<'small' | 'large'>('small');

  const handlePrevDay = () => {
    console.log('前一天');
  };

  const handleNextDay = () => {
    console.log('后一天');
  };

  const toggleStarSize = () => {
    setStarType(starType === 'small' ? 'large' : 'small');
  };

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[20px] h-screen w-full max-w-[375px] mx-auto" data-name="card">
      {/* 背景装饰元素 */}
      <div className="absolute contents left-[-191px] top-[-280px]">
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
        <div className="absolute backdrop-blur-[45.15px] backdrop-filter bg-[rgba(255,255,255,0.4)] h-[1457px] left-0 mix-blend-luminosity top-[-280px] w-[375px]" />
      </div>

      {/* 状态栏 */}
      <div className="absolute h-[44px] left-0 overflow-clip right-0 top-0 z-50" data-name="Property 1=Status Bar">
        <div className="absolute content-stretch flex gap-[4px] items-center right-[14px] top-[16px]">
          <div className="h-[14px] relative shrink-0 w-[20px]">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[16px]">
            <img alt="" className="block max-w-none size-full" src={img7} />
          </div>
          <div className="h-[14px] relative shrink-0 w-[25px]">
            <div className="absolute bg-black h-[8px] left-[2px] rounded-[1px] top-1/2 translate-y-[-50%] w-[19px]" />
          </div>
        </div>
        <div className="absolute h-[21px] left-[21px] overflow-clip rounded-[20px] top-[12px] w-[54px]">
          <div className="absolute h-[15px] left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[33px]">
            <img alt="" className="block max-w-none size-full" src={img12} />
          </div>
        </div>
      </div>

      {/* 底部栏 */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
        <div className="backdrop-blur-[15px] backdrop-filter h-[49px]">
          <div className="bg-black h-[2px] mx-auto rounded-[100px] w-[40px] mt-[33px]" />
        </div>
      </div>

      {/* 装饰元素 - 顶部 */}
      <div className="absolute h-[60.5px] left-[182px] top-[-3.5px] w-[8.675px] z-20">
        <div className="absolute inset-[-1.05%_-17.29%_-1.08%_-15.67%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div className="absolute left-[128px] size-[87px] top-[48px] z-20">
        <div className="absolute inset-[0_-4.6%_-9.2%_-4.6%]">
          <img alt="" className="block max-w-none size-full" src={imgStar1} />
        </div>
      </div>
      <div className="absolute h-[83px] left-[150.09px] top-[-4px] w-[100.906px] z-20">
        <div className="absolute inset-[-1.81%_-1.49%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>

      {/* 标题 */}
      <div className="absolute flex h-[63.578px] items-center justify-center left-[181px] top-[60px] w-[164.252px] z-30">
        <div className="flex-none rotate-[7.894deg]">
          <p className="font-['LogoSC_Unbounded_Sans:Regular',sans-serif] leading-[1.3] not-italic relative text-[#ff582f] text-[32px]">
            今日五芒星
          </p>
        </div>
      </div>
      <div className="absolute flex h-[22.958px] items-center justify-center left-[182.14px] top-[100.02px] w-[157.727px] z-30">
        <div className="flex-none rotate-[8.282deg]">
          <div className="h-0 relative w-[159.389px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine8} />
            </div>
          </div>
        </div>
      </div>

      {/* 日期切换 */}
      <div className="absolute content-stretch flex gap-[49px] items-center justify-center left-[12px] top-[146px] w-[351px] z-30">
        <button
          onClick={handlePrevDay}
          className="bg-gradient-to-r content-stretch flex from-[#ffabac] items-center justify-center pl-0 pr-[8px] py-0 relative rounded-[20px] shrink-0 to-[#ff7a45] hover:opacity-90 transition-opacity"
        >
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[21.19%_33.69%_21.19%_31.61%]">
              <div className="absolute inset-0">
                <img alt="" className="block max-w-none size-full" src={img14} />
              </div>
            </div>
          </div>
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-white">
            前一天
          </p>
        </button>
        <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[18px] text-[#333]">
          {currentDate}
        </p>
        <button
          onClick={handleNextDay}
          className="bg-gradient-to-r content-stretch flex from-[#ff7a45] items-center justify-center pl-[8px] pr-0 py-0 relative rounded-[20px] shrink-0 to-[#ffabac] hover:opacity-90 transition-opacity"
        >
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[14px] text-white">
            后一天
          </p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="relative size-[24px]">
                <div className="absolute inset-[21.19%_33.69%_21.19%_31.61%]">
                  <div className="absolute inset-0">
                    <img alt="" className="block max-w-none size-full" src={img14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* 卡片背景 */}
      <div className="absolute h-[663.275px] left-[12px] top-[59.73px] w-[351.19px]">
        <img alt="" className="block max-w-none size-full" src={imgSubtract} />
      </div>

      {/* 五芒星图和标签 */}
      <div className="absolute contents left-[72.5px] top-[207px]">
        <div className="absolute left-[72.5px] size-[219px] top-[207px]">
          <img alt="" className="block max-w-none size-full" src={imgGroup1171275346} />
        </div>
        <div className="absolute h-[197.1px] left-[78.63px] top-[207px] w-[206.913px]">
          <div className="absolute inset-[0_0_-0.15%_-0.15%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup1171275347} />
          </div>
        </div>
      </div>

      {/* 五芒星形状（可点击切换大小） */}
      <div
        onClick={toggleStarSize}
        className="absolute cursor-pointer transition-all duration-300"
        style={
          starType === 'small'
            ? { height: '66px', left: '154px', top: '283px', width: '55px' }
            : { height: '180px', left: '106px', top: '225px', width: '150px' }
        }
      >
        <img
          alt=""
          className="block max-w-none size-full transition-all duration-300"
          src={starType === 'small' ? imgPolygon1 : imgPolygon1Large}
        />
      </div>

      {/* 能力标签 */}
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[161px] not-italic text-[14px] text-[#333] top-[191px] z-30">
        🏃‍♀耐力
      </p>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[58px] not-italic text-[14px] text-[#333] top-[408px] z-30">
        😌舒适度
      </p>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[273px] not-italic text-[14px] text-[#333] top-[262px] z-30">
        💥爆发力
      </p>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[234px] not-italic text-[14px] text-[#333] top-[408px] z-30">
        💗️亲密欲望
      </p>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[35px] not-italic text-[14px] text-[#333] top-[262px] z-30">
        🧠专注度
      </p>

      {/* 引擎全开标题 */}
      <p className="absolute font-['Mantou_Sans:Regular',sans-serif] leading-[1.3] left-[26px] not-italic text-[18px] text-[#333] top-[518px] z-20">
        引擎全开
      </p>

      {/* 工作表现卡片 */}
      <div className="absolute h-[189px] left-[12px] top-[543px] w-[351px] z-20">
        <img alt="" className="block max-w-none size-full" src={imgSubtract} />
      </div>
      <div className="absolute h-[172px] left-[187px] top-[518px] w-[136px] z-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.53%] left-0 max-w-none top-0 w-full" src={img15} />
        </div>
      </div>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[27px] not-italic text-[16px] text-[#333] top-[564px] z-20">
        工作表现
      </p>
      <div className="absolute flex h-[40.424px] items-center justify-center left-[91px] top-[550px] w-[33.982px] z-20">
        <div className="flex-none rotate-[349.707deg]">
          <p className="font-['LogoSC_Unbounded_Sans:Regular',sans-serif] leading-[1.3] not-italic relative text-[#ff8162] text-[28px]">
            强
          </p>
        </div>
      </div>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[27px] not-italic text-[14px] text-[#333] top-[600px] w-[141px] whitespace-pre-wrap z-20">
        高「引擎全开」爆发力强、耐受度高，适合高强度。
      </p>

      {/* 运动表现卡片 */}
      <div className="absolute h-[189px] left-[12px] top-[743px] w-[351px] z-20">
        <img alt="" className="block max-w-none size-full" src={imgSubtract1} />
      </div>
      <div className="absolute h-[163px] left-[207px] top-[769px] w-[122px] z-20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img13} />
      </div>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[27px] not-italic text-[16px] text-[#333] top-[798px] z-20">
        运动表现
      </p>
      <div className="absolute flex h-[40.424px] items-center justify-center left-[91px] top-[784px] w-[33.982px] z-20">
        <div className="flex-none rotate-[349.707deg]">
          <p className="font-['LogoSC_Unbounded_Sans:Regular',sans-serif] leading-[1.3] not-italic relative text-[#ff8162] text-[28px]">
            强
          </p>
        </div>
      </div>
      <p className="absolute font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] left-[27px] not-italic text-[14px] text-[#333] top-[835px] w-[141px] whitespace-pre-wrap z-20">
        高「引擎全开」爆发力强、耐受度高，适合高强度训练。
      </p>

      {/* 装饰图标 */}
      <div className="absolute h-[66px] left-[31.5px] top-[700px] w-[19.5px] z-20">
        <div className="absolute inset-[-2.27%_-7.69%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup1171275345} />
        </div>
      </div>

      {/* Sunnie 聊天按钮 */}
      <button 
        onClick={handleChatClick}
        className="absolute left-[240px] top-[435px] hover:opacity-90 transition-opacity z-40 cursor-pointer"
      >
        <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center left-0 px-[10px] py-[8px] rounded-[40px] top-[63px]">
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-black">
            和Sunnie聊一聊吧~
          </p>
        </div>
        <div className="absolute contents left-[57px] top-0">
          <div className="absolute left-[58.19px] size-[68.43px] top-[1.79px]">
            <div className="absolute inset-[-42.23%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse13} />
            </div>
          </div>
          <div className="absolute h-[72px] left-[57px] top-0 w-[71.405px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[210.84%] left-[-29.21%] max-w-none top-[-62.81%] w-[158.91%]" src={img22} />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

