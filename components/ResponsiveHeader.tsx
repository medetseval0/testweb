import { useState } from "react";
import svgPaths from "../imports/svg-pv5ln7rdt6";
import clsx from "clsx";
import imgRectangle1 from "figma:asset/a8d10ad7a6829b4994d24c2b739281d7fd47b8bd.png";

type BackgroundImage57Props = {
  additionalClassNames?: string[];
};

function BackgroundImage57({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage57Props>) {
  return (
    <div className={clsx("relative rounded-lg shrink-0 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/5 active:bg-white/10", additionalClassNames)}>
      <div className="absolute border border-kso-border border-solid inset-0 pointer-events-none rounded-lg transition-all duration-200" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage27({ children, additionalClassNames = [] }: React.PropsWithChildren<{ additionalClassNames?: string[] }>) {
  return (
    <div className={clsx("relative size-8 transition-transform duration-200 hover:scale-110 active:scale-95", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        {children}
      </svg>
    </div>
  );
}

type AddlistinginstanceBackgroundImageProps = {
  additionalClassNames?: string[];
};

function AddlistinginstanceBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<AddlistinginstanceBackgroundImageProps>) {
  return (
    <BackgroundImage27 additionalClassNames={additionalClassNames}>
      <g id="add-listing-instance">{children}</g>
    </BackgroundImage27>
  );
}

function AddListingInstance() {
  return (
    <AddlistinginstanceBackgroundImage>
      <path
        clipRule="evenodd"
        d={svgPaths.p2b9d6680}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function CategoriesContainer() {
  return (
    <BackgroundImage57 additionalClassNames={["h-full"]}>
      <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-4 py-2 relative group">
        <div className="capitalize font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap transition-colors duration-200 group-hover:text-kso-main">
          <p className="block leading-[24px] whitespace-pre">Kategoriler</p>
        </div>
        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-[32px]">
          <div className="flex-none rotate-[90deg] transition-transform duration-200 group-hover:rotate-[180deg]">
            <AddListingInstance />
          </div>
        </div>
      </div>
    </BackgroundImage57>
  );
}

function SearchGroup() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="search-group"
    >
      <div
        className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.1)] h-14 ml-0 mt-0 relative rounded-lg w-[650px] transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] focus-within:bg-[rgba(255,255,255,0.2)] focus-within:ring-2 focus-within:ring-white/20"
        data-name="search-background"
      >
        <div className="absolute border border-kso-border border-solid inset-0 pointer-events-none rounded-lg transition-all duration-200" />
      </div>
      <BackgroundImage27
        additionalClassNames={["[grid-area:1_/_1]", "ml-[12.5px]", "mt-2.5"]}
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p2b9d6680}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
          id="Vector"
        />
      </BackgroundImage27>
      <input
        type="text"
        placeholder="PUBG Game"
        className="[grid-area:1_/_1] font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium lowercase ml-[49.5px] mt-3 relative text-[#9d9d9d] text-[16px] text-left bg-transparent border-none outline-none placeholder:text-[#9d9d9d] focus:text-white transition-colors duration-200 w-full pr-4"
      />
    </div>
  );
}

function ThemeContainer() {
  return (
    <div
      className="h-full relative rounded-lg shrink-0 w-14 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/10"
      data-name="theme-container"
    >
      <div className="absolute border border-kso-border border-solid inset-0 pointer-events-none rounded-lg transition-all duration-200" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[8px] relative w-14">
          <BackgroundImage27 additionalClassNames={["shrink-0"]}>
            <path
              clipRule="evenodd"
              d={svgPaths.p28d24380}
              fill="var(--kso-main-color)"
              fillRule="evenodd"
              id="Vector"
            />
          </BackgroundImage27>
        </div>
      </div>
    </div>
  );
}

function AddListingInstance2() {
  return (
    <div className="relative shrink-0 size-6 transition-transform duration-200 group-hover:scale-110" data-name="add-listing-instance">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="add-listing-instance">
          <path
            d={svgPaths.p2d400c78}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AddListingButton() {
  return (
    <div
      className="bg-kso-main relative rounded-lg shrink-0 cursor-pointer transition-all duration-200 hover:bg-kso-hover active:bg-kso-active hover:scale-105 active:scale-95 group"
      data-name="add-listing-button"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative">
          <AddListingInstance2 />
          <div className="capitalize font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">İlan Ekle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddListingInstance3() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p28d24380}
        fill="var(--kso-main-color)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function BalanceDetails() {
  return (
    <div className="relative shrink-0" data-name="balance-details">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] px-1 py-0 relative text-left text-nowrap">
          <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium opacity-50 relative shrink-0 text-kso-text text-[14px] transition-opacity duration-200 group-hover:opacity-70">
            <p className="block leading-[20px] text-nowrap whitespace-pre">
              Bakiye Yükle
            </p>
          </div>
          <div className="font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold relative shrink-0 text-kso-main text-[16px] transition-colors duration-200 group-hover:text-kso-hover">
            <p className="block leading-[20px] text-nowrap whitespace-pre">
              321.00₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceContainer() {
  return (
    <div className="relative shrink-0 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/10 rounded-lg p-1 group" data-name="balance-container">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <AddListingInstance3 />
        <BalanceDetails />
      </div>
    </div>
  );
}

function AddListingInstance4() {
  return (
    <div
      className="relative shrink-0 size-[26px] cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
      data-name="add-listing-instance"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="add-listing-instance">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c760100}
            fill="var(--kso-main-color)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UserActionsContainer() {
  return (
    <BackgroundImage57>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative">
        <AddListingButton />
        <BalanceContainer />
        <AddListingInstance4 />
        <div
          className="[background-size:174.47%_174.47%] bg-[51.04%_9.14%] bg-no-repeat relative rounded-lg shrink-0 size-[34px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 hover:ring-2 hover:ring-white/30"
          style={{ backgroundImage: `url('${imgRectangle1}')` }}
        >
          <div className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-lg transition-all duration-200" />
        </div>
      </div>
    </BackgroundImage57>
  );
}

// Mobile Menu Component
function MobileMenuIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200"
    >
      <div className="w-6 h-6 flex flex-col justify-center space-y-1">
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </button>
  );
}

function HeaderContainer() {
  return (
    <div className="relative size-full" data-name="header-container">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative size-full">
        <div className="h-[34px] relative shrink-0 w-[104px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95" data-name="logo">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 104 34"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p50eee80}
              fill="var(--fill-0, #D9D9D9)"
              fillRule="evenodd"
              id="logo"
            />
          </svg>
        </div>
        <CategoriesContainer />
        <SearchGroup />
        <ThemeContainer />
        <UserActionsContainer />
      </div>
    </div>
  );
}

// Frame106676 Exact Components
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative size-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function Publishersmenuitem({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <Wrapper additionalClassNames={["flex", "flex-row", "items-center"]}>
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative cursor-pointer transition-all duration-200 hover:bg-white/10 active:bg-white/20 rounded-md group">
          {children}
        </div>
      </Wrapper>
    </Wrapper1>
  );
}

function Addlistinginstance({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames={["size-8"]}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="add-listing-instance">{children}</g>
      </svg>
    </Wrapper1>
  );
}

function AddListingInstanceFrame() {
  return (
    <Addlistinginstance>
      <path
        clipRule="evenodd"
        d={svgPaths.p2304cc00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="vector"
      />
    </Addlistinginstance>
  );
}

function PublishersMenuItem() {
  return (
    <Publishersmenuitem>
      <AddListingInstanceFrame />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap uppercase transition-colors duration-200 group-hover:text-kso-main">
        <p className="block leading-[24px] whitespace-pre">EPIN</p>
      </div>
    </Publishersmenuitem>
  );
}

function AddListingInstance1() {
  return (
    <Addlistinginstance>
      <path
        clipRule="evenodd"
        d={svgPaths.p6998f00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Addlistinginstance>
  );
}

function PublishersMenuItem1() {
  return (
    <Publishersmenuitem>
      <AddListingInstance1 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap uppercase transition-colors duration-200 group-hover:text-kso-main">
        <p className="block leading-[24px] whitespace-pre">CD-KEY</p>
      </div>
    </Publishersmenuitem>
  );
}

function AddListingInstance2Frame() {
  return (
    <Addlistinginstance>
      <path
        clipRule="evenodd"
        d={svgPaths.p1f158900}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Addlistinginstance>
  );
}

function PublishersMenuItem2() {
  return (
    <Publishersmenuitem>
      <AddListingInstance2Frame />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap uppercase transition-colors duration-200 group-hover:text-kso-main">
        <p className="block leading-[24px] whitespace-pre">Oyun Parası</p>
      </div>
    </Publishersmenuitem>
  );
}

function AddListingInstance3Frame() {
  return (
    <Addlistinginstance>
      <path
        clipRule="evenodd"
        d={svgPaths.p41476e0}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Addlistinginstance>
  );
}

function PublishersMenuItem3() {
  return (
    <Publishersmenuitem>
      <AddListingInstance3Frame />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap uppercase transition-colors duration-200 group-hover:text-kso-main">
        <p className="block leading-[24px] whitespace-pre">PVP SERVER</p>
      </div>
    </Publishersmenuitem>
  );
}

function AddListingInstance4Frame() {
  return (
    <Addlistinginstance>
      <path
        clipRule="evenodd"
        d={svgPaths.p1e5e1e00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Addlistinginstance>
  );
}

function PublishersMenuItem4() {
  return (
    <Publishersmenuitem>
      <AddListingInstance4Frame />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-kso-text text-[16px] text-left text-nowrap uppercase transition-colors duration-200 group-hover:text-kso-main">
        <p className="block leading-[24px] whitespace-pre">Yayıncılar</p>
      </div>
    </Publishersmenuitem>
  );
}

function NavigationMenuContainer() {
  return (
    <Wrapper1 additionalClassNames={["opacity-50", "w-[1440px]"]}>
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center p-0 relative w-[1440px] mx-auto">
        <PublishersMenuItem />
        <PublishersMenuItem1 />
        <PublishersMenuItem2 />
        <PublishersMenuItem3 />
        <PublishersMenuItem4 />
      </div>
    </Wrapper1>
  );
}

function Frame106676() {
  return (
    <Wrapper>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-1 relative size-full">
          <NavigationMenuContainer />
        </div>
      </div>
    </Wrapper>
  );
}

// Mobile Side Panel
function MobileSidePanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-kso-background backdrop-blur-[32px] border-l border-kso-border z-50 lg:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-kso-border">
            <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-lg">
              Menü
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-white rotate-45 absolute" />
                <div className="w-6 h-0.5 bg-white -rotate-45 absolute" />
              </div>
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 p-4 space-y-2">
            <div className="mb-6">
              <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-main text-sm mb-3 uppercase">
                Kategoriler
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 cursor-pointer group">
                  <AddListingInstanceFrame />
                  <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-sm uppercase group-hover:text-kso-main transition-colors duration-200">EPIN</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 cursor-pointer group">
                  <AddListingInstance1 />
                  <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-sm uppercase group-hover:text-kso-main transition-colors duration-200">CD-KEY</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 cursor-pointer group">
                  <AddListingInstance2Frame />
                  <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-sm uppercase group-hover:text-kso-main transition-colors duration-200">Oyun Parası</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 cursor-pointer group">
                  <AddListingInstance3Frame />
                  <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-sm uppercase group-hover:text-kso-main transition-colors duration-200">PVP SERVER</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 cursor-pointer group">
                  <AddListingInstance4Frame />
                  <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold text-kso-text text-sm uppercase group-hover:text-kso-main transition-colors duration-200">Yayıncılar</span>
                </div>
              </div>
            </div>
            
            {/* User Actions - Mobile Version */}
            <div className="space-y-3 pt-4 border-t border-kso-border">
              <AddListingButton />
              <BalanceContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ResponsiveHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className="backdrop-blur-[32px] backdrop-filter bg-kso-background relative size-full"
        data-name="KSO-Header"
      >
        <div className="absolute border-[0px_0px_1px] border-kso-border border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center justify-center relative size-full">
          {/* Header content removed */}
        </div>
      </div>
      
      {/* Mobile Side Panel */}
      <MobileSidePanel isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </>
  );
}