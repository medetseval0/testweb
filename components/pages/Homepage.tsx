export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Homepage</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Ana Sayfa</h2>
          <p className="text-gray-300 mb-4">
            Bu ana sayfa içeriğidir. Burada site ana içeriği yer alacak.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#333333] p-4 rounded">
              <h3 className="mb-2">Öne Çıkan Ürünler</h3>
              <p className="text-sm text-gray-400">En popüler ürünler</p>
            </div>
            <div className="bg-[#333333] p-4 rounded">
              <h3 className="mb-2">Kategoriler</h3>
              <p className="text-sm text-gray-400">Ürün kategorileri</p>
            </div>
            <div className="bg-[#333333] p-4 rounded">
              <h3 className="mb-2">Kampanyalar</h3>
              <p className="text-sm text-gray-400">Aktif kampanyalar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}