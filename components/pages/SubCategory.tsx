export default function SubCategory() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">SubCategory</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Alt Kategori Sayfası</h2>
          <nav className="mb-6">
            <span className="text-gray-400">Ana Kategori</span>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Alt Kategori</span>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Alt Kategori 1', 'Alt Kategori 2', 'Alt Kategori 3', 'Alt Kategori 4', 'Alt Kategori 5', 'Alt Kategori 6'].map((subcat) => (
              <div key={subcat} className="bg-[#333333] p-4 rounded hover:bg-[#444444] transition-colors cursor-pointer">
                <h3 className="mb-2">{subcat}</h3>
                <p className="text-sm text-gray-400">25 ürün</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}