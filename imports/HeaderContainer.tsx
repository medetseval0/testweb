import svgPaths from "./svg-b5k93u7ph4";
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
    <div className={clsx("relative rounded-lg shrink-0", additionalClassNames)}>
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage27({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage27Props = {
  additionalClassNames?: string[];
};
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
        className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.1)] h-14 ml-0 mt-0 relative rounded-lg w-[650px]"
        data-name="search-background"
      >
        <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      </div>
      <BackgroundImage27
        additionalClassNames={["[grid-area:1_/_1]", "ml-[12.5px]", "mt-2.5"]}
      >
        {children}
      </BackgroundImage27>
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
          <BackgroundImage27 additionalClassNames={["shrink-0"]}>
            {children}
          </BackgroundImage27>
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
    <div
      className="bg-[#ffac3f] relative rounded-lg shrink-0"
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
    <BackgroundImage57>
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
    </BackgroundImage57>
  );
}

export default function HeaderContainer() {
  return (
    <div className="relative size-full" data-name="header-container">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative size-full">
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