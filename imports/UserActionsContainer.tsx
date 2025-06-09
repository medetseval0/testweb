import svgPaths from "./svg-pixqfygz3e";
import clsx from "clsx";
import imgRectangle1 from "figma:asset/a8d10ad7a6829b4994d24c2b739281d7fd47b8bd.png";
type BackgroundImage15Props = {
  additionalClassNames?: string[];
};

function BackgroundImage15({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function AddListingInstance() {
  return (
    <BackgroundImage15 additionalClassNames={["size-6"]}>
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
    </BackgroundImage15>
  );
}

function AddListingButton() {
  return (
    <BackgroundImage15 additionalClassNames={["bg-[#ffac3f]", "rounded-lg"]}>
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1 relative">
          <AddListingInstance />
          <div className="capitalize font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">İlan Ekle</p>
          </div>
        </div>
      </div>
    </BackgroundImage15>
  );
}

function AddListingInstance1() {
  return (
    <BackgroundImage15 additionalClassNames={["size-8"]}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="add-listing-instance">
          <path
            clipRule="evenodd"
            d={svgPaths.p28d24380}
            fill="var(--fill-0, #FFAC3F)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </BackgroundImage15>
  );
}

function BalanceDetails() {
  return (
    <BackgroundImage15>
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
    </BackgroundImage15>
  );
}

function BalanceContainer() {
  return (
    <BackgroundImage15>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <AddListingInstance1 />
        <BalanceDetails />
      </div>
    </BackgroundImage15>
  );
}

function AddListingInstance2() {
  return (
    <BackgroundImage15 additionalClassNames={["size-[26px]"]}>
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
    </BackgroundImage15>
  );
}

export default function UserActionsContainer() {
  return (
    <div
      className="relative rounded-lg size-full"
      data-name="user-actions-container"
    >
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative size-full">
          <AddListingButton />
          <BalanceContainer />
          <AddListingInstance2 />
          <div
            className="[background-size:174.47%_174.47%] bg-[51.04%_9.14%] bg-no-repeat relative rounded-lg shrink-0 size-[34px]"
            style={{ backgroundImage: `url('${imgRectangle1}')` }}
          >
            <div className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}