import React, { useState } from 'react';
import svgPaths from "../../../imports/svg-oxxlfg7jy2";
import themeContainerSvg from "../../../imports/svg-17ahhy6d65";
import imgRectangle1 from "figma:asset/a8d10ad7a6829b4994d24c2b739281d7fd47b8bd.png";

// Base Components for consistent styling
function BorderedContainer({ 
  children, 
  className = "", 
  additionalClasses = [] 
}: { 
  children: React.ReactNode; 
  className?: string; 
  additionalClasses?: string[];
}) {
  return (
    <div className={`relative rounded-lg shrink-0 ${additionalClasses.join(' ')} ${className}`}>
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function IconContainer({ children, size = "size-8", additionalClasses = [] }: { 
  children: React.ReactNode; 
  size?: string;
  additionalClasses?: string[];
}) {
  return (
    <svg className={`block ${size} ${additionalClasses.join(' ')}`} fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      {children}
    </svg>
  );
}

// Icon Components
function ChevronIcon() {
  return (
    <IconContainer>
      <g id="chevron-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p2b9d6680}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function SearchIcon() {
  return (
    <IconContainer additionalClasses={["opacity-50"]}>
      <g id="search-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p3881f00}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function HamburgerIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add-icon">
          <path
            d={svgPaths.p2d400c78}
            fill="var(--fill-0, black)"
          />
        </g>
      </svg>
    </div>
  );
}

function CoinsIcon() {
  return (
    <IconContainer>
      <g id="coins-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p28d24380}
          fill="var(--fill-0, #FFAC3F)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function NotificationIcon() {
  return (
    <div className="relative shrink-0 size-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="notification-icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p1c760100}
            fill="var(--fill-0, #FFAC3F)"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

// Navigation Icons
function EpinIcon() {
  return (
    <IconContainer>
      <g id="epin-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p2304cc00}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function CDKeyIcon() {
  return (
    <IconContainer>
      <g id="cdkey-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p6998f00}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function GameMoneyIcon() {
  return (
    <IconContainer>
      <g id="gamemoney-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p1f158900}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function PvpServerIcon() {
  return (
    <IconContainer>
      <g id="pvpserver-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p41476e0}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

function PublishersIcon() {
  return (
    <IconContainer>
      <g id="publishers-icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p1e5e1e00}
          fill="var(--fill-0, white)"
          fillRule="evenodd"
        />
      </g>
    </IconContainer>
  );
}

// Main Components
function KSOLogo() {
  return (
    <div className="h-[34px] relative shrink-0 w-[104px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 34">
        <path
          clipRule="evenodd"
          d={svgPaths.p50eee80}
          fill="var(--fill-0, #D9D9D9)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function CategoriesDropdown() {
  return (
    <BorderedContainer additionalClasses={["h-full", "transition-all", "duration-200", "hover:bg-[rgba(255,255,255,0.15)]", "active:scale-[0.98]", "active:bg-[rgba(255,255,255,0.05)]", "cursor-pointer"]}>
      <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-4 py-2 relative">
        <div className="capitalize font-['Plus_Jakarta_Sans'] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Kategoriler</p>
        </div>
        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-[32px]">
          <div className="flex-none rotate-[90deg]">
            <ChevronIcon />
          </div>
        </div>
      </div>
    </BorderedContainer>
  );
}

function SearchBox({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (value: string) => void }) {
  return (
    <div className="relative shrink-0 w-full max-w-[650px]">
      <div className="bg-[rgba(255,255,255,0.1)] h-14 relative rounded-lg w-full">
        <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      </div>
      <div className="absolute inset-0 flex items-center">
        <div className="flex items-center gap-[5px] px-[12.5px] w-full">
          <SearchIcon />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="PUBG Game"
            className="flex-1 bg-transparent border-none outline-none font-['Plus_Jakarta_Sans'] font-medium text-[#9d9d9d] text-[16px] placeholder:text-[#9d9d9d] placeholder:lowercase"
          />
        </div>
      </div>
    </div>
  );
}

function ThemeContainer() {
  return (
    <div className="h-full relative rounded-lg shrink-0 w-14 transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] active:scale-[0.98] cursor-pointer">
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[8px] relative w-14">
          <div className="relative shrink-0 size-8">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="theme-icon" opacity="0.5">
                <path
                  clipRule="evenodd"
                  d={themeContainerSvg.p2f173fc0}
                  fill="var(--fill-0, white)"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddListingButton() {
  return (
    <div className="relative shrink-0 bg-[#ffac3f] rounded-lg transition-all duration-200 hover:bg-[#e6980f] active:scale-[0.98] active:bg-[#cc8500] cursor-pointer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative">
          <AddIcon />
          <div className="capitalize font-['Plus_Jakarta_Sans'] font-bold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">İlan Ekle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceDetails() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] px-1 py-0 relative text-left text-nowrap">
          <div className="font-['Plus_Jakarta_Sans'] font-medium opacity-50 relative shrink-0 text-[#ffffff] text-[14px]">
            <p className="block leading-[20px] text-nowrap whitespace-pre">Bakiye Yükle</p>
          </div>
          <div className="font-['Plus_Jakarta_Sans'] font-extrabold relative shrink-0 text-[#ffac3f] text-[16px]">
            <p className="block leading-[20px] text-nowrap whitespace-pre">321.00₺</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceContainer() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <CoinsIcon />
        <BalanceDetails />
      </div>
    </div>
  );
}

function UserAvatar() {
  return (
    <div
      className="[background-size:174.47%_174.47%] bg-[51.04%_9.14%] bg-no-repeat relative rounded-lg shrink-0 size-[34px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
      style={{ backgroundImage: `url('${imgRectangle1}')` }}
    >
      <div className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function UserActions() {
  return (
    <BorderedContainer>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative">
        <AddListingButton />
        <BalanceContainer />
        <NotificationIcon />
        <UserAvatar />
      </div>
    </BorderedContainer>
  );
}

// Navigation Menu Items
function NavMenuItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="relative shrink-0 transition-all duration-200 hover:opacity-75 active:scale-[0.98] cursor-pointer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative">
          {icon}
          <div className="font-['Plus_Jakarta_Sans'] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
            <p className="block leading-[24px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationMenu() {
  return (
    <div className="opacity-50 relative shrink-0 w-full max-w-[1440px] hidden lg:block">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <NavMenuItem icon={<EpinIcon />} text="EPIN" />
        <NavMenuItem icon={<CDKeyIcon />} text="CD-KEY" />
        <NavMenuItem icon={<GameMoneyIcon />} text="Oyun Parası" />
        <NavMenuItem icon={<PvpServerIcon />} text="PVP SERVER" />
        <NavMenuItem icon={<PublishersIcon />} text="Yayıncılar" />
      </div>
    </div>
  );
}

function MobileMenu({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 lg:hidden" 
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-[rgba(25,27,28,0.95)] backdrop-blur-[32px] z-50 lg:hidden transform transition-transform duration-300 ease-in-out border-l border-[rgba(255,255,255,0.1)]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[rgba(255,255,255,0.1)]">
            <div className="font-['Plus_Jakarta_Sans'] font-bold text-[#ffffff] text-[18px]">
              Menü
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-white hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-200"
            >
              <CloseIcon />
            </button>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 p-4">
            <div className="space-y-4">
              <div className="font-['Plus_Jakarta_Sans'] font-medium text-[#9d9d9d] text-[14px] mb-4">
                KATEGORİLER
              </div>
              <NavMenuItem icon={<EpinIcon />} text="EPIN" />
              <NavMenuItem icon={<CDKeyIcon />} text="CD-KEY" />
              <NavMenuItem icon={<GameMoneyIcon />} text="Oyun Parası" />
              <NavMenuItem icon={<PvpServerIcon />} text="PVP SERVER" />
              <NavMenuItem icon={<PublishersIcon />} text="Yayıncılar" />
            </div>
          </div>
          
          {/* User Actions */}
          <div className="p-4 border-t border-[rgba(255,255,255,0.1)]">
            <div className="space-y-3">
              <AddListingButton />
              <div className="flex items-center justify-between">
                <BalanceContainer />
                <div className="flex items-center gap-3">
                  <NotificationIcon />
                  <UserAvatar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeaderTop({ 
  searchQuery, 
  onSearchChange, 
  onMobileMenuOpen 
}: { 
  searchQuery: string; 
  onSearchChange: (value: string) => void; 
  onMobileMenuOpen: () => void; 
}) {
  return (
    <div className="h-14 relative shrink-0 w-full max-w-[1440px]">
      <div className="box-border content-stretch flex flex-row h-14 items-center justify-between p-0 relative w-full gap-4">
        <KSOLogo />
        
        {/* Desktop: Categories + Search + Theme */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          <CategoriesDropdown />
          <SearchBox searchQuery={searchQuery} onSearchChange={onSearchChange} />
          <ThemeContainer />
        </div>
        
        {/* Tablet: Search only */}
        <div className="hidden md:flex lg:hidden flex-1 justify-center max-w-md">
          <SearchBox searchQuery={searchQuery} onSearchChange={onSearchChange} />
        </div>
        
        {/* Mobile: Search in simplified form */}
        <div className="flex md:hidden flex-1 justify-center max-w-xs">
          <SearchBox searchQuery={searchQuery} onSearchChange={onSearchChange} />
        </div>
        
        {/* Desktop: User Actions */}
        <div className="hidden lg:block">
          <UserActions />
        </div>
        
        {/* Mobile: Hamburger Menu */}
        <button 
          onClick={onMobileMenuOpen}
          className="lg:hidden p-2 text-white hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all duration-200"
        >
          <HamburgerIcon />
        </button>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="relative shrink-0 w-full max-w-[1440px]">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-1 relative">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
}

interface KSOHeaderProps {
  className?: string;
}

export default function KSOHeader({ className = "" }: KSOHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    // TODO: Implement search functionality
    console.log('Search query:', value);
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed top-[58px] left-0 w-full z-40 ${className}`}
        style={{
          background: 'rgba(25, 27, 28, 0.8)',
          backdropFilter: 'blur(32px)'
        }}
      >
        <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center px-4 py-4 relative size-full w-full max-w-[1440px] mx-auto">
            <HeaderTop 
              searchQuery={searchQuery} 
              onSearchChange={handleSearchChange}
              onMobileMenuOpen={handleMobileMenuOpen}
            />
            <HeaderNavigation />
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleMobileMenuClose} 
      />
    </>
  );
}