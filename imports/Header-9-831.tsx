import svgPaths from "./svg-miy6nsog6o";
import clsx from "clsx";
import imgRectangle1 from "figma:asset/a8d10ad7a6829b4994d24c2b739281d7fd47b8bd.png";
type BackgroundImage85Props = {
  additionalClassNames?: string[];
};

function BackgroundImage85({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage85Props>) {
  return (
    <div className={clsx("relative rounded-lg shrink-0", additionalClassNames)}>
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage55({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-8">
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
type BackgroundImage55Props = {
  additionalClassNames?: string[];
};
type BackgroundImage40Props = {
  additionalClassNames?: string[];
};

function BackgroundImage40({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage40Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function PublishersmenuitemBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage40>
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative">
        {children}
      </div>
    </BackgroundImage40>
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
    <BackgroundImage55 additionalClassNames={additionalClassNames}>
      <g id="add-listing-instance">{children}</g>
    </BackgroundImage55>
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
    <BackgroundImage85 additionalClassNames={["h-full"]}>
      <div className="box-border content-stretch flex flex-row gap-1 h-full items-center justify-start px-4 py-2 relative">
        <div className="capitalize font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Kategoriler</p>
        </div>
        <div className="flex h-[32px] items-center justify-center relative shrink-0 w-[32px]">
          <div className="flex-none rotate-[90deg]">
            <AddListingInstance />
          </div>
        </div>
      </div>
    </BackgroundImage85>
  );
}

function SearchGroup() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="search-group"
    >
      <div
        className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.1)] h-14 ml-0 mt-0 relative rounded-lg w-[650px]"
        data-name="search-background"
      >
        <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      </div>
      <BackgroundImage55
        additionalClassNames={["[grid-area:1_/_1]", "ml-[12.5px]", "mt-2.5"]}
      >
        {children}
      </BackgroundImage55>
      <div className="[grid-area:1_/_1] font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium lowercase ml-[49.5px] mt-3 relative text-[#9d9d9d] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">PUBG Game</p>
      </div>
    </div>
  );
}

function ThemeContainer() {
  return (
    <div
      className="h-full relative rounded-lg shrink-0 w-14"
      data-name="theme-container"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[8px] relative w-14">
          <BackgroundImage55 additionalClassNames={["shrink-0"]}>
            {children}
          </BackgroundImage55>
        </div>
      </div>
    </div>
  );
}

function AddListingInstance2() {
  return (
    <div className="relative shrink-0 size-6" data-name="add-listing-instance">
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
    <BackgroundImage40 additionalClassNames={["bg-[#ffac3f]", "rounded-lg"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative">
        <AddListingInstance2 />
        <div className="capitalize font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">İlan Ekle</p>
        </div>
      </div>
    </BackgroundImage40>
  );
}

function AddListingInstance3() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p28d24380}
        fill="var(--fill-0, #FFAC3F)"
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
          <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium opacity-50 relative shrink-0 text-[#ffffff] text-[14px]">
            <p className="block leading-[20px] text-nowrap whitespace-pre">
              Bakiye Yükle
            </p>
          </div>
          <div className="font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold relative shrink-0 text-[#ffac3f] text-[16px]">
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
    <div className="relative shrink-0" data-name="balance-container">
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
      className="relative shrink-0 size-[26px]"
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
            fill="var(--fill-0, #FFAC3F)"
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
    <BackgroundImage85>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative">
        <AddListingButton />
        <BalanceContainer />
        <AddListingInstance4 />
        <div
          className="[background-size:174.47%_174.47%] bg-[51.04%_9.14%] bg-no-repeat relative rounded-lg shrink-0 size-[34px]"
          style={{ backgroundImage: `url('${imgRectangle1}')` }}
        >
          <div className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-lg" />
        </div>
      </div>
    </BackgroundImage85>
  );
}

function HeaderContainer() {
  return (
    <div
      className="h-14 relative shrink-0 w-[1440px]"
      data-name="header-container"
    >
      <div className="box-border content-stretch flex flex-row h-14 items-center justify-between p-0 relative w-[1440px]">
        <div className="h-[34px] relative shrink-0 w-[104px]" data-name="logo">
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

function AddListingInstance5() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p2304cc00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function PublishersMenuItem() {
  return (
    <PublishersmenuitemBackgroundImage>
      <AddListingInstance5 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[24px] whitespace-pre">EPIN</p>
      </div>
    </PublishersmenuitemBackgroundImage>
  );
}

function AddListingInstance6() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p6998f00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function PublishersMenuItem1() {
  return (
    <PublishersmenuitemBackgroundImage>
      <AddListingInstance6 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[24px] whitespace-pre">CD-KEY</p>
      </div>
    </PublishersmenuitemBackgroundImage>
  );
}

function AddListingInstance7() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p1f158900}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function PublishersMenuItem2() {
  return (
    <PublishersmenuitemBackgroundImage>
      <AddListingInstance7 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[24px] whitespace-pre">Oyun Parası</p>
      </div>
    </PublishersmenuitemBackgroundImage>
  );
}

function AddListingInstance8() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p41476e0}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function PublishersMenuItem3() {
  return (
    <PublishersmenuitemBackgroundImage>
      <AddListingInstance8 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[24px] whitespace-pre">PVP SERVER</p>
      </div>
    </PublishersmenuitemBackgroundImage>
  );
}

function AddListingInstance9() {
  return (
    <AddlistinginstanceBackgroundImage additionalClassNames={["shrink-0"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p1e5e1e00}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </AddlistinginstanceBackgroundImage>
  );
}

function PublishersMenuItem4() {
  return (
    <PublishersmenuitemBackgroundImage>
      <AddListingInstance9 />
      <div className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap uppercase">
        <p className="block leading-[24px] whitespace-pre">Yayıncılar</p>
      </div>
    </PublishersmenuitemBackgroundImage>
  );
}

function NavigationMenuContainer() {
  return (
    <div
      className="opacity-50 relative shrink-0 w-[1440px]"
      data-name="navigation-menu-container"
    >
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-[1440px]">
        <PublishersMenuItem />
        <PublishersMenuItem1 />
        <PublishersMenuItem2 />
        <PublishersMenuItem3 />
        <PublishersMenuItem4 />
      </div>
    </div>
  );
}

function HeaderCategory() {
  return (
    <div className="relative shrink-0" data-name="header-category">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-1 relative">
          <NavigationMenuContainer />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div
      className="backdrop-blur-[32px] backdrop-filter bg-[rgba(25,27,28,0.8)] relative size-full"
      data-name="Header"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center px-0 py-4 relative size-full">
          <HeaderContainer />
          <HeaderCategory />
        </div>
      </div>
    </div>
  );
}