import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Eye, 
  Settings, 
  Plus, 
  FileText, 
  Puzzle,
  Home,
  ShoppingCart,
  CreditCard,
  Users,
  Package
} from 'lucide-react';

interface Page {
  id: string;
  name: string;
  route: string;
  category: string;
  description: string;
  lastModified: string;
  status: 'published' | 'draft';
}

interface Component {
  id: string;
  name: string;
  description: string;
  usageCount: number;
  lastModified: string;
  category: 'ui' | 'layout' | 'form' | 'business';
}

const pages: Page[] = [
  { id: 'home', name: 'Ana Sayfa', route: '/kso/site/home', category: 'Genel', description: 'KSO platformunun ana sayfası', lastModified: '2024-01-15', status: 'published' },
  { id: 'category', name: 'Kategori', route: '/kso/site/category', category: 'Katalog', description: 'Ürün kategorileri sayfası', lastModified: '2024-01-14', status: 'published' },
  { id: 'subcategory', name: 'Alt Kategori', route: '/kso/site/category', category: 'Katalog', description: 'Ürün alt kategorileri', lastModified: '2024-01-14', status: 'published' },
  { id: 'all-category', name: 'Tüm Kategoriler', route: '/kso/site/category', category: 'Katalog', description: 'Tüm kategorilerin listelendiği sayfa', lastModified: '2024-01-13', status: 'published' },
  { id: 'popular-store', name: 'Popüler Mağaza', route: '/kso/site/products/list', category: 'Mağaza', description: 'En popüler mağazaların listesi', lastModified: '2024-01-13', status: 'published' },
  { id: 'product-detail', name: 'Ürün Detay', route: '/kso/site/products/detail', category: 'Ürün', description: 'Ürün detay sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'product-list', name: 'Ürün Listesi', route: '/kso/site/products/list', category: 'Ürün', description: 'Ürün listeleme sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'product-compare', name: 'Ürün Karşılaştır', route: '/kso/site/products/compare', category: 'Ürün', description: 'Ürün karşılaştırma sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'seller-store', name: 'Satıcı Mağazası', route: '/kso/site/products/list', category: 'Mağaza', description: 'Satıcı mağaza sayfası', lastModified: '2024-01-11', status: 'published' },
  { id: 'cart', name: 'Sepet', route: '/kso/site/user/dashboard', category: 'Ödeme', description: 'Alışveriş sepeti', lastModified: '2024-01-10', status: 'published' },
  { id: 'delivery', name: 'Teslimat', route: '/kso/site/user/dashboard', category: 'Ödeme', description: 'Teslimat bilgileri sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'payment', name: 'Ödeme', route: '/kso/site/user/dashboard', category: 'Ödeme', description: 'Ödeme işlemleri sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'confirmation', name: 'Onay', route: '/kso/site/user/dashboard', category: 'Ödeme', description: 'Sipariş onay sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'login', name: 'Giriş Yap', route: '/kso/site/auth/login', category: 'Kimlik Doğrulama', description: 'Kullanıcı giriş sayfası', lastModified: '2024-01-09', status: 'published' },
  { id: 'register', name: 'Kayıt Ol', route: '/kso/site/auth/register', category: 'Kimlik Doğrulama', description: 'Kullanıcı kayıt sayfası', lastModified: '2024-01-09', status: 'published' },
  { id: 'dashboard', name: 'Kullanıcı Paneli', route: '/kso/site/user/dashboard', category: 'Kullanıcı Paneli', description: 'Kullanıcı ana paneli', lastModified: '2024-01-08', status: 'published' },
  { id: 'purchases', name: 'Satın Alımlar', route: '/kso/site/user/purchases', category: 'Kullanıcı Paneli', description: 'Satın alım geçmişi', lastModified: '2024-01-08', status: 'published' },
  { id: 'sales', name: 'Satışlar', route: '/kso/site/user/sales', category: 'Kullanıcı Paneli', description: 'Satış geçmişi', lastModified: '2024-01-08', status: 'published' }
];

const components: Component[] = [
  { id: 'responsive-header', name: 'Responsive Header', description: 'Site başlık bileşeni', usageCount: 18, lastModified: '2024-01-15', category: 'layout' },
  { id: 'page-management', name: 'Page Management', description: 'Sayfa yönetim bileşeni', usageCount: 1, lastModified: '2024-01-15', category: 'business' },
  { id: 'product-card', name: 'Product Card', description: 'Ürün kartı bileşeni', usageCount: 5, lastModified: '2024-01-14', category: 'business' },
  { id: 'user-avatar', name: 'User Avatar', description: 'Kullanıcı avatarı bileşeni', usageCount: 8, lastModified: '2024-01-13', category: 'ui' },
  { id: 'payment-form', name: 'Payment Form', description: 'Ödeme formu bileşeni', usageCount: 4, lastModified: '2024-01-12', category: 'form' },
  { id: 'category-filter', name: 'Category Filter', description: 'Kategori filtreleme bileşeni', usageCount: 3, lastModified: '2024-01-11', category: 'business' },
  { id: 'search-bar', name: 'Search Bar', description: 'Arama çubuğu bileşeni', usageCount: 6, lastModified: '2024-01-10', category: 'ui' },
  { id: 'cart-summary', name: 'Cart Summary', description: 'Sepet özeti bileşeni', usageCount: 4, lastModified: '2024-01-09', category: 'business' },
  { id: 'notification-toast', name: 'Notification Toast', description: 'Bildirim bileşeni', usageCount: 12, lastModified: '2024-01-08', category: 'ui' },
  { id: 'loading-spinner', name: 'Loading Spinner', description: 'Yükleme animasyonu bileşeni', usageCount: 15, lastModified: '2024-01-07', category: 'ui' },
  { id: 'modal-dialog', name: 'Modal Dialog', description: 'Modal pencere bileşeni', usageCount: 7, lastModified: '2024-01-06', category: 'ui' },
  { id: 'data-table', name: 'Data Table', description: 'Veri tablosu bileşeni', usageCount: 3, lastModified: '2024-01-05', category: 'ui' }
];

const categoryIcons: Record<string, any> = {
  'Genel': Home,
  'Katalog': Package,
  'Ürün': ShoppingCart,
  'Mağaza': Package,
  'Ödeme': CreditCard,
  'Kimlik Doğrulama': Users,
  'Kullanıcı Paneli': Settings
};

const componentCategoryIcons: Record<string, any> = {
  'ui': Puzzle,
  'layout': FileText,
  'form': Settings,
  'business': ShoppingCart
};

export default function KSOPageManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pages');

  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, Page[]>);

  const groupedComponents = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, Component[]>);

  const getCategoryName = (key: string) => {
    const categoryNames: Record<string, string> = {
      'ui': 'UI Bileşenleri',
      'layout': 'Layout Bileşenleri',
      'form': 'Form Bileşenleri',
      'business': 'İş Mantığı Bileşenleri'
    };
    return categoryNames[key] || key;
  };

  return (
    <div className="min-h-screen bg-white light">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Projelere Dön
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">KSO Project</h1>
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                Aktif
              </Badge>
            </div>
            <Button
              onClick={() => navigate('/kso/site/home')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Eye className="w-4 h-4 mr-2" />
              Sayfayı Görüntüle
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Toplam Sayfa</h3>
            <p className="text-3xl font-bold text-gray-900">{pages.length}</p>
          </Card>
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Yayınlanan Sayfalar</h3>
            <p className="text-3xl font-bold text-green-600">
              {pages.filter(p => p.status === 'published').length}
            </p>
          </Card>
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Toplam Component</h3>
            <p className="text-3xl font-bold text-purple-600">{components.length}</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-100 p-1">
            <TabsTrigger value="pages" className="data-[state=active]:bg-white">
              <FileText className="w-4 h-4 mr-2" />
              Sayfalar
            </TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-white">
              <Puzzle className="w-4 h-4 mr-2" />
              Componentler
            </TabsTrigger>
          </TabsList>

          {/* Pages Tab */}
          <TabsContent value="pages" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Sayfalar</h2>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Yeni Sayfa
              </Button>
            </div>

            {Object.entries(groupedPages).map(([category, categoryPages]) => {
              const IconComponent = categoryIcons[category] || FileText;
              return (
                <Card key={category} className="border border-gray-200 bg-white">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{category}</h3>
                        <p className="text-sm text-gray-500">{categoryPages.length} sayfa</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {categoryPages.map((page) => (
                        <div
                          key={page.id}
                          className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 mb-1">{page.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                              <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                                {page.route}
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className={page.status === 'published' 
                                ? 'bg-green-50 text-green-700 border-green-200'
                                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                              }
                            >
                              {page.status === 'published' ? 'Yayında' : 'Taslak'}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={() => navigate(page.route)}
                              variant="outline"
                              size="sm"
                              className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Görüntüle
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 text-gray-700 hover:bg-gray-50"
                            >
                              <Settings className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Componentler</h2>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Yeni Component
              </Button>
            </div>

            {Object.entries(groupedComponents).map(([category, categoryComponents]) => {
              const IconComponent = componentCategoryIcons[category] || Puzzle;
              return (
                <Card key={category} className="border border-gray-200 bg-white">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{getCategoryName(category)}</h3>
                        <p className="text-sm text-gray-500">{categoryComponents.length} component</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {categoryComponents.map((component) => (
                        <div
                          key={component.id}
                          className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 mb-1">{component.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{component.description}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>{component.usageCount} kullanım</span>
                                <span>Son güncelleme: {new Date(component.lastModified).toLocaleDateString('tr-TR')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Önizle
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-200 text-gray-700 hover:bg-gray-50"
                            >
                              <Settings className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}