import { X } from 'lucide-react';

interface PageManagementPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onPageSelect: (page: string) => void;
  currentPage: string;
}

const pages = [
  { id: 'homepage', name: 'Homepage', icon: '🏠' },
  { id: 'category', name: 'Category', icon: '📂' },
  { id: 'subcategory', name: 'SubCategory', icon: '📁' },
  { id: 'allcategory', name: 'AllCategory', icon: '📚' },
  { id: 'popularstore', name: 'PopularStore', icon: '⭐' },
  { id: 'paymentstep1', name: 'PaymentStep1', icon: '💳' },
  { id: 'paymentstep2', name: 'PaymentStep2', icon: '📋' },
  { id: 'paymentstep3', name: 'PaymentStep3', icon: '💰' },
  { id: 'paymentstep4', name: 'PaymentStep4', icon: '✅' },
  { id: 'productpage1', name: 'ProductPage1', icon: '📦' },
  { id: 'productpage2', name: 'ProductPage2', icon: '📦' },
  { id: 'productpage3', name: 'ProductPage3', icon: '📦' },
  { id: 'sellerstore', name: 'SellerStore', icon: '🏪' },
  { id: 'login', name: 'Login', icon: '🔑' },
  { id: 'register', name: 'Register', icon: '👤' },
];

export default function PageManagementPanel({
  isOpen,
  onClose,
  onPageSelect,
  currentPage
}: PageManagementPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-[#222222] shadow-lg z-50 transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h2 className="text-white font-semibold">Sayfa Yönetim Paneli</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <p className="text-gray-400 text-sm mb-4">
            Görüntülemek istediğiniz sayfayı seçin:
          </p>
          
          <div className="space-y-2">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  onPageSelect(page.id);
                  onClose();
                }}
                className={`w-full flex items-center p-3 rounded transition-colors text-left ${
                  currentPage === page.id
                    ? 'bg-[#81a743] text-white'
                    : 'bg-[#333333] text-gray-300 hover:bg-[#444444]'
                }`}
              >
                <span className="mr-3 text-lg">{page.icon}</span>
                <span>{page.name}</span>
                {currentPage === page.id && (
                  <span className="ml-auto text-sm">●</span>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-600">
          <div className="text-center text-gray-400 text-xs">
            <p>Toplam {pages.length} sayfa mevcut</p>
            <p className="mt-1">Aktif sayfa: <span className="text-[#81a743]">{currentPage}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}