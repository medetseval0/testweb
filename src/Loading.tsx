export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181A1C]">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-white mb-2">
          Eloxu Platform Yükleniyor...
        </h2>
        <p className="text-gray-400 text-sm">
          Lütfen bekleyin, uygulama hazırlanıyor.
        </p>
      </div>
    </div>
  )
}