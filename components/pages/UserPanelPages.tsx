export function YourArea() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Your Area</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Senin Alanın</h2>
          <p className="text-gray-300 mb-6">
            Kişisel kontrol paneliniz. Tüm aktivitelerinizi ve özel içeriklerinizi buradan yönetebilirsiniz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#333333] p-4 rounded-lg">
              <h3 className="mb-3 flex items-center">
                <span className="mr-2">📊</span>
                Aktivite Özeti
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Toplam Sipariş:</span>
                  <span>47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Aktif Satış:</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mesaj:</span>
                  <span>3 yeni</span>
                </div>
              </div>
            </div>

            <div className="bg-[#333333] p-4 rounded-lg">
              <h3 className="mb-3 flex items-center">
                <span className="mr-2">⭐</span>
                Başarılar
              </h3>
              <div className="space-y-2">
                <div className="bg-[#444444] p-2 rounded text-sm">
                  <span className="text-[#81a743]">✓</span> İlk Satış
                </div>
                <div className="bg-[#444444] p-2 rounded text-sm">
                  <span className="text-[#81a743]">✓</span> 10 Sipariş
                </div>
                <div className="bg-[#444444] p-2 rounded text-sm opacity-50">
                  <span className="text-gray-500">○</span> 100 Sipariş
                </div>
              </div>
            </div>

            <div className="bg-[#333333] p-4 rounded-lg">
              <h3 className="mb-3 flex items-center">
                <span className="mr-2">🎯</span>
                Hızlı Eylemler
              </h3>
              <div className="space-y-2">
                <button className="w-full bg-[#81a743] py-2 rounded text-sm hover:bg-[#6d8c39] transition-colors">
                  Yeni Ürün Ekle
                </button>
                <button className="w-full bg-[#444444] py-2 rounded text-sm hover:bg-[#555555] transition-colors">
                  Siparişleri Görüntüle
                </button>
                <button className="w-full bg-[#444444] py-2 rounded text-sm hover:bg-[#555555] transition-colors">
                  Mesajları Oku
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PurchaseCenter() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Purchase Center</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Satın Alma Merkezi</h2>
          <p className="text-gray-300 mb-6">
            Tüm satın alma işlemlerinizi takip edin ve yönetin.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="mb-4">Son Siparişler</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((order) => (
                  <div key={order} className="bg-[#333333] p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#444444] rounded flex items-center justify-center">
                        📦
                      </div>
                      <div>
                        <h4 className="mb-1">Sipariş #{12340 + order}</h4>
                        <p className="text-sm text-gray-400">3 ürün • ₺{299 * order}.99</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-[#81a743] px-2 py-1 rounded text-xs">Teslim Edildi</span>
                      <p className="text-xs text-gray-400 mt-1">2 gün önce</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Sepet Özeti</h3>
              <div className="bg-[#333333] p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>2 ürün</span>
                    <span>₺599.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kargo</span>
                    <span>₺29.99</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <div className="flex justify-between font-medium">
                      <span>Toplam</span>
                      <span>₺629.97</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors">
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SalesCenter() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Sales Center</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Satış Merkezi</h2>
          <p className="text-gray-300 mb-6">
            Satış performansınızı takip edin ve ürünlerinizi yönetin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#333333] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#81a743] mb-1">₺15,420</div>
              <div className="text-sm text-gray-400">Bu Ay Gelir</div>
            </div>
            <div className="bg-[#333333] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#81a743] mb-1">47</div>
              <div className="text-sm text-gray-400">Aktif Ürün</div>
            </div>
            <div className="bg-[#333333] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#81a743] mb-1">123</div>
              <div className="text-sm text-gray-400">Toplam Satış</div>
            </div>
            <div className="bg-[#333333] p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-[#81a743] mb-1">4.8</div>
              <div className="text-sm text-gray-400">Ortalama Puan</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-4">En Çok Satan Ürünler</h3>
              <div className="space-y-3">
                {['Premium Kulaklık', 'Gaming Mouse', 'Mekanik Klavye'].map((product, i) => (
                  <div key={i} className="bg-[#333333] p-3 rounded flex justify-between items-center">
                    <span>{product}</span>
                    <span className="text-[#81a743]">{15 - i * 3} satış</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Son Siparişler</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="bg-[#333333] p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">#SP{12340 + order}</span>
                      <span className="text-[#81a743]">₺{150 + order * 50}</span>
                    </div>
                    <p className="text-sm text-gray-400">Kullanıcı{order} • 2 ürün</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatCenter() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Chat Center</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Sohbet Merkezi</h2>
          <p className="text-gray-300 mb-6">
            Müşterilerinizle ve diğer satıcılarla iletişim kurun.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="mb-4">Aktif Sohbetler</h3>
              <div className="space-y-3">
                {[
                  { name: 'Ahmet K.', message: 'Ürün hakkında soru...', time: '2 dk', unread: 2 },
                  { name: 'Merve S.', message: 'Kargo durumu?', time: '1 saat', unread: 0 },
                  { name: 'Destek', message: 'Yardıma ihtiyacınız var mı?', time: '3 saat', unread: 1 }
                ].map((chat, i) => (
                  <div key={i} className="bg-[#333333] p-3 rounded hover:bg-[#444444] cursor-pointer transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{chat.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{chat.time}</span>
                        {chat.unread > 0 && (
                          <span className="bg-[#81a743] text-xs px-2 py-1 rounded-full">{chat.unread}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{chat.message}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-[#333333] rounded-lg h-96 flex flex-col">
                <div className="p-4 border-b border-gray-600">
                  <h4>Ahmet K.</h4>
                  <p className="text-sm text-gray-400">Son görülme: 5 dakika önce</p>
                </div>
                
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  <div className="bg-[#444444] p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Merhaba, ürün hakkında bilgi alabilir miyim?</p>
                    <span className="text-xs text-gray-400">14:32</span>
                  </div>
                  <div className="bg-[#81a743] p-3 rounded-lg max-w-xs ml-auto">
                    <p className="text-sm">Tabii ki! Hangi ürün hakkında bilgi istiyorsunuz?</p>
                    <span className="text-xs text-gray-200">14:35</span>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-600">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Mesajınızı yazın..."
                      className="flex-1 bg-[#444444] p-2 rounded border-0 outline-none"
                    />
                    <button className="bg-[#81a743] px-4 py-2 rounded hover:bg-[#6d8c39] transition-colors">
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BroadcastingCenter() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Broadcasting Center</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Yayıncı Merkezi</h2>
          <p className="text-gray-300 mb-6">
            Canlı yayınlarınızı yönetin ve izleyicilerinizle etkileşim kurun.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-4">Yayın Kontrolleri</h3>
              <div className="bg-[#333333] p-6 rounded-lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-[#444444] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📹</span>
                  </div>
                  <h4 className="mb-2">Yayın Durumu</h4>
                  <span className="bg-red-500 px-3 py-1 rounded text-sm">Çevrimdışı</span>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors">
                    Yayını Başlat
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-[#444444] py-2 rounded hover:bg-[#555555] transition-colors">
                      Kamera
                    </button>
                    <button className="bg-[#444444] py-2 rounded hover:bg-[#555555] transition-colors">
                      Mikrofon
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Yayın İstatistikleri</h3>
              <div className="space-y-4">
                <div className="bg-[#333333] p-4 rounded-lg">
                  <h4 className="mb-3">Bu Hafta</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#81a743]">12</div>
                      <div className="text-sm text-gray-400">Toplam Yayın</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#81a743]">45h</div>
                      <div className="text-sm text-gray-400">Toplam Süre</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#333333] p-4 rounded-lg">
                  <h4 className="mb-3">İzleyici Analizi</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Ortalama İzleyici:</span>
                      <span>127</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Maksimum İzleyici:</span>
                      <span>234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Toplam Takipçi:</span>
                      <span>1,456</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GamingCenter() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Gaming Center</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Oyuncu Merkezi</h2>
          <p className="text-gray-300 mb-6">
            Oyun aktivitelerinizi takip edin ve diğer oyuncularla etkileşim kurun.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="mb-4">Aktif Oyunlar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Valorant', status: 'Çevrimiçi', rank: 'Platin 2', time: '127h' },
                  { name: 'CS2', status: 'Çevrimdışı', rank: 'Legendary Eagle', time: '89h' },
                  { name: 'League of Legends', status: 'Oyunda', rank: 'Gold 1', time: '203h' },
                  { name: 'Apex Legends', status: 'Çevrimdışı', rank: 'Diamond 4', time: '67h' }
                ].map((game, i) => (
                  <div key={i} className="bg-[#333333] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4>{game.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        game.status === 'Çevrimiçi' ? 'bg-green-600' :
                        game.status === 'Oyunda' ? 'bg-blue-600' : 'bg-gray-600'
                      }`}>
                        {game.status}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rank:</span>
                        <span>{game.rank}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Toplam Süre:</span>
                        <span>{game.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Oyuncu Profili</h3>
              <div className="bg-[#333333] p-4 rounded-lg mb-4">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#81a743] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl">🎮</span>
                  </div>
                  <h4>ProGamer123</h4>
                  <p className="text-sm text-gray-400">Level 47</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Toplam Kazanç:</span>
                    <span>₺2,340</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Turnuva Galibiyeti:</span>
                    <span>23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Toplam Maç:</span>
                    <span>1,456</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#333333] p-4 rounded-lg">
                <h4 className="mb-3">Yaklaşan Turnuvalar</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-[#444444] rounded">
                    <div className="font-medium">Valorant Cup</div>
                    <div className="text-gray-400">15 Ocak - ₺500 ödül</div>
                  </div>
                  <div className="p-2 bg-[#444444] rounded">
                    <div className="font-medium">CS2 League</div>
                    <div className="text-gray-400">22 Ocak - ₺1,000 ödül</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccountSettings() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">Account Settings</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Hesap Ayarları</h2>
          <p className="text-gray-300 mb-6">
            Hesap bilgilerinizi ve tercihlerinizi yönetin.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">Kişisel Bilgiler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Ad Soyad</label>
                  <input 
                    type="text" 
                    defaultValue="Ahmet Yılmaz"
                    className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block mb-2">E-posta</label>
                  <input 
                    type="email" 
                    defaultValue="ahmet@example.com"
                    className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    defaultValue="+90 555 123 45 67"
                    className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block mb-2">Doğum Tarihi</label>
                  <input 
                    type="date" 
                    defaultValue="1990-01-01"
                    className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4">Güvenlik</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Mevcut Şifre</label>
                  <input 
                    type="password" 
                    className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Yeni Şifre</label>
                    <input 
                      type="password" 
                      className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Şifre Tekrar</label>
                    <input 
                      type="password" 
                      className="w-full p-3 bg-[#333333] rounded border border-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4">Bildirim Tercihleri</h3>
              <div className="space-y-3">
                {[
                  'E-posta bildirimleri',
                  'SMS bildirimleri', 
                  'Push bildirimleri',
                  'Pazarlama e-postaları',
                  'Sipariş durumu bildirimleri'
                ].map((item, i) => (
                  <label key={i} className="flex items-center">
                    <input type="checkbox" defaultChecked={i < 3} className="mr-3" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#81a743] px-6 py-3 rounded hover:bg-[#6d8c39] transition-colors">
                Değişiklikleri Kaydet
              </button>
              <button className="bg-[#333333] px-6 py-3 rounded hover:bg-[#444444] transition-colors">
                İptal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MyStore() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">My Store</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Mağazam</h2>
          <p className="text-gray-300 mb-6">
            Kendi mağazanızı yönetin ve ürünlerinizi düzenleyin.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h3>Ürünlerim</h3>
                <button className="bg-[#81a743] px-4 py-2 rounded hover:bg-[#6d8c39] transition-colors">
                  Yeni Ürün Ekle
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((product) => (
                  <div key={product} className="bg-[#333333] rounded-lg overflow-hidden">
                    <div className="aspect-square bg-[#444444] flex items-center justify-center">
                      <span className="text-gray-500">Ürün {product}</span>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-2">Ürün Adı {product}</h4>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold">₺{199 + product * 50}.99</span>
                        <span className="text-sm text-gray-400">Stok: {15 - product}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#444444] py-1 rounded text-sm hover:bg-[#555555] transition-colors">
                          Düzenle
                        </button>
                        <button className="flex-1 bg-red-600 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">Mağaza İstatistikleri</h3>
              <div className="space-y-4">
                <div className="bg-[#333333] p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#81a743] mb-1">47</div>
                  <div className="text-sm text-gray-400">Toplam Ürün</div>
                </div>
                <div className="bg-[#333333] p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#81a743] mb-1">234</div>
                  <div className="text-sm text-gray-400">Toplam Satış</div>
                </div>
                <div className="bg-[#333333] p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#81a743] mb-1">4.8</div>
                  <div className="text-sm text-gray-400">Ortalama Puan</div>
                </div>
                <div className="bg-[#333333] p-4 rounded-lg text-center">
                  <div className="text-xl font-bold text-[#81a743] mb-1">₺12,450</div>
                  <div className="text-sm text-gray-400">Bu Ay Gelir</div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="mb-3">Hızlı Eylemler</h4>
                <div className="space-y-2">
                  <button className="w-full bg-[#333333] py-2 rounded text-sm hover:bg-[#444444] transition-colors">
                    Mağaza Ayarları
                  </button>
                  <button className="w-full bg-[#333333] py-2 rounded text-sm hover:bg-[#444444] transition-colors">
                    Promosyon Oluştur
                  </button>
                  <button className="w-full bg-[#333333] py-2 rounded text-sm hover:bg-[#444444] transition-colors">
                    Raporları Görüntüle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HelpDesk() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">Help Desk</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Yardım Masası</h2>
          <p className="text-gray-300 mb-6">
            Sorularınızın cevaplarını bulun veya destek ekibimizle iletişime geçin.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="mb-4">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "Siparişimi nasıl takip edebilirim?",
                    answer: "Sipariş takibi için hesabınıza giriş yapın ve 'Siparişlerim' bölümüne gidin."
                  },
                  {
                    question: "İade işlemi nasıl yapılır?",
                    answer: "İade işlemleri için 14 gün içinde müşteri hizmetleri ile iletişime geçin."
                  },
                  {
                    question: "Ödeme yöntemleri nelerdir?",
                    answer: "Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri mevcuttur."
                  },
                  {
                    question: "Kargo süresi ne kadar?",
                    answer: "Standart kargo 2-3 iş günü, hızlı kargo 1 iş günü sürmektedir."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-[#333333] p-4 rounded-lg">
                    <h4 className="mb-2 font-medium">{faq.question}</h4>
                    <p className="text-sm text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="mb-4">Destek Talebi Oluştur</h3>
                <div className="bg-[#333333] p-4 rounded-lg">
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-2">Konu</label>
                      <select className="w-full p-3 bg-[#444444] rounded border border-gray-600">
                        <option>Teknik Sorun</option>
                        <option>Sipariş Sorunu</option>
                        <option>İade Talebi</option>
                        <option>Ödeme Sorunu</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2">Açıklama</label>
                      <textarea 
                        className="w-full p-3 bg-[#444444] rounded border border-gray-600 h-24"
                        placeholder="Sorununuzu detaylı olarak açıklayın..."
                      ></textarea>
                    </div>
                    <button className="bg-[#81a743] px-6 py-3 rounded hover:bg-[#6d8c39] transition-colors">
                      Destek Talebi Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4">İletişim Bilgileri</h3>
              <div className="bg-[#333333] p-4 rounded-lg mb-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-sm text-gray-400">0850 123 45 67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📧</span>
                    <div>
                      <div className="font-medium">E-posta</div>
                      <div className="text-sm text-gray-400">destek@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">💬</span>
                    <div>
                      <div className="font-medium">Canlı Destek</div>
                      <div className="text-sm text-gray-400">7/24 aktif</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#333333] p-4 rounded-lg">
                <h4 className="mb-3">Hızlı Linkler</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-[#81a743] hover:underline">
                    Kullanım Kılavuzu
                  </a>
                  <a href="#" className="block text-sm text-[#81a743] hover:underline">
                    Video Eğitimler
                  </a>
                  <a href="#" className="block text-sm text-[#81a743] hover:underline">
                    Gizlilik Politikası
                  </a>
                  <a href="#" className="block text-sm text-[#81a743] hover:underline">
                    Kullanım Şartları
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}