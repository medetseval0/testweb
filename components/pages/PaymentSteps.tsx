export function PaymentStep1() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Payment Step 1</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Adım 1: Sepet Özeti</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-[#333333] rounded">
              <span>Ürün 1</span>
              <span>₺299.99</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-[#333333] rounded">
              <span>Ürün 2</span>
              <span>₺199.99</span>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between">
                <span>Toplam:</span>
                <span className="font-bold">₺499.98</span>
              </div>
            </div>
            <button className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors">
              Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaymentStep2() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Payment Step 2</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Adım 2: Teslimat Bilgileri</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Ad Soyad</label>
              <input type="text" className="w-full p-3 bg-[#333333] rounded border border-gray-600" />
            </div>
            <div>
              <label className="block mb-2">Adres</label>
              <textarea className="w-full p-3 bg-[#333333] rounded border border-gray-600 h-24"></textarea>
            </div>
            <div>
              <label className="block mb-2">Telefon</label>
              <input type="tel" className="w-full p-3 bg-[#333333] rounded border border-gray-600" />
            </div>
            <button type="submit" className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors">
              Devam Et
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function PaymentStep3() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Payment Step 3</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-4">Adım 3: Ödeme Yöntemi</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[#333333] rounded border-2 border-[#81a743]">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" defaultChecked />
                <span>Kredi Kartı</span>
              </label>
            </div>
            <div className="p-4 bg-[#333333] rounded border border-gray-600">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" />
                <span>Kapıda Ödeme</span>
              </label>
            </div>
            <div className="p-4 bg-[#333333] rounded border border-gray-600">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-3" />
                <span>Havale/EFT</span>
              </label>
            </div>
            <button className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors">
              Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PaymentStep4() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="mb-6">Payment Step 4</h1>
        <div className="bg-[#222222] rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h2 className="mb-4">Ödeme Tamamlandı!</h2>
          <p className="text-gray-300 mb-6">
            Siparişiniz başarıyla alındı. Sipariş numaranız: #12345
          </p>
          <div className="bg-[#333333] p-4 rounded mb-6">
            <h3 className="mb-2">Sipariş Özeti</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <div>Toplam: ₺499.98</div>
              <div>Tahmini Teslimat: 2-3 iş günü</div>
            </div>
          </div>
          <button className="bg-[#81a743] px-6 py-3 rounded hover:bg-[#6d8c39] transition-colors">
            Siparişlerimi Görüntüle
          </button>
        </div>
      </div>
    </div>
  );
}