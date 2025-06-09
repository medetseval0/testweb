export default function AllCategory() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">All Categories</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Tüm Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Elektronik', count: 1250, subcats: ['Telefon', 'Bilgisayar', 'TV'] },
              { name: 'Giyim', count: 980, subcats: ['Erkek', 'Kadın', 'Çocuk'] },
              { name: 'Ev & Bahçe', count: 750, subcats: ['Mobilya', 'Dekorasyon', 'Bahçe'] },
              { name: 'Spor', count: 420, subcats: ['Fitness', 'Outdoor', 'Su Sporları'] },
              { name: 'Kitap', count: 2100, subcats: ['Roman', 'Eğitim', 'Çocuk'] },
              { name: 'Otomotiv', count: 680, subcats: ['Yedek Parça', 'Aksesuar', 'Lastik'] }
            ].map((category) => (
              <div key={category.name} className="bg-[#333333] p-4 rounded">
                <h3 className="mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{category.count} ürün</p>
                <div className="space-y-1">
                  {category.subcats.map((sub) => (
                    <div key={sub} className="text-xs text-gray-500 hover:text-gray-300 cursor-pointer">
                      • {sub}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}