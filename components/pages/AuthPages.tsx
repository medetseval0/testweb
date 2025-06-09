export function Login() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <h1 className="text-center mb-8">Login</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-6 text-center">Giriş Yap</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">E-posta</label>
              <input 
                type="email" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block mb-2">Şifre</label>
              <input 
                type="password" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Beni hatırla</span>
              </label>
              <a href="#" className="text-sm text-[#81a743] hover:underline">
                Şifremi unuttum
              </a>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors"
            >
              Giriş Yap
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Hesabınız yok mu?{' '}
              <a href="#" className="text-[#81a743] hover:underline">
                Kayıt olun
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Register() {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <h1 className="text-center mb-8">Register</h1>
        <div className="bg-[#222222] rounded-lg p-6">
          <h2 className="mb-6 text-center">Kayıt Ol</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Ad Soyad</label>
              <input 
                type="text" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label className="block mb-2">E-posta</label>
              <input 
                type="email" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block mb-2">Telefon</label>
              <input 
                type="tel" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="0555 123 45 67"
              />
            </div>
            <div>
              <label className="block mb-2">Şifre</label>
              <input 
                type="password" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block mb-2">Şifre Tekrar</label>
              <input 
                type="password" 
                className="w-full p-3 bg-[#333333] rounded border border-gray-600 focus:border-[#81a743] outline-none" 
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Kullanım şartlarını kabul ediyorum</span>
              </label>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#81a743] py-3 rounded hover:bg-[#6d8c39] transition-colors"
            >
              Kayıt Ol
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Zaten hesabınız var mı?{' '}
              <a href="#" className="text-[#81a743] hover:underline">
                Giriş yapın
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}