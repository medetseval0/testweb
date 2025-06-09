export default function Category() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Category</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Kategori Sayfası</h2>
          <p className="text-gray-300 mb-6">
            Ürün kategorilerini görüntüleyebileceğiniz sayfa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Elektronik', 'Giyim', 'Ev & Bahçe', 'Spor', 'Kitap', 'Oyun', 'Müzik', 'Film'].map((category) => (
              <div key={category} className="bg-[#333333] p-4 rounded text-center hover:bg-[#444444] transition-colors cursor-pointer">
                <h3>{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}