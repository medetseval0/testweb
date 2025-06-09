import { useState } from 'react';
import svgPaths from "./svg-mx7lk6x3yo";
import newSvgPaths from "./svg-ln7qx8e80l";
import barSvgPaths from "./svg-1x7owbf0i6";

function Frame106942({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="h-[21.175px] relative shrink-0 w-[93.206px] cursor-pointer transition-all duration-200 hover:opacity-80 active:opacity-60" 
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 94 22"
      >
        <g id="Frame 106942">
          <path
            clipRule="evenodd"
            d={newSvgPaths.pe246b00}
            fill="url(#paint0_linear_4_70)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={newSvgPaths.pae54500}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_4_70"
            x1="10.0347"
            x2="12.7875"
            y1="8.08732"
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

function Frame106943({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#51bf40] relative rounded shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#459938] active:bg-[#3e8831]" 
      onClick={onClick}
    >
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

function Frame106944({ onLogoClick, onProjectClick }: { onLogoClick?: () => void; onProjectClick?: () => void }) {
  return (
    <div className="flex items-center">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Frame106942 onClick={onLogoClick} />
        <Frame106943 onClick={onProjectClick} />
      </div>
    </div>
  );
}

// New button components from the design
function Wrapper1({
  children,
  additionalClassNames = [],
  onClick,
}: React.PropsWithChildren<{ 
  additionalClassNames?: string[];
  onClick?: () => void;
}>) {
  return (
    <div
      className={`bg-[#51bf40] relative rounded-[3600px] cursor-pointer transition-all duration-200 hover:bg-[#459938] active:bg-[#3e8831] ${additionalClassNames.join(' ')}`}
      onClick={onClick}
    >
      <div className="absolute border-[0.734722px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[3600px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<{ additionalClassNames?: string[] }>) {
  return (
    <div className={`relative shrink-0 ${additionalClassNames.join(' ')}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="add-icon">{children}</g>
      </svg>
    </div>
  );
}

function PagePanelIcon() {
  return (
    <Wrapper additionalClassNames={["h-[17.565px]", "w-[17.633px]"]}>
      <path
        d={barSvgPaths.p24acfa80}
        fill="var(--fill-0, white)"
        id="FLORA-Arrow Icon Set-3c5ac4d8 1 (Traced)_1_1"
      />
    </Wrapper>
  );
}

function AllProjectIcon() {
  return (
    <Wrapper additionalClassNames={["size-[17.633px]"]}>
      <path
        clipRule="evenodd"
        d={barSvgPaths.p147a9400}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Wrapper>
  );
}

function PagePanelButton({ onClick }: { onClick?: () => void }) {
  return (
    <Wrapper1 additionalClassNames={["shrink-0", "w-[120.494px]"]} onClick={onClick}>
      <div className="box-border content-stretch flex flex-row gap-[5.878px] items-center justify-center px-[5.878px] py-2 relative w-[120.494px]">
        <PagePanelIcon />
        <div className="capitalize font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#ffffff] text-[13.225px] text-left text-nowrap">
          <p className="block leading-[17.6333px] whitespace-pre">Sayfa Paneli</p>
        </div>
      </div>
    </Wrapper1>
  );
}

function AllProjectButton({ onClick }: { onClick?: () => void }) {
  return (
    <Wrapper1 additionalClassNames={["shrink-0", "w-[120.494px]"]} onClick={onClick}>
      <div className="box-border content-stretch flex flex-row gap-[5.878px] items-center justify-center px-[5.878px] py-2 relative w-[120.494px]">
        <AllProjectIcon />
        <div className="capitalize font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#ffffff] text-[13.225px] text-left text-nowrap">
          <p className="block leading-[17.6333px] whitespace-pre">All Project</p>
        </div>
      </div>
    </Wrapper1>
  );
}

function ShowHideButton({ onClick, isHidden }: { onClick?: () => void; isHidden?: boolean }) {
  return (
    <Wrapper1 additionalClassNames={["w-[34px]"]} onClick={onClick}>
      <div className="box-border content-stretch flex flex-row gap-[5.878px] items-center justify-center px-[5.878px] py-2 relative w-[34px]">
        <div className={`flex-none transition-transform duration-300 ${isHidden ? 'rotate-[270deg]' : 'rotate-[90deg]'}`}>
          <PagePanelIcon />
        </div>
      </div>
    </Wrapper1>
  );
}

interface HeadFixProps {
  onPanelToggle?: () => void;
  onAllProjectsClick?: () => void;
  onToggleVisibility?: () => void;
  onLogoClick?: () => void;
  onProjectClick?: () => void;
  isHidden?: boolean;
}

export default function HeadFix({ 
  onPanelToggle, 
  onAllProjectsClick,
  onToggleVisibility,
  onLogoClick,
  onProjectClick,
  isHidden = false 
}: HeadFixProps) {
  const [internalHidden, setInternalHidden] = useState(false);
  
  const handleToggleVisibility = () => {
    if (onToggleVisibility) {
      onToggleVisibility();
    } else {
      setInternalHidden(!internalHidden);
    }
  };

  const actualIsHidden = isHidden || internalHidden;

  // If hidden, show only the floating arrow button
  if (actualIsHidden) {
    return (
      <div className="fixed top-4 right-4 z-[9999]">
        <ShowHideButton 
          onClick={handleToggleVisibility} 
          isHidden={actualIsHidden}
        />
      </div>
    );
  }

  // If visible, show the full bar as fixed with better shadow
  return (
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-black/10 h-[58px] z-[9999] shadow-md">
      <div className="relative flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Frame106944 onLogoClick={onLogoClick} onProjectClick={onProjectClick} />
        </div>
        
        {/* Right Side Buttons */}
        <div className="flex items-center">
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative">
            <PagePanelButton onClick={onPanelToggle} />
            <AllProjectButton onClick={onAllProjectsClick} />
            <ShowHideButton 
              onClick={handleToggleVisibility} 
              isHidden={actualIsHidden}
            />
          </div>
        </div>
      </div>
    </div>
  );
}