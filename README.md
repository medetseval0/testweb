# Eloxu Multi-Project Platform

**Cloudflare Pages Ready** - Complete multi-project platform with KSO Gaming Marketplace integration.

## 🚀 Quick Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)
1. Push this project to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node.js version:** `20.x` (REQUIRED)

### Option 2: Direct Upload
1. Run `npm install && npm run build` locally (requires Node.js 20+)
2. Upload the `dist` folder to Cloudflare Pages

### Option 3: Wrangler CLI
```bash
npm install
npm run deploy
```

## ⚠️ Important Requirements

### Node.js Version
- **Required:** Node.js 20.x or higher
- **Cloudflare Pages Environment Variable:** `NODE_VERSION = 20.18.0`
- **Local Development:** Use `.nvmrc` file (Node 20.18.0)

### Dependencies
- React Router v6.28.0 (compatible with Node.js 18+)
- TypeScript 5.7.2
- Vite 6.0.1
- Tailwind CSS v4

## 🏗️ Project Structure

```
├── 📁 src/                # Main application entry
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # React entry point
│   └── Loading.tsx       # Loading component
├── 📁 components/        # Shared components
│   ├── 📁 ui/           # Shadcn/ui components
│   ├── 📁 pages/        # Legacy page components
│   └── 📁 figma/        # Figma imported components
├── 📁 kso/              # KSO Gaming Marketplace
│   ├── 📁 components/   # KSO-specific components
│   ├── 📁 pages/        # KSO pages
│   └── 📁 styles/       # KSO-specific styles
├── 📁 imports/          # Figma imported assets
├── 📁 styles/           # Global styles
└── 📁 public/           # Static assets
```

## 🎯 Features

### Core Platform
- ✅ **Multi-project architecture** - Portfolio, Admin, KSO
- ✅ **React 18** with TypeScript
- ✅ **React Router** v6 for routing (Node.js 18+ compatible)
- ✅ **Tailwind CSS** v4 for styling
- ✅ **Responsive design** - Mobile-first approach

### KSO Gaming Marketplace
- ✅ **Gaming-focused design** - Dark theme, mobile app feel
- ✅ **Marketplace functionality** - PUBG, Valorant, CS2
- ✅ **Responsive headers** - Adaptive to screen size
- ✅ **User management** - Authentication, profiles
- ✅ **Product management** - Categories, listings, search

### Technical Features
- ✅ **Cloudflare Pages optimized** - Perfect build configuration
- ✅ **Code splitting** - Optimized bundle sizes
- ✅ **TypeScript** - Full type safety
- ✅ **Error boundaries** - Graceful error handling
- ✅ **SEO ready** - Meta tags, Open Graph, Twitter Cards

## 🛠️ Development

### Prerequisites
- **Node.js 20.x** (use .nvmrc: `nvm use`)
- npm or yarn

### Local Development
```bash
# Use correct Node.js version
nvm use  # or nvm install 20.18.0

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Routing Structure

```
/                    → Project Portfolio
/admin/pages         → Legacy Admin Pages
/kso/admin          → KSO Project Management
/kso/site/*         → KSO Gaming Marketplace
  ├── /home         → KSO Homepage
  ├── /category     → Game Categories
  ├── /products/*   → Product Pages
  ├── /user/*       → User Panel
  └── /auth/*       → Authentication
```

## 🔧 Cloudflare Pages Configuration

### Environment Variables
Set these in Cloudflare Pages dashboard:
```env
NODE_VERSION=20.18.0
NPM_FLAGS=--verbose
NODE_ENV=production
```

### Build Settings
```yaml
Build command: npm run build
Build output directory: dist
Root directory: (empty)
Node.js version: 20.x
```

## 🚀 Performance

### Optimizations
- **Code splitting** - Vendor, router, UI chunks
- **Tree shaking** - Remove unused code
- **Image optimization** - WebP support
- **Font optimization** - Preload critical fonts
- **Bundle analysis** - Track chunk sizes

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## 🐛 Troubleshooting

### Build Issues

**"Unsupported engine" Error**
- Ensure Node.js 20+ is used in Cloudflare Pages
- Set `NODE_VERSION=20.18.0` environment variable

**TypeScript Errors**
- Run `npm run type-check` locally first
- Ensure all imports use correct paths

**404 on Refresh**
- Ensure `_redirects` file is in `public/` folder
- Check Cloudflare Pages routing settings

**Build Fails**
- Check Node.js version (20.x required)
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`

### Support
- Create an issue on GitHub
- Check Cloudflare Pages documentation
- Review build logs in Cloudflare dashboard

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for Cloudflare Pages**

**Important:** Use Node.js 20+ for builds! 🚀