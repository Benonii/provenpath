# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache python3 make g++ openssl ca-certificates curl

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace configuration and install dependencies
COPY package.json pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/
# Temporarily remove packageManager field to allow pnpm to install
RUN node -e "const fs = require('fs'); const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); delete pkg.packageManager; fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
RUN pnpm install --ignore-scripts

# Copy source code
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Temporarily remove packageManager field to allow pnpm to build
RUN node -e "const fs = require('fs'); const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); delete pkg.packageManager; fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
RUN pnpm --filter frontend build

# Production stage - use Node.js to run the SSR server
FROM node:20-alpine
WORKDIR /app

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install only production dependencies
COPY package.json pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/
# Temporarily remove packageManager field to allow pnpm to install
RUN node -e "const fs = require('fs'); const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); delete pkg.packageManager; fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));"
RUN pnpm install --prod --ignore-scripts

# Copy built application
COPY --from=builder /app/apps/frontend/dist ./apps/frontend/dist
COPY --from=builder /app/apps/frontend/package.json ./apps/frontend/
COPY apps/frontend/server-entry.js ./apps/frontend/server-entry.js

WORKDIR /app/apps/frontend

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

CMD ["node", "server-entry.js"]
