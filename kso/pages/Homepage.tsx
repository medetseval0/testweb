import React from 'react';

interface KSOHomepageProps {
  onCategoryClick: (categoryId: string) => void;
  onSearchSubmit: (query: string) => void;
}

export default function KSOHomepage({ onCategoryClick, onSearchSubmit }: KSOHomepageProps) {
  return (
    <div className="kso-app">
      {/* Main Content - no padding needed since KSOHeader is handled by KSOApp */}
      <main>
        <div className="w-full max-w-[1440px] mx-auto">
          
          {/* Slider Section */}
          <section className="bg-[#ffd86b] h-[662px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#e6c260] active:scale-[0.98] active:bg-[#ccae55] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              Slider
            </h2>
          </section>

          {/* Re-Order Section */}
          <section className="bg-[#84b3ff] h-[343px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#76a8e6] active:scale-[0.98] active:bg-[#689dcc] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              Re-Order
            </h2>
          </section>

          {/* Popular Category Section */}
          <section className="bg-[#f6b4ff] h-[1050px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#dda2e6] active:scale-[0.98] active:bg-[#c490cc] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none text-center">
              Popular Category
            </h2>
          </section>

          {/* Vitrin Section */}
          <section className="bg-[#ff9ace] h-[1202px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#e68bb9] active:scale-[0.98] active:bg-[#cc7ca4] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              Vitrin
            </h2>
          </section>

          {/* Top Seller Section */}
          <section className="bg-[#ffc400] h-[788px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#e6b100] active:scale-[0.98] active:bg-[#cc9e00] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              TOP SELLER
            </h2>
          </section>

          {/* Banner Section */}
          <section className="bg-[#596fff] h-[286px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#5063e6] active:scale-[0.98] active:bg-[#4757cc] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              BANNER
            </h2>
          </section>

          {/* Publisher Section */}
          <section className="bg-[#d92ee5] h-[432px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#c329ce] active:scale-[0.98] active:bg-[#ad24b7] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              PUBLISHER
            </h2>
          </section>

          {/* Sponsor Section */}
          <section className="bg-[#ffbf00] h-[605px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#e6ac00] active:scale-[0.98] active:bg-[#cc9900] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              SPONSOR
            </h2>
          </section>

          {/* Blog Section */}
          <section className="bg-[#ffffff] h-[605px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#f5f5f5] active:scale-[0.98] active:bg-[#e6e6e6] cursor-pointer border-t border-gray-200">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              BLOG
            </h2>
          </section>

          {/* Footer Section */}
          <section className="bg-[#898989] h-[605px] flex items-center justify-center px-4 transition-all duration-200 hover:bg-[#7a7a7a] active:scale-[0.98] active:bg-[#6b6b6b] cursor-pointer">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] text-black leading-none">
              FOOTER
            </h2>
          </section>

        </div>
      </main>
    </div>
  );
}