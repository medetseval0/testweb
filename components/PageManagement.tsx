import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { 
  Search,
  Plus,
  FileText,
  Globe,
  ShoppingCart,
  CreditCard,
  Users,
  Package,
  Home,
  Settings,
  Eye,
  Filter,
  Grid3X3,
  List
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

const pages: Page[] = [
  { id: 'home', name: 'Ana Sayfa', route: '/site/home', category: 'Genel', description: 'Sitenin ana sayfası', lastModified: '2024-01-15', status: 'published' },
  { id: 'category', name: 'Kategori', route: '/category', category: 'Katalog', description: 'Ürün kategorileri sayfası', lastModified: '2024-01-14', status: 'published' },
  { id: 'subcategory', name: 'Alt Kategori', route: '/subcategory', category: 'Katalog', description: 'Ürün alt kategorileri', lastModified: '2024-01-14', status: 'published' },
  { id: 'all-category', name: 'Tüm Kategoriler', route: '/categories/all', category: 'Katalog', description: 'Tüm kategorilerin listelendiği sayfa', lastModified: '2024-01-13', status: 'published' },
  { id: 'popular-store', name: 'Popüler Mağaza', route: '/stores/popular', category: 'Mağaza', description: 'En popüler mağazaların listesi', lastModified: '2024-01-13', status: 'published' },
  { id: 'product-detail', name: 'Ürün Detay', route: '/products/detail', category: 'Ürün', description: 'Ürün detay sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'product-list', name: 'Ürün Listesi', route: '/products/list', category: 'Ürün', description: 'Ürün listeleme sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'product-compare', name: 'Ürün Karşılaştır', route: '/products/compare', category: 'Ürün', description: 'Ürün karşılaştırma sayfası', lastModified: '2024-01-12', status: 'published' },
  { id: 'seller-store', name: 'Satıcı Mağazası', route: '/store/123', category: 'Mağaza', description: 'Satıcı mağaza sayfası', lastModified: '2024-01-11', status: 'published' },
  { id: 'cart', name: 'Sepet', route: '/checkout/cart', category: 'Ödeme', description: 'Alışveriş sepeti', lastModified: '2024-01-10', status: 'published' },
  { id: 'delivery', name: 'Teslimat', route: '/checkout/delivery', category: 'Ödeme', description: 'Teslimat bilgileri sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'payment', name: 'Ödeme', route: '/checkout/payment', category: 'Ödeme', description: 'Ödeme işlemleri sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'confirmation', name: 'Onay', route: '/checkout/confirmation', category: 'Ödeme', description: 'Sipariş onay sayfası', lastModified: '2024-01-10', status: 'published' },
  { id: 'login', name: 'Giriş Yap', route: '/auth/login', category: 'Kimlik Doğrulama', description: 'Kullanıcı giriş sayfası', lastModified: '2024-01-09', status: 'published' },
  { id: 'register', name: 'Kayıt Ol', route: '/auth/register', category: 'Kimlik Doğrulama', description: 'Kullanıcı kayıt sayfası', lastModified: '2024-01-09', status: 'published' },
  { id: 'dashboard', name: 'Kullanıcı Paneli', route: '/user/dashboard', category: 'Kullanıcı Paneli', description: 'Kullanıcı ana paneli', lastModified: '2024-01-08', status: 'published' },
  { id: 'purchases', name: 'Satın Alımlar', route: '/user/purchases', category: 'Kullanıcı Paneli', description: 'Satın alım geçmişi', lastModified: '2024-01-08', status: 'published' },
  { id: 'sales', name: 'Satışlar', route: '/user/sales', category: 'Kullanıcı Paneli', description: 'Satış geçmişi', lastModified: '2024-01-08', status: 'published' }
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

export default function PageManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = Array.from(new Set(pages.map(page => page.category)));
  
  const filteredPages = pages.filter(page => {
    const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || page.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedPages = filteredPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, Page[]>);

  return (
    <div className="min-h-screen bg-white light">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Sayfa Yönetimi</h1>
              <Badge variant="outline" className="text-xs">
                {filteredPages.length} sayfa
              </Badge>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Yeni Sayfa
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Toplam Sayfa</h3>
            <p className="text-3xl font-bold text-gray-900">{pages.length}</p>
          </Card>
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Yayınlanan</h3>
            <p className="text-3xl font-bold text-green-600">
              {pages.filter(p => p.status === 'published').length}
            </p>
          </Card>
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Taslak</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {pages.filter(p => p.status === 'draft').length}
            </p>
          </Card>
          <Card className="p-6 border border-gray-200 bg-white">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Kategoriler</h3>
            <p className="text-3xl font-bold text-blue-600">{categories.length}</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 border border-gray-200 bg-white mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Sayfa ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-200 rounded-md px-3 py-2 text-sm bg-white"
                >
                  <option value="all">Tüm Kategoriler</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="flex border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-gray-100' : ''}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-gray-100' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Content */}
        {Object.keys(groupedPages).length === 0 ? (
          <Card className="p-12 text-center border border-gray-200 bg-white">
            <div className="max-w-md mx-auto">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sayfa bulunamadı
              </h3>
              <p className="text-gray-600 mb-6">
                Arama kriterlerinize uygun sayfa bulunamadı. Filtreleri temizleyip tekrar deneyin.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Filtreleri Temizle
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
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
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {categoryPages.map((page) => (
                          <div
                            key={page.id}
                            className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:shadow-sm transition-all"
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
                    ) : (
                      <div className="space-y-3">
                        {categoryPages.map((page) => (
                          <div
                            key={page.id}
                            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-gray-200 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-4">
                                <div>
                                  <h4 className="font-medium text-gray-900">{page.name}</h4>
                                  <p className="text-sm text-gray-600">{page.description}</p>
                                </div>
                                <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                                  {page.route}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge
                                variant="outline"
                                className={page.status === 'published' 
                                  ? 'bg-green-50 text-green-700 border-green-200'
                                  : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                }
                              >
                                {page.status === 'published' ? 'Yayında' : 'Taslak'}
                              </Badge>
                              <div className="flex space-x-2">
                                <Button
                                  onClick={() => navigate(page.route)}
                                  variant="outline"
                                  size="sm"
                                  className="border-gray-200 text-gray-700 hover:bg-gray-50"
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
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}