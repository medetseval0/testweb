import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Plus, ExternalLink, Settings, Monitor, Smartphone, Download } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'maintenance' | 'development';
  url: string;
  managementUrl: string;
  pageCount: number;
  componentCount?: number;
  lastModified: string;
  hasCustomImage?: boolean;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 'kso',
    name: 'KSO Project',
    description: 'Oyun içi eşya alım-satım platformu. PUBG, Valorant, CS2 ve diğer popüler oyunlar için güvenli marketplace sistemi.',
    status: 'active',
    url: '/kso/site/home',
    managementUrl: '/kso/admin',
    pageCount: 18,
    componentCount: 47,
    lastModified: '2024-06-08',
    hasCustomImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80'
  },
  {
    id: 'legacy',
    name: 'Legacy Dashboard',
    description: 'Eski sistem dashboard\'u. Mevcut kullanıcıların erişimi için korunmakta.',
    status: 'maintenance',
    url: '/site/home',
    managementUrl: '/admin/pages',
    pageCount: 12,
    componentCount: 23,
    lastModified: '2024-05-15'
  }
];

function getStatusColor(status: Project['status']) {
  switch (status) {
    case 'active':
      return 'border-green-500 text-green-700 bg-green-50';
    case 'maintenance':
      return 'border-yellow-500 text-yellow-700 bg-yellow-50';
    case 'development':
      return 'border-blue-500 text-blue-700 bg-blue-50';
    default:
      return 'border-gray-500 text-gray-700 bg-gray-50';
  }
}

function getStatusText(status: Project['status']) {
  switch (status) {
    case 'active':
      return 'Aktif';
    case 'maintenance':
      return 'Bakım';
    case 'development':
      return 'Geliştirme';
    default:
      return 'Bilinmiyor';
  }
}

export default function ProjectPortfolio() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // Desktop view için normal navigation
  const handleDesktopView = (project: Project) => {
    try {
      navigate(project.url);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = project.url;
    }
  };

  // Mobile view için query parameter ile mobile mode
  const handleMobileView = (project: Project) => {
    try {
      navigate(`${project.url}?view=mobile`);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = `${project.url}?view=mobile`;
    }
  };

  // KSO Project Download for Cloudflare Pages
  const handleDownloadKSO = async () => {
    setIsDownloading(true);
    
    try {
      // Create a simple downloadable ZIP using browser APIs
      const generateZipContent = () => {
        // Package.json for standalone KSO project
        const packageJson = {
          "name": "kso-marketplace",
          "version": "1.0.0",
          "description": "KSO Gaming Marketplace - Oyun içi eşya alım-satım platformu",
          "private": true,
          "type": "module",
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview",
            "deploy": "npm run build && wrangler pages deploy dist"
          },
          "dependencies": {
            "react": "^18.3.1",
            "react-dom": "^18.3.1",
            "react-router-dom": "^7.6.1",
            "lucide-react": "^0.469.0",
            "@tailwindcss/typography": "^0.5.15"
          },
          "devDependencies": {
            "@types/react": "^18.3.12",
            "@types/react-dom": "^18.3.1",
            "@vitejs/plugin-react": "^4.3.4",
            "vite": "^6.0.1",
            "tailwindcss": "^4.0.0",
            "typescript": "^5.7.2",
            "wrangler": "^3.96.0"
          },
          "engines": {
            "node": ">=18.0.0"
          }
        };

        // Main README with deployment instructions
        const readmeMd = `# KSO Gaming Marketplace

Oyun içi eşya alım-satım platformu. PUBG, Valorant, CS2 ve diğer popüler oyunlar için güvenli marketplace sistemi.

## 🚀 Cloudflare Pages Deployment

### Quick Deploy
1. Bu dosyaları GitHub repository'ye yükleyin
2. Cloudflare Pages'e bağlayın  
3. Build command: \`npm run build\`
4. Build output directory: \`dist\`
5. Node.js version: \`18.x\`

### Manual Deploy
\`\`\`bash
npm install
npm run build
wrangler pages deploy dist
\`\`\`

## 📱 Features
- ✅ React 18 with TypeScript
- ✅ React Router for SPA routing
- ✅ Tailwind CSS v4
- ✅ Responsive design
- ✅ Mobile-optimized
- ✅ Cloudflare Pages ready
- ✅ Plus Jakarta Sans font
- ✅ Gaming marketplace UI/UX

## 🌐 Ready to Deploy!
Cloudflare Pages'e deploy edin ve marketplace'i paylaşın!

---
Generated from Eloxu Multi-Project Platform
`;

        // Create content object for download
        return {
          'package.json': JSON.stringify(packageJson, null, 2),
          'README.md': readmeMd,
          '_redirects': '/*    /index.html   200'
        };
      };

      const files = generateZipContent();
      
      // Create a simple text file with all the content
      let downloadContent = `KSO MARKETPLACE - CLOUDFLARE PAGES PACKAGE
==============================================

Bu dosyalar KSO Gaming Marketplace projesini içermektedir.
Cloudflare Pages'e deploy etmek için:

1. Yeni bir GitHub repository oluşturun
2. Bu dosyaları repository'ye yükleyin
3. Cloudflare Pages'e bağlayın
4. Build ayarları:
   - Build command: npm run build
   - Build output directory: dist
   - Node.js version: 18.x

==============================================

`;

      // Add each file content
      Object.entries(files).forEach(([filename, content]) => {
        downloadContent += `
========== ${filename} ==========
${content}

`;
      });

      downloadContent += `
==============================================
KSO Gaming Marketplace
Eloxu Multi-Project Platform tarafından oluşturuldu
==============================================
`;

      // Create and download the file
      const blob = new Blob([downloadContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'kso-marketplace-cloudflare-setup.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Download işlemi başarısız oldu. Lütfen tekrar deneyin.');
    } finally {
      setIsDownloading(false);
    }
  };

  // KSO Project için özel gradient background
  const ksoProjectImage = (
    <div className="relative w-full h-32 rounded-t-lg overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-green-400"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.7) 0%, transparent 50%),
            linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #10b981 50%, #3b82f6 100%)
          `
        }}
      />
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Abstract shapes */}
      <div className="absolute top-4 left-4">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-4 left-1/3">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm transform rotate-45" />
      </div>
      
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" fill="none">
        <path 
          d="M0,60 Q75,30 150,45 T300,60" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="2" 
          fill="none"
        />
        <path 
          d="M0,80 Q100,50 200,65 T300,80" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1.5" 
          fill="none"
        />
      </svg>
      
      {/* Project title overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white text-shadow-sm tracking-wide">
          KSO Project
        </h2>
      </div>
    </div>
  );

  // Basic fallback content if components fail to load
  if (!navigate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Eloxu Multi-Project Platform</h1>
          <p className="text-gray-600">Uygulama yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Proje Portföyü
              </h1>
              <p className="text-gray-600">
                Tüm projelerinizi tek yerden yönetin ve görüntüleyin
              </p>
            </div>
            <Button 
              onClick={() => console.log('Yeni proje oluştur')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Yeni Proje
            </Button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
              <p className="text-gray-600">Toplam Proje</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">
                {projects.filter(p => p.status === 'active').length}
              </p>
              <p className="text-gray-600">Aktif Proje</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {projects.reduce((total, project) => total + project.pageCount, 0)}
              </p>
              <p className="text-gray-600">Toplam Sayfa</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden border transition-all duration-300 cursor-pointer ${
                hoveredProject === project.id
                  ? 'border-blue-300 shadow-xl bg-blue-50/50 transform scale-[1.02]'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image - Only for KSO Project */}
              {project.id === 'kso' && ksoProjectImage}
              
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={getStatusColor(project.status)}
                      >
                        {getStatusText(project.status)}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-2xl font-bold text-gray-900">{project.pageCount}</p>
                    <p className="text-xs text-gray-500">Sayfa</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-2xl font-bold text-gray-900">{project.componentCount || 0}</p>
                    <p className="text-xs text-gray-500">Component</p>
                  </div>
                </div>

                {/* Last Modified */}
                <div className="text-xs text-gray-500 mb-4">
                  Son güncelleme: {new Date(project.lastModified).toLocaleDateString('tr-TR')}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* View Buttons Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleDesktopView(project)}
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    >
                      <Monitor className="w-4 h-4 mr-2" />
                      Desktop View
                    </Button>
                    <Button
                      onClick={() => handleMobileView(project)}
                      variant="outline"
                      size="sm"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      Mobile App View
                    </Button>
                  </div>
                  
                  {/* Management Buttons Row */}
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => navigate(project.managementUrl)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Yönet
                    </Button>
                    
                    {/* KSO Project Download Button */}
                    {project.id === 'kso' ? (
                      <Button
                        onClick={handleDownloadKSO}
                        disabled={isDownloading}
                        variant="outline"
                        size="sm"
                        className="border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 disabled:opacity-50"
                        title="Cloudflare Pages setup dosyasını indir"
                      >
                        {isDownloading ? (
                          <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Download className="w-4 h-4" />
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
          <p className="mt-2">Eloxu Multi-Project Platform - Cloudflare Pages Ready 🚀</p>
        </div>
      </div>
    </div>
  );
}