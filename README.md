# Eloxu Multi-Project Platform

**Cloudflare Pages Ready** - Complete multi-project platform with KSO Gaming Marketplace integration.

## 🚀 Quick Deploy to Cloudflare Pages

### Method 1: Git Integration (Recommended)
1. Push this project to GitHub
2. Go to Cloudflare Pages dashboard
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Use these build settings:
   - **Framework preset:** `None` (or `Vite`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node.js version:** `20.x`

### Method 2: Direct Upload
```bash
# Build locally (requires Node.js 20+)
npm install
npm run build

# Upload the 'dist' folder to Cloudflare Pages
```

## ⚠️ Important Build Settings

### Cloudflare Pages Configuration
In your Cloudflare Pages project settings:

**Build Settings:**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: (leave empty)

**Environment Variables:**
- `NODE_VERSION` = `20`
- `NPM_FLAGS` = `--production=false`

### Node.js Version
- **Required:** Node.js 20.x or higher
- **Local Development:** Use `.nvmrc` file (`nvm use`)

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
├── 📁 functions/        # Cloudflare Pages functions
└── 📁 public/           # Static assets
```

## 🎯 Features

### Core Platform
- ✅ **Multi-project architecture** - Portfolio, Admin, KSO
- ✅ **React 18** with TypeScript
- ✅ **React Router v6** for routing
- ✅ **Tailwind CSS v4** for styling
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
- npm

### Local Development
```bash
# Use correct Node.js version
nvm use  # Uses Node.js 20.18.0

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

## 🐛 Troubleshooting

### Common Build Issues

**1. "Unsupported engine" Error**
```bash
# Solution: Use Node.js 20+
nvm install 20
nvm use 20
```

**2. "Cannot resolve module" Errors**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. Build Fails on Cloudflare Pages**
- ✅ Check Node.js version is set to 20.x
- ✅ Ensure build command is `npm run build`
- ✅ Verify build output directory is `dist`
- ✅ Make sure root directory is empty (not `/`)

**4. 404 Errors on Page Refresh**
- ✅ Ensure `_redirects` file exists in `public/` folder
- ✅ Content should be: `/*    /index.html   200`

### Build Configuration Checklist
- [ ] Repository connected to Cloudflare Pages
- [ ] Build command: `npm run build` 
- [ ] Build output: `dist`
- [ ] Node.js version: `20.x`
- [ ] Environment variables: `NODE_VERSION=20`

## 📊 Performance

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimizations
- **Code splitting** - Vendor, router, UI chunks
- **Tree shaking** - Remove unused code
- **Asset optimization** - Images, fonts, SVGs
- **Caching** - Static assets with long TTL

## 📄 License

MIT License - see LICENSE file for details.

---

**Built for Cloudflare Pages** 🚀

**No wrangler.toml needed** - Simple build configuration works best!