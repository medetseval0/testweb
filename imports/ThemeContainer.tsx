import svgPaths from "./svg-s868dpzqez";

function AddListingInstance() {
  return (
    <div className="relative shrink-0 size-8" data-name="add-listing-instance">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="add-listing-instance" opacity="0.5">
          <path
            clipRule="evenodd"
            d={svgPaths.p2f173fc0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export default function ThemeContainer() {
  return (
    <div className="relative rounded-lg size-full" data-name="theme-container">
      <div className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[8px] relative size-full">
          <AddListingInstance />
        </div>
      </div>
    </div>
  );
}