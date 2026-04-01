#!/usr/bin/env bash
set -euo pipefail

# Husanai Code - One-line installer
# Usage: curl -fsSL https://raw.githubusercontent.com/siaosqqw/husanai-code/main/install.sh | bash

REPO="https://github.com/siaosqqw/husanai-code.git"
INSTALL_DIR="${HUSANAI_CODE_HOME:-$HOME/.husanai-code}"
BIN_NAME="husanai-code"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

info()  { echo -e "${CYAN}[INFO]${NC} $*"; }
ok()    { echo -e "${GREEN}[OK]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
fail()  { echo -e "${RED}[ERROR]${NC} $*"; exit 1; }

echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║       Husanai Code Installer         ║${NC}"
echo -e "${GREEN}║   AI Coding CLI powered by Husanai   ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""

# ── 1. Check / Install Bun ──
if command -v bun &>/dev/null; then
    BUN_VER=$(bun --version)
    ok "Bun found: v${BUN_VER}"
else
    info "Bun not found. Installing..."
    curl -fsSL https://bun.sh/install | bash
    # Source bun env
    export BUN_INSTALL="${BUN_INSTALL:-$HOME/.bun}"
    export PATH="$BUN_INSTALL/bin:$PATH"
    if command -v bun &>/dev/null; then
        ok "Bun installed: v$(bun --version)"
    else
        fail "Bun installation failed. Please install manually: https://bun.sh"
    fi
fi

# ── 2. Clone / Update repo ──
if [ -d "$INSTALL_DIR/.git" ]; then
    info "Updating existing installation..."
    cd "$INSTALL_DIR"
    git pull --ff-only origin main 2>/dev/null || {
        warn "Pull failed, doing fresh clone..."
        cd ..
        rm -rf "$INSTALL_DIR"
        git clone --depth 1 "$REPO" "$INSTALL_DIR"
        cd "$INSTALL_DIR"
    }
else
    if [ -d "$INSTALL_DIR" ]; then
        warn "Removing stale install dir..."
        rm -rf "$INSTALL_DIR"
    fi
    info "Cloning Husanai Code..."
    git clone --depth 1 "$REPO" "$INSTALL_DIR"
    cd "$INSTALL_DIR"
fi
ok "Source ready at $INSTALL_DIR"

# ── 3. Install dependencies ──
info "Installing dependencies..."
bun install --frozen-lockfile 2>/dev/null || bun install
ok "Dependencies installed"

# ── 4. Create launcher script ──
LAUNCHER="$INSTALL_DIR/bin/$BIN_NAME"
mkdir -p "$INSTALL_DIR/bin"

cat > "$LAUNCHER" << 'LAUNCHER_EOF'
#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Find bun
if command -v bun &>/dev/null; then
    BUN=bun
elif [ -f "$HOME/.bun/bin/bun" ]; then
    BUN="$HOME/.bun/bin/bun"
else
    echo "Error: bun not found. Run: curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

cd "$SCRIPT_DIR"
exec "$BUN" run --preload "$SCRIPT_DIR/preload.ts" "$SCRIPT_DIR/src/entrypoints/cli.tsx" "$@"
LAUNCHER_EOF

chmod +x "$LAUNCHER"
ok "Launcher created"

# ── 5. Add to PATH ──
BIN_DIR="$INSTALL_DIR/bin"
SHELL_NAME=$(basename "${SHELL:-/bin/bash}")
PROFILE=""

case "$SHELL_NAME" in
    zsh)  PROFILE="$HOME/.zshrc" ;;
    bash)
        if [ -f "$HOME/.bash_profile" ]; then
            PROFILE="$HOME/.bash_profile"
        else
            PROFILE="$HOME/.bashrc"
        fi
        ;;
    fish) PROFILE="$HOME/.config/fish/config.fish" ;;
    *)    PROFILE="$HOME/.profile" ;;
esac

PATH_LINE="export PATH=\"$BIN_DIR:\$PATH\""
if [ "$SHELL_NAME" = "fish" ]; then
    PATH_LINE="set -gx PATH $BIN_DIR \$PATH"
fi

if [ -n "$PROFILE" ] && ! grep -q "husanai-code/bin" "$PROFILE" 2>/dev/null; then
    echo "" >> "$PROFILE"
    echo "# Husanai Code" >> "$PROFILE"
    echo "$PATH_LINE" >> "$PROFILE"
    ok "Added to PATH in $PROFILE"
else
    ok "PATH already configured"
fi

# ── 6. Done ──
echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     Installation Complete! 🎉        ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${CYAN}Next steps:${NC}"
echo ""
echo -e "  1. Set your API key:"
echo -e "     ${YELLOW}export HUSANAI_API_KEY=your-api-key${NC}"
echo ""
echo -e "  2. Start coding:"
echo -e "     ${YELLOW}husanai-code${NC}"
echo ""
echo -e "  Get your API key at: ${CYAN}https://husanai.com${NC}"
echo ""
echo -e "  ${CYAN}Tip:${NC} Add the API key to your shell profile:"
echo -e "     ${YELLOW}echo 'export HUSANAI_API_KEY=your-key' >> $PROFILE${NC}"
echo ""

# Try to make it available immediately
export PATH="$BIN_DIR:$PATH"
