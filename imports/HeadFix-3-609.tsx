import svgPaths from "./svg-7yrqwql59v";

function Frame106942() {
  return (
    <div className="h-[21.175px] relative shrink-0 w-[93.206px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 94 22"
      >
        <g id="Frame 106942">
          <path
            clipRule="evenodd"
            d={svgPaths.pe246b00}
            fill="url(#paint0_linear_3_613)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pae54500}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_3_613"
            x1="9.50677"
            x2="12.7875"
            y1="0.136633"
            y2="18.3607"
          >
            <stop stopColor="#51BF40" />
            <stop offset="1" stopColor="#42956E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame106943() {
  return (
    <div className="bg-[#51bf40] relative rounded shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-2.5 py-1 relative">
          <div className="font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              KSO - PROJECT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106944() {
  return (
    <div className="absolute left-[18px] top-[13px]">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Frame106942 />
        <Frame106943 />
      </div>
    </div>
  );
}

export default function HeadFix() {
  return (
    <div className="relative size-full" data-name="HeadFix">
      <div className="absolute bg-[#2c3337] h-14 left-0 top-0 w-[1923px]">
        <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      <Frame106944 />
    </div>
  );
}