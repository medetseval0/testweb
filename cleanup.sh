#!/bin/bash

echo "🔧 Eloxu Project Cleanup Script - Updated"
echo "========================================"
echo ""

# Function to safely remove file if it exists
remove_file() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "❌ Removing: $file"
        rm "$file"
        echo "✅ Deleted: $file"
    else
        echo "✅ Already clean: $file (not found)"
    fi
}

echo "Checking for problematic files..."
echo ""

# Remove duplicate App.tsx from root (keep src/App.tsx)
remove_file "App.tsx"

# Remove problematic TypeScript config
remove_file "tsconfig.node.json"

# Remove Cloudflare worker config (using Pages instead)
remove_file "wrangler.toml"

echo ""
echo "🧹 File cleanup complete!"
echo ""

# Check if badge.tsx has been fixed
echo "🔍 Checking Shadcn UI components..."
if [ -f "components/ui/badge.tsx" ]; then
    if grep -q "@radix-ui/react-slot@" "components/ui/badge.tsx"; then
        echo "⚠️  badge.tsx still has version-specific imports"
        echo "    This should be fixed automatically in the updated files"
    else
        echo "✅ badge.tsx uses standard imports"
    fi
fi

echo ""
echo "📋 Expected results after cleanup:"
echo "1. ✅ Only src/App.tsx exists (not root App.tsx)"
echo "2. ✅ No tsconfig.node.json file"
echo "3. ✅ No wrangler.toml file"
echo "4. ✅ badge.tsx uses standard imports"
echo "5. ✅ All dependencies have valid versions"
echo ""
echo "🚀 Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. If successful, commit and push to GitHub"
echo "4. Deploy on Cloudflare Pages with NODE_VERSION=20"
echo ""
echo "Expected result: Build should complete successfully! ✅"