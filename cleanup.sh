#!/bin/bash

echo "🔧 Eloxu Project Cleanup Script"
echo "==============================="
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

echo "Removing problematic files..."
echo ""

# Remove duplicate App.tsx from root (keep src/App.tsx)
remove_file "App.tsx"

# Remove problematic TypeScript config
remove_file "tsconfig.node.json"

# Remove Cloudflare worker config (using Pages instead)
remove_file "wrangler.toml"

echo ""
echo "🧹 Cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. If successful, commit and push to GitHub"
echo "4. Deploy on Cloudflare Pages"
echo ""
echo "Expected result: Build should work without dependency errors! ✅"