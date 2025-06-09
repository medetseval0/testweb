#!/bin/bash

echo "🔧 Eloxu Project - FINAL CLEANUP SCRIPT"
echo "========================================"
echo ""
echo "This script will remove the remaining duplicate files that are causing build conflicts."
echo ""

# Function to safely remove file if it exists
remove_file() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "❌ Removing: $file"
        rm "$file"
        echo "✅ Deleted: $file"
        return 0
    else
        echo "✅ Already clean: $file (not found)"
        return 1
    fi
}

echo "🧹 Removing problematic duplicate files..."
echo ""

# Remove duplicate App.tsx from root (keep src/App.tsx)
removed_count=0
if remove_file "App.tsx"; then
    ((removed_count++))
fi

# Remove problematic TypeScript config
if remove_file "tsconfig.node.json"; then
    ((removed_count++))
fi

# Remove Cloudflare worker config (using Pages instead)
if remove_file "wrangler.toml"; then
    ((removed_count++))
fi

echo ""
echo "📊 Cleanup Summary:"
echo "==================="
echo "Files removed: $removed_count"
echo ""

if [ $removed_count -eq 0 ]; then
    echo "✅ All duplicate files already removed!"
else
    echo "✅ Successfully removed $removed_count duplicate file(s)"
fi

echo ""
echo "🔍 Final verification..."

# Check if the essential files exist
echo ""
echo "Essential files check:"
if [ -f "src/App.tsx" ]; then
    echo "✅ src/App.tsx exists (correct entry point)"
else
    echo "❌ src/App.tsx missing (REQUIRED)"
fi

if [ -f "src/main.tsx" ]; then
    echo "✅ src/main.tsx exists (Vite entry point)"
else
    echo "❌ src/main.tsx missing (REQUIRED)"
fi

if [ -f "index.html" ]; then
    echo "✅ index.html exists (HTML entry point)"
else
    echo "❌ index.html missing (REQUIRED)"
fi

if [ -f "tsconfig.json" ]; then
    echo "✅ tsconfig.json exists (TypeScript config)"
else
    echo "❌ tsconfig.json missing (REQUIRED)"
fi

if [ -f "package.json" ]; then
    echo "✅ package.json exists (dependencies)"
else
    echo "❌ package.json missing (REQUIRED)"
fi

echo ""
echo "🚀 Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. Expected: Build completes successfully without Rollup errors"
echo "4. If successful: git add -A && git commit -m 'fix: remove figma assets and duplicates' && git push"
echo "5. Deploy on Cloudflare Pages with NODE_VERSION=20"
echo ""
echo "✅ All Figma asset and duplicate file issues should now be resolved!"
echo ""
echo "If you're still getting build errors, run this to debug:"
echo "npm run build --verbose"