import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // Base URL for deployment
  base: '/',
  
  // Build configuration optimized for Cloudflare Pages
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React libraries
          vendor: ['react', 'react-dom'],
          
          // Router chunk
          router: ['react-router-dom'],
          
          // UI libraries chunk
          ui: [
            'lucide-react',
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip'
          ],
          
          // Charts and utilities
          utils: ['recharts', 'clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    
    // Increase chunk size warning limit for large apps
    chunkSizeWarningLimit: 1000
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true,
    strictPort: false,
    fs: {
      // Allow serving files from project root
      allow: ['..']
    }
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // Path resolution with proper aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './components'),
      '@/lib': path.resolve(__dirname, './lib'),
      '@/styles': path.resolve(__dirname, './styles'),
      '@/kso': path.resolve(__dirname, './kso'),
      '@/imports': path.resolve(__dirname, './imports'),
      '@/public': path.resolve(__dirname, './public')
    }
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ]
  },
  
  // Environment variables
  define: {
    // Ensure process.env is available for some libraries
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})