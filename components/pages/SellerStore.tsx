export default function SellerStore() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Seller Store</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-[#333333] rounded-full flex items-center justify-center mr-6">
              <span className="text-xl">🏪</span>
            </div>
            <div>
              <h2 className="mb-2">Mağaza Adı</h2>
              <div className="flex items-center mb-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-sm text-gray-400">(4.8 - 2,450 değerlendirme)</span>
              </div>
              <p className="text-sm text-gray-400">Üyelik: 3 yıl | 15,680 ürün</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#333333] p-4 rounded text-center">
              <h3 className="mb-1">Toplam Satış</h3>
              <p className="text-xl font-bold text-[#81a743]">45,230</p>
            </div>
            <div className="bg-[#333333] p-4 rounded text-center">
              <h3 className="mb-1">Bu Ay</h3>
              <p className="text-xl font-bold text-[#81a743]">1,234</p>
            </div>
            <div className="bg-[#333333] p-4 rounded text-center">
              <h3 className="mb-1">Müşteri Puanı</h3>
              <p className="text-xl font-bold text-[#81a743]">4.8/5</p>
            </div>
            <div className="bg-[#333333] p-4 rounded text-center">
              <h3 className="mb-1">Teslimat Süresi</h3>
              <p className="text-xl font-bold text-[#81a743]">1-2 gün</p>
            </div>
          </div>

          <h3 className="mb-4">Mağaza Ürünleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[#333333] rounded overflow-hidden hover:bg-[#444444] transition-colors cursor-pointer">
                <div className="aspect-square bg-[#444444] flex items-center justify-center">
                  <span className="text-gray-500">Ürün {i}</span>
                </div>
                <div className="p-3">
                  <h4 className="mb-1 text-sm">Mağaza Ürünü {i}</h4>
                  <p className="font-bold text-sm">₺{199 + i * 25}.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}