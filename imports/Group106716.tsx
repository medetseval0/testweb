import svgPaths from "./svg-1x7owbf0i6";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      className={clsx(
        "bg-[#51bf40] relative rounded-[3600px]",
        additionalClassNames,
      )}
    >
      <div className="absolute border-[0.734722px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[3600px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Addadvertbuttoncomponentset({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames={["shrink-0", "w-[120.494px]"]}>
      <div className="box-border content-stretch flex flex-row gap-[5.878px] items-center justify-center px-[5.878px] py-2 relative w-[120.494px]">
        {children}
      </div>
    </Wrapper1>
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
    <div className={clsx("relative shrink-0", additionalClassNames)}>
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

function Addicon() {
  return (
    <Wrapper additionalClassNames={["h-[17.565px]", "w-[17.633px]"]}>
      <path
        d={svgPaths.p24acfa80}
        fill="var(--fill-0, white)"
        id="FLORA-Arrow Icon Set-3c5ac4d8 1 (Traced)_1_1"
      />
    </Wrapper>
  );
}

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
            fill="url(#paint0_linear_4_70)"
            fillRule="evenodd"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.pae54500}
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
    <div className="absolute left-[19px] top-[13px]">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Frame106942 />
        <Frame106943 />
      </div>
    </div>
  );
}

function HeadFix() {
  return (
    <div className="absolute contents left-0 top-0" data-name="HeadFix">
      <div className="absolute bg-[#ffffff] h-14 left-0 top-0 w-[1920px]">
        <div className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      <Frame106944 />
    </div>
  );
}

function AddAdvertButtonComponentSet() {
  return (
    <Addadvertbuttoncomponentset>
      <Addicon />
      <div className="capitalize font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#ffffff] text-[13.225px] text-left text-nowrap">
        <p className="block leading-[17.6333px] whitespace-pre">Sayfa Paneli</p>
      </div>
    </Addadvertbuttoncomponentset>
  );
}

function AddIcon1() {
  return (
    <Wrapper additionalClassNames={["size-[17.633px]"]}>
      <path
        clipRule="evenodd"
        d={svgPaths.p147a9400}
        fill="var(--fill-0, white)"
        fillRule="evenodd"
        id="Vector"
      />
    </Wrapper>
  );
}

function AddAdvertButtonComponentSet1() {
  return (
    <Addadvertbuttoncomponentset>
      <AddIcon1 />
      <div className="capitalize font-['Plus_Jakarta_Sans:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#ffffff] text-[13.225px] text-left text-nowrap">
        <p className="block leading-[17.6333px] whitespace-pre">All Project</p>
      </div>
    </Addadvertbuttoncomponentset>
  );
}

function ShowHide() {
  return (
    <Wrapper1 additionalClassNames={["w-[34px]"]}>
      <div className="box-border content-stretch flex flex-row gap-[5.878px] items-center justify-center px-[5.878px] py-2 relative w-[34px]">
        <Addicon />
      </div>
    </Wrapper1>
  );
}

function Frame106945() {
  return (
    <div className="absolute left-[1630px] top-[9px]">
      <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative">
        <AddAdvertButtonComponentSet />
        <AddAdvertButtonComponentSet1 />
        <div className="flex h-[34px] items-center justify-center relative shrink-0 w-[34px]">
          <div className="flex-none rotate-[90deg]">
            <ShowHide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group106716() {
  return (
    <div className="relative size-full">
      <HeadFix />
      <Frame106945 />
    </div>
  );
}