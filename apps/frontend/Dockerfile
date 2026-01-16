# Frontend Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install Python and build tools for native dependencies
RUN apk add --no-cache python3 make g++

# Copy package files and lock file
COPY ./apps/frontend/package.json ./package-lock.json ./
RUN npm install --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./apps/frontend .
# Ensure .tanstack directory is copied (needed for TanStack Router/Start)
COPY ./apps/frontend/.tanstack ./.tanstack

# Build the application
RUN npm run build

# Production image, copy all the files and run TanStack Start server
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 5173

ENV PORT 5173

# Start the TanStack Start server
CMD ["node", "dist/server/server.js"]
