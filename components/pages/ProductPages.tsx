export function ProductPage1() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Product Page 1</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#222222] rounded-lg p-6">
            <div className="aspect-square bg-[#333333] rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">Ürün Görseli</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#333333] rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">{i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#222222] rounded-lg p-6">
            <h2 className="mb-4">Premium Ürün Adı</h2>
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-2 text-sm text-gray-400">(128 değerlendirme)</span>
            </div>
            <div className="mb-6">
              <span className="text-2xl font-bold">₺1,299.99</span>
              <span className="ml-2 text-lg text-gray-400 line-through">₺1,599.99</span>
            </div>
            <p className="text-gray-300 mb-6">
              Bu premium ürün açıklaması yer alır. Ürünün özelliklerini ve avantajlarını anlatan detaylı bilgi.
            </p>
            <button className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors mb-4">
              Sepete Ekle
            </button>
            <button className="w-full border border-gray-600 py-3 rounded hover:bg-[#333333] transition-colors">
              Favorilere Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPage2() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Product Page 2</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Ürün Listesi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-[#333333] rounded overflow-hidden hover:bg-[#444444] transition-colors cursor-pointer">
                <div className="aspect-square bg-[#444444] flex items-center justify-center">
                  <span className="text-gray-500">Ürün {i}</span>
                </div>
                <div className="p-4">
                  <h3 className="mb-2">Ürün Adı {i}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-1 text-xs text-gray-400">(45)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">₺{299 + i * 50}.99</span>
                    <button className="bg-[#81a743] px-3 py-1 rounded text-sm hover:bg-[#6d8c39] transition-colors">
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPage3() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Product Page 3</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Ürün Karşılaştırma</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-4">Özellik</th>
                  <th className="text-center p-4">Ürün A</th>
                  <th className="text-center p-4">Ürün B</th>
                  <th className="text-center p-4">Ürün C</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Fiyat</td>
                  <td className="text-center p-4">₺999</td>
                  <td className="text-center p-4">₺1,299</td>
                  <td className="text-center p-4">₺1,599</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Değerlendirme</td>
                  <td className="text-center p-4">4.2⭐</td>
                  <td className="text-center p-4">4.5⭐</td>
                  <td className="text-center p-4">4.8⭐</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Stok</td>
                  <td className="text-center p-4 text-green-400">Var</td>
                  <td className="text-center p-4 text-green-400">Var</td>
                  <td className="text-center p-4 text-red-400">Tükendi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}