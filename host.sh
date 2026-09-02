#!/usr/bin/env bash
# Deploys this project to Vercel production.
# Usage: ./host.sh
set -e

# Fall back to the full path if `vercel` isn't on PATH yet (fresh installs
# need a new terminal before the global npm bin dir is picked up).
if command -v vercel >/dev/null 2>&1; then
  VERCEL=vercel
else
  VERCEL="$APPDATA/npm/vercel.cmd"
fi

cd "$(dirname "$0")"

echo "==> Checking Vercel login..."
"$VERCEL" whoami >/dev/null 2>&1 || "$VERCEL" login

echo "==> Syncing pnpm lockfile with package.json..."
CI=true pnpm install --no-frozen-lockfile

echo "==> Deploying to production..."
"$VERCEL" --prod --yes
