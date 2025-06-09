export default function PopularStore() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Popular Stores</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Popüler Mağazalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'TechStore', rating: 4.8, products: 1250, badge: 'Verified' },
              { name: 'FashionHub', rating: 4.6, products: 980, badge: 'Premium' },
              { name: 'HomeDecor', rating: 4.7, products: 750, badge: 'Trending' },
              { name: 'SportWorld', rating: 4.5, products: 420, badge: 'New' },
              { name: 'BookCorner', rating: 4.9, products: 2100, badge: 'Bestseller' },
              { name: 'AutoParts', rating: 4.4, products: 680, badge: 'Verified' }
            ].map((store) => (
              <div key={store.name} className="bg-[#333333] p-4 rounded hover:bg-[#444444] transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h3>{store.name}</h3>
                  <span className="bg-[#81a743] text-xs px-2 py-1 rounded">{store.badge}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm">{store.rating}</span>
                </div>
                <p className="text-sm text-gray-400">{store.products} ürün</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}