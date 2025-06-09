# Cloudflare Pages Deployment Guide

## 🚀 Deployment Steps

### 1. Repository Setup
- Push this project to GitHub
- Ensure all files are committed

### 2. Cloudflare Pages Configuration
Go to Cloudflare Pages dashboard and use these **exact** settings:

**Framework preset:** `None` (or `Vite`)

**Build Settings:**
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** (leave empty)

**Environment Variables:**
- `NODE_VERSION` = `20`
- `NPM_FLAGS` = `--production=false`

### 3. Deploy
Click "Save and Deploy" - your site should build successfully!

## ✅ Expected Build Process

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Pages
# (automatic when connected to Git)
```

## 🐛 If Build Fails

**Check these settings:**
- [ ] Node.js version is set to `20`
- [ ] Build command is exactly `npm run build`
- [ ] Build output directory is exactly `dist`
- [ ] Root directory is empty (not `/`)

**Environment Variables:**
- [ ] `NODE_VERSION=20` is set
- [ ] `NPM_FLAGS=--production=false` is set (optional)

## 📁 What Gets Deployed

The `dist/` folder contains:
- `index.html` - Main HTML file
- `assets/` - JS, CSS, images
- `_redirects` - SPA routing rules

## 🌐 After Deployment

Your app will be available at:
- `https://your-project-name.pages.dev`
- Custom domain (if configured)

All routes will work correctly:
- `/` - Project Portfolio
- `/kso/admin` - KSO Admin
- `/kso/site/home` - KSO Marketplace
- And all other routes

## 📞 Support

If deployment fails:
1. Check build logs in Cloudflare Pages dashboard
2. Verify all settings match this guide
3. Try rebuilding with same settings