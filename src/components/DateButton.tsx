import React from 'react';

// 图片资源 URL (从 Figma 导出)
const imgCircle = "https://www.figma.com/api/mcp/asset/3dce3486-e107-4b28-8540-f9c4acaf4b68";
const imgCircle1 = "https://www.figma.com/api/mcp/asset/5788fbed-6e1e-4f48-a6c7-6820bc3a38d0";

type DateButtonProps = {
  date: number;
  variant?: "default" | "selected" | "highlighted";
  onClick?: () => void;
  className?: string;
};

export default function DateButton({ 
  date, 
  variant = "default", 
  onClick,
  className = ""
}: DateButtonProps) {
  if (variant === "selected") {
    return (
      <button 
        className={`block cursor-pointer h-[37px] relative w-[29px] ${className}`} 
        onClick={onClick}
        data-name="Property 1=Group 1171275349"
      >
        <div className="absolute inset-[10.81%_0]" data-name="circle">
          <img alt="" className="block max-w-none size-full" src={imgCircle} />
        </div>
        <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center px-[10px] py-[8px]">
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[16px] text-white text-left">
            {date}
          </p>
        </div>
      </button>
    );
  }
  
  if (variant === "highlighted") {
    return (
      <button 
        className={`block cursor-pointer h-[37px] relative w-[29px] ${className}`} 
        onClick={onClick}
        data-name="Property 1=Variant3"
      >
        <div className="absolute inset-[10.81%_0]" data-name="circle">
          <img alt="" className="block max-w-none size-full" src={imgCircle1} />
        </div>
        <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center px-[10px] py-[8px]">
          <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[16px] text-[#333] text-left">
            {date}
          </p>
        </div>
      </button>
    );
  }
  
  return (
    <div 
      className={`content-stretch flex flex-col items-center justify-center px-[10px] py-[8px] relative w-[29px] cursor-pointer ${className}`}
      onClick={onClick}
      data-name="Property 1=Frame 35"
    >
      <p className="font-['jf-openhuninn-2.1:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[16px] text-black w-full whitespace-pre-wrap">
        {date}
      </p>
    </div>
  );
}

